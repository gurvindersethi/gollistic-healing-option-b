import { createElement } from "react";
import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email/resend";
import { AdminBookingEmail } from "@/lib/email/templates/AdminBookingEmail";
import { CustomerConfirmationEmail } from "@/lib/email/templates/CustomerConfirmationEmail";
import { bookingFormSchema } from "@/lib/validations/booking";

const bookingApiSchema = bookingFormSchema.extend({
  preferredDate: z.string().trim().optional(),
  preferredTime: z.string().trim().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bookingApiSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please review the form and correct the highlighted fields.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const values = {
      ...parsed.data,
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    const bookingEmail = process.env.BOOKING_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!bookingEmail || !fromEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "The booking service is not configured correctly.",
        },
        { status: 500 },
      );
    }

    await Promise.all([
      sendEmail({
        to: bookingEmail,
        subject: "New Appointment Request",
        react: createElement(AdminBookingEmail, { values }),
        from: fromEmail,
      }),
      sendEmail({
        to: parsed.data.email,
        subject: "Appointment Request Received",
        react: createElement(CustomerConfirmationEmail, { values }),
        from: fromEmail,
      }),
    ]);

    return NextResponse.json({ success: true, message: "Thank you. Your appointment request has been received." }, { status: 200 });
  } catch (error) {
    console.error("Booking submission failed", error);

    return NextResponse.json(
      {
        success: false,
        error: "We could not send your booking request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
