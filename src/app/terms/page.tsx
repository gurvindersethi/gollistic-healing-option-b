import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CenteredHero } from "@/components/sections/CenteredHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using this website and the services described on it.",
};

const sections = [
  {
    title: "About these services",
    body: "Gollistic Healing, Life Coaching, and Gurbani & Kirtan Teaching, as described on this website, are offered personally by Kanwaljit Singh. Pricing and session details are current estimates and may be confirmed directly before booking.",
  },
  {
    title: "Not medical advice",
    body: "Gollistic Healing techniques and life coaching conversations are offered for relaxation, wellbeing, and personal guidance. They are not a substitute for medical diagnosis, treatment, or professional mental health care.",
  },
  {
    title: "Booking and cancellation",
    body: "Sessions and classes are arranged directly by phone, email, or the contact form. Scheduling and cancellation terms are confirmed with you individually.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent using the contact details on the Contact page.",
  },
];

export default function TermsPage() {
  return (
    <>
      <CenteredHero eyebrow="Legal" heading="Terms of Use" lead="Plain-language terms for using this website and its services." />
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
