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

type CustomerConfirmationEmailProps = {
  values: BookingFormValues & { submittedAt: string };
};

export function CustomerConfirmationEmail({ values }: CustomerConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your appointment request has been received</Preview>
      <Tailwind>
        <Body style={{ margin: 0, padding: 0, backgroundColor: "#f7f1e7" }}>
          <Container style={{ maxWidth: 640, margin: "0 auto", padding: "32px 20px" }}>
            <Section style={{ backgroundColor: "#ffffff", borderRadius: 18, padding: 28, border: "1px solid #e9dfc8" }}>
              <Heading style={{ margin: 0, fontSize: 28, color: "#2f2a22", fontFamily: "Arial, sans-serif" }}>
                Thank you for reaching out
              </Heading>
              <Text style={{ margin: "12px 0 0", color: "#655d4d", fontSize: 15, lineHeight: 1.7 }}>
                Your appointment request has been received. I will review it and follow up soon.
              </Text>
              <Hr style={{ margin: "24px 0", borderColor: "#e9dfc8" }} />
              <Heading as="h3" style={{ margin: "0 0 12px", fontSize: 20, color: "#2f2a22" }}>
                Appointment details
              </Heading>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Name</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.name}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Service</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.interest || "Not specified"}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Preferred Date</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.preferredDate || "Not specified"}</Text>
              <Text style={{ margin: "0 0 8px", fontSize: 14, color: "#7a715d", fontWeight: 700 }}>Preferred Time</Text>
              <Text style={{ margin: "0 0 16px", fontSize: 15, color: "#2f2a22" }}>{values.preferredTime || "Not specified"}</Text>
              <Hr style={{ margin: "24px 0", borderColor: "#e9dfc8" }} />
              <Heading as="h3" style={{ margin: "0 0 12px", fontSize: 20, color: "#2f2a22" }}>
                What happens next
              </Heading>
              <Text style={{ margin: "0 0 8px", fontSize: 15, color: "#2f2a22", lineHeight: 1.7 }}>
                I will respond personally to confirm availability and arrange the next step.
              </Text>
              <Text style={{ margin: "0 0 8px", fontSize: 15, color: "#2f2a22", lineHeight: 1.7 }}>
                If you need a quicker reply, please call or text at (818) 800-2039.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
