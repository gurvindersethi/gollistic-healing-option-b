import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CenteredHero } from "@/components/sections/CenteredHero";
import { BookingForm } from "@/components/sections/BookingForm";
import { BlessingCallout } from "@/components/sections/BlessingCallout";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { contact, socials } from "@/content/shared/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "However you reach out, you'll reach me. Call, text, email, or send a message — for healing, coaching, or learning Gurbani.",
};

const contactMethods = [
  {
    icon: "call",
    title: "Call or text",
    value: contact.phoneDisplay,
    caption: "The quickest way to reach me.",
    href: `tel:${contact.phoneHref}`,
  },
  {
    icon: "mail",
    title: "Email",
    value: contact.email,
    caption: "For details and longer questions.",
    href: `mailto:${contact.email}`,
  },
  {
    icon: "location_on",
    title: "Where I serve",
    value: contact.serviceArea,
    caption: "Home visits locally · coaching & classes online.",
  },
];

const expectations = [
  {
    icon: "schedule",
    title: "A personal reply",
    description: "Every message reaches me directly — never an automated system.",
  },
  {
    icon: "home_health",
    title: "Home visits",
    description: "$60 per visit ($75 if travel is significantly far), 45–60 minutes, Bakersfield area.",
  },
  {
    icon: "public",
    title: "Online welcome",
    description: "Coaching and Gurbani classes are available online, wherever you are.",
  },
];

export default function ContactPage() {
  return (
    <>
      <CenteredHero
        eyebrow="Get in touch"
        heading={
          <>
            However you reach out, you&apos;ll <em className="font-medium italic text-sage">reach me</em>.
          </>
        }
        lead="Call, text, email, or send a message below. I reply personally to every enquiry — whether it's for healing, coaching, or learning Gurbani."
      />

      <section>
        <Container className="pb-16">
          <div className="grid gap-[22px] sm:grid-cols-3">
            {contactMethods.map((method) => {
              const inner = (
                <>
                  <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-tile-bg">
                    <MaterialIcon name={method.icon} className="text-[27px] text-sage" />
                  </div>
                  <h3 className="mb-1 font-heading text-xl font-semibold text-ink">{method.title}</h3>
                  <p className="break-all text-base font-semibold text-sage">{method.value}</p>
                  <p className="mt-1.5 text-[13.5px] text-soft-muted">{method.caption}</p>
                </>
              );
              const cardClass =
                "rounded-[22px] border border-border-warm bg-card p-[30px] shadow-[0_10px_30px_rgba(78,70,54,0.05)]";
              return method.href ? (
                <a key={method.title} href={method.href} className={cardClass}>
                  {inner}
                </a>
              ) : (
                <div key={method.title} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="form" className="border-t border-border-warm bg-band">
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-border-warm-2 bg-card p-[38px] shadow-[0_20px_50px_rgba(78,70,54,0.1)]">
            <BookingForm
              heading="Send a message"
              messageLabel="Your message"
              messagePlaceholder="Tell me a little about what you're hoping for…"
              selectOptions={["Gollistic Healing — pain relief", "Life Coaching", "Gurbani Teaching", "Something else"]}
              submitLabel="Send message"
              successTitle="Thank you for reaching out"
              successBody="Your message is on its way. I'll respond personally, soon, with care."
              footnote="Held in confidence — offered as seva, with sincerity."
            />
          </div>

          <div className="self-start">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
              A few things to know
            </div>
            <h2 className="my-3.5 font-heading text-[30px] font-semibold leading-[1.2] text-ink">
              What to expect when you reach out.
            </h2>
            <div className="mb-8 flex flex-col gap-4">
              {expectations.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <MaterialIcon name={item.icon} className="mt-0.5 text-[22px] text-sage" />
                  <div>
                    <div className="text-[15px] font-bold text-ink">{item.title}</div>
                    <div className="text-sm leading-relaxed text-muted">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <BlessingCallout description="Healing is not a business for me — it is seva. Reach out with whatever you carry, and you'll be met with patience and care." />
            <div className="mt-6 flex gap-3">
              <a
                href={socials.instagram.url}
                className="inline-flex items-center gap-2 rounded-full border border-border-warm-2 bg-card px-4 py-2.5 text-[13.5px] font-bold text-[#52493B]"
              >
                <MaterialIcon name="photo_camera" className="text-lg text-terracotta" />
                Instagram
              </a>
              <a
                href={socials.youtube.url}
                className="inline-flex items-center gap-2 rounded-full border border-border-warm-2 bg-card px-4 py-2.5 text-[13.5px] font-bold text-[#52493B]"
              >
                <MaterialIcon name="play_circle" className="text-lg text-terracotta" />
                YouTube
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
