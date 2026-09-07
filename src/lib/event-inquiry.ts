import { z } from "zod";

// Evaluate at validation time so an open tab cannot submit yesterday's date.
export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function createEventInquirySchema(eventIds: readonly string[]) {
  return z.object({
    eventType: z.string().refine(value => value === "other" || eventIds.includes(value), "Choose an event type"),
    preferredDate: z.iso.date("Choose a valid date").refine(value => value >= localToday(), "Choose today or a future date"),
    guests: z.string().trim().regex(/^[1-9]\d*$/, "Enter a whole number of at least 1 guest").refine(value => Number.isSafeInteger(Number(value)), "Enter a smaller whole number"),
    name: z.string().trim().min(1, "Enter your name").max(100, "Use 100 characters or fewer"),
    email: z.string().trim().email("Enter a valid email address").max(254, "Use 254 characters or fewer"),
    phone: z.string().trim().regex(/^\+?[\d\s().-]+$/, "Enter a phone number using digits and optional +, spaces, parentheses or hyphens").refine(value => { const digits = value.replace(/\D/g, ""); return digits.length >= 7 && digits.length <= 15; }, "Enter a phone number with 7–15 digits"),
    message: z.string().trim().max(2000, "Use 2,000 characters or fewer"),
  });
}
export type EventInquiryValues = z.infer<ReturnType<typeof createEventInquirySchema>>;
export const emptyEventInquiry: EventInquiryValues = { eventType: "", preferredDate: "", guests: "", name: "", email: "", phone: "", message: "" };
