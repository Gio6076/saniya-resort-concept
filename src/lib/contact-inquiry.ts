import { z } from "zod";

export const contactTopics = ["Package or rate idea", "Accommodation selection", "Celebration planning", "Location and travel planning", "Something else"] as const;
export const contactInquirySchema = z.object({
  topic: z.enum(contactTopics, { error: "Choose an inquiry topic" }),
  name: z.string().trim().min(1, "Enter your name").max(100, "Use 100 characters or fewer"),
  email: z.string().trim().email("Enter a valid email address").max(254, "Use 254 characters or fewer"),
  phone: z.string().trim().max(40, "Use 40 characters or fewer").refine(value => !value || /^\+?[\d\s().-]+$/.test(value), "Use digits and optional +, spaces, parentheses or hyphens"),
  message: z.string().trim().min(10, "Share at least 10 characters so this demo has some context").max(2000, "Use 2,000 characters or fewer"),
});
export type ContactInquiryValues = z.infer<typeof contactInquirySchema>;
export const emptyContactInquiry: ContactInquiryValues = { topic: "Something else", name: "", email: "", phone: "", message: "" };
