import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CenteredHero } from "@/components/sections/CenteredHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website handles the information you provide through the contact form.",
};

const sections = [
  {
    title: "What this site collects",
    body: "This website does not use cookies, analytics, or tracking scripts. The only information collected is what you choose to enter into the contact or booking forms: your name, phone, email, what you're reaching out about, and your message.",
  },
  {
    title: "How the forms work",
    body: "When you submit a form, your browser opens an email pre-addressed to Kanwaljit Singh's own email account, with your details filled in. The information goes directly to that email inbox — this website does not store, log, or have its own database of your submission.",
  },
  {
    title: "Third parties",
    body: "This site does not share, sell, or transmit your information to any third party.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent using the contact details on the Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <CenteredHero eyebrow="Legal" heading="Privacy Policy" lead="How this website currently handles your information." />
      <section>
        <Container className="mx-auto flex max-w-2xl flex-col gap-10 pb-24">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl font-semibold text-ink">{section.title}</h2>
              <p className="mt-3 text-ink-secondary">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
