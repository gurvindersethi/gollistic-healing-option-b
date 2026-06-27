import { type ReactElement } from "react";
import { Resend } from "resend";

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  react: ReactElement;
  from?: string;
};

export function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const bookingEmail = process.env.BOOKING_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!bookingEmail) {
    throw new Error("BOOKING_EMAIL is not configured.");
  }

  if (!fromEmail) {
    throw new Error("FROM_EMAIL is not configured.");
  }

  return {
    resend: new Resend(apiKey),
    bookingEmail,
    fromEmail,
  } as const;
}

export async function sendEmail({ to, subject, react, from }: SendEmailInput) {
  const { resend, fromEmail } = getEmailConfig();

  const result = await resend.emails.send({
    from: from ?? fromEmail,
    to,
    subject,
    react,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}
