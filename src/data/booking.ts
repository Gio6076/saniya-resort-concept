import { addDays, format, isValid, parseISO, startOfDay } from "date-fns";
import { z } from "zod";
import { accommodations } from "@/data/home";

export const addOns = [
  { id: "breakfast", name: "Breakfast basket", description: "A relaxed start for everyone in your party.", price: 450, billing: "per guest / night" },
  { id: "celebration-setup", name: "Celebration setup", description: "A simple welcome setup for a birthday or milestone.", price: 2500, billing: "per stay" },
  { id: "extra-bedding", name: "Extra bedding", description: "One additional bedding setup on request.", price: 600, billing: "per stay" },
  { id: "late-checkout", name: "Late checkout request", description: "A request for a little more time before departure.", price: 1200, billing: "per stay" },
] as const;

export type AddOnId = (typeof addOns)[number]["id"];
export type BookingStep = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type BookingForm = {
  checkIn: string; checkOut: string; accommodationId: string; adults: number; children: number;
  addOns: AddOnId[]; firstName: string; lastName: string; email: string; phone: string;
  specialRequests: string; acknowledgement: boolean;
};

export const bookingSchema = z.object({
  checkIn: z.string().min(1, "Choose an arrival date"), checkOut: z.string().min(1, "Choose a departure date"),
  accommodationId: z.string().min(1, "Choose an accommodation"), adults: z.number().int().min(1, "At least one adult is required"),
  children: z.number().int().min(0), addOns: z.array(z.enum(["breakfast", "celebration-setup", "extra-bedding", "late-checkout"])), firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"), email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(7, "Enter a valid phone number"), specialRequests: z.string(),
  acknowledgement: z.boolean().refine(value => value, "Please acknowledge the demonstration notice"),
}).superRefine((value, ctx) => {
  const today = startOfDay(new Date()); const arrival = parseISO(value.checkIn); const departure = parseISO(value.checkOut);
  if (!isValid(arrival) || arrival < today) ctx.addIssue({ code: "custom", path: ["checkIn"], message: "Arrival cannot be in the past" });
  if (!isValid(departure) || departure <= arrival) ctx.addIssue({ code: "custom", path: ["checkOut"], message: "Departure must be after arrival" });
  const room = accommodations.find(item => item.id === value.accommodationId);
  if (room && value.adults + value.children > room.capacity) ctx.addIssue({ code: "custom", path: ["adults"], message: `This accommodation sleeps up to ${room.capacity} guests` });
});

export function defaultBookingValues(): BookingForm {
  const today = startOfDay(new Date());
  return { checkIn: format(addDays(today, 7), "yyyy-MM-dd"), checkOut: format(addDays(today, 9), "yyyy-MM-dd"), accommodationId: "", adults: 2, children: 0, addOns: [], firstName: "", lastName: "", email: "", phone: "", specialRequests: "", acknowledgement: false };
}

type QueryValue = string | string[] | undefined;
export function parseBookingQuery(query: Record<string, QueryValue>): Partial<BookingForm> {
  const defaults = defaultBookingValues(); const single = (key: string) => typeof query[key] === "string" ? query[key] : undefined;
  const checkIn = single("checkIn"); const checkOut = single("checkOut"); const guests = Number(single("guests"));
  const validDates = !!checkIn && !!checkOut && isValid(parseISO(checkIn)) && isValid(parseISO(checkOut)) && parseISO(checkIn) >= startOfDay(new Date()) && parseISO(checkOut) > parseISO(checkIn);
  const room = accommodations.find(item => item.id === single("accommodation")); const totalGuests = Number.isInteger(guests) && guests >= 1 && guests <= 12 ? guests : defaults.adults;
  return { checkIn: validDates ? checkIn : defaults.checkIn, checkOut: validDates ? checkOut : defaults.checkOut, accommodationId: room?.id ?? "", adults: Math.min(totalGuests, room?.capacity ?? 12), children: 0 };
}

export function formatDemoPrice(value: number) { return `₱${value.toLocaleString("en-PH")}`; }
export function calculateBookingTotal(values: BookingForm) {
  const room = accommodations.find(item => item.id === values.accommodationId); const nights = Math.max(1, Math.round((parseISO(values.checkOut).getTime() - parseISO(values.checkIn).getTime()) / 86400000));
  const roomTotal = (room?.demoPricePerNight ?? 0) * nights; const addOnTotal = values.addOns.reduce((total, id) => { const item = addOns.find(addOn => addOn.id === id); if (!item) return total; return total + item.price * (item.id === "breakfast" ? values.adults + values.children : 1) * (item.id === "breakfast" ? nights : 1); }, 0); const subtotal = roomTotal + addOnTotal; const fees = Math.round(subtotal * .08);
  return { nights, roomTotal, addOnTotal, subtotal, fees, total: subtotal + fees };
}
