import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { BookingFormValues } from "@/lib/validations/booking";

type AdminBookingEmailProps = {
  values: BookingFormValues & { submittedAt: string };
};

export function AdminBookingEmail({ values }: AdminBookingEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New appointment request from {values.name}</Preview>
      <Tailwind>
        <Body style={{ margin: 0, padding: 0, backgroundColor: "#f7f1e7" }}>
          <Container style={{ maxWidth: 640, margin: "0 auto", padding: "32px 20px" }}>
            <Section style={{ backgroundColor: "#ffffff", borderRadius: 18, padding: 28, border: "1px solid #e9dfc8" }}>
              <Heading style={{ margin: 0, fontSize: 26, color: "#2f2a22", fontFamily: "Arial, sans-serif" }}>
                New Appointment Request
              </Heading>
              <Text style={{ margin: "12px 0 0", color: "#655d4d", fontSize: 15, lineHeight: 1.6 }}>
                A new appointment inquiry has been submitted through the website.
              </Text>
              <Hr style={{ margin: "24px 0", borderColor: "#e9dfc8" }} />
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Customer Name</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.name}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Phone</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.phone}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Email</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.email}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Service</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.interest || "Not specified"}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Preferred Date</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.preferredDate || "Not specified"}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Preferred Time</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.preferredTime || "Not specified"}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Message</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22", lineHeight: 1.6 }}>
                {values.message || "No additional details provided."}
              </Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Timestamp</Text>
              <Text style={{ margin: 0, fontSize: 15, color: "#2f2a22" }}>{values.submittedAt}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
