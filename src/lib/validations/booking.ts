import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  interest: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
