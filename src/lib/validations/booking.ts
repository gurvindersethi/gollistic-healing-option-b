import { z } from "zod";

const requiredFutureDateTime = (date: string | undefined, time: string | undefined) => {
  if (!date || !time) {
    return false;
  }

  const selectedDateTime = new Date(`${date}T${time}`);

  if (Number.isNaN(selectedDateTime.getTime())) {
    return false;
  }

  return selectedDateTime.getTime() > Date.now();
};

export const bookingFormSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name."),
    phone: z.string().trim().min(7, "Please enter a phone number."),
    email: z.string().trim().email("Please enter a valid email address."),
    interest: z.string().trim().optional(),
    preferredDate: z.string().trim().optional(),
    preferredTime: z.string().trim().optional(),
    message: z.string().trim().optional(),
  })
  .superRefine((values, ctx) => {
    const date = values.preferredDate?.trim();
    const time = values.preferredTime?.trim();

    if (!date) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please choose a preferred date.",
        path: ["preferredDate"],
      });
    }

    if (!time) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please choose a preferred time.",
        path: ["preferredTime"],
      });
    }

    if (date && time && !requiredFutureDateTime(date, time)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please choose a date and time in the future.",
        path: ["preferredDate"],
      });
    }
  });

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
