import type { ContactMethod, PlanningQuestion } from "@/types/content";

export const contactDetails = { location: "Cavite, Philippines · broad location placeholder", phone: "+63 000 000 0000", email: "hello@example.com" } as const;

export const contactMethods: ContactMethod[] = [
  { label: "Demo email", value: contactDetails.email, href: `mailto:${contactDetails.email}`, note: "Replace with a verified business email before publishing.", icon: "mail" },
  { label: "Demo phone", value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s/g, "")}`, note: "Placeholder only; it does not reach the resort.", icon: "phone" },
  { label: "Planning message", value: "Use the local demo form", note: "The form previews a message in this browser and sends nothing.", icon: "message" },
];

export const planningQuestions: PlanningQuestion[] = [
  { question: "Where is the resort?", answer: "This concept uses only a broad Cavite location placeholder. It deliberately does not publish an exact address, coordinates, or map pin." },
  { question: "How should we plan the trip?", answer: "Before a real visit, verify the official address, route options, parking or transfer arrangements, accessibility needs, and current local travel conditions with an authorized business contact." },
  { question: "Can this page confirm a booking or package?", answer: "No. The booking and package journeys are interactive portfolio demonstrations. They never check live availability, reserve a date, or take payment." },
  { question: "Can you confirm operating hours or policies?", answer: "No. This independent concept does not represent verified business hours, entry rules, cancellation policies, or resort services. Request those from an official source." },
];
