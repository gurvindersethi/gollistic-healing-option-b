import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroTwoColumn } from "@/components/sections/HeroTwoColumn";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { IconCard } from "@/components/sections/IconCard";
import { CTACard } from "@/components/sections/CTACard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { DarkSection } from "@/components/sections/DarkSection";
import { ContactMethodRow } from "@/components/sections/ContactMethodRow";
import { BookingForm } from "@/components/sections/BookingForm";
import { contact } from "@/content/shared/site";

export const metadata: Metadata = {
  title: "Life Coaching — Find Clarity & Balance",
  description:
    "An unhurried, compassionate space to untangle what weighs on you — guided by deep listening, practical steps, and the wisdom of Gurbani. Bakersfield, CA & online.",
};

const focusAreas = [
  {
    icon: "spa",
    title: "Stress & overwhelm",
    description: "Quiet the noise of a racing mind. Simple practices and perspective to help you breathe and steady yourself again.",
  },
  {
    icon: "explore",
    title: "Direction & purpose",
    description: "When the path feels unclear, we'll explore what truly matters to you and the small, honest steps toward it.",
  },
  {
    icon: "change_history",
    title: "Life transitions",
    description: "Moving, loss, a new chapter, or simply growing older — gentle support through the moments that unsettle us.",
  },
  {
    icon: "favorite",
    title: "Relationships & family",
    description: "Easing tension at home and rebuilding understanding — within yourself and with the people you love.",
  },
  {
    icon: "wb_sunny",
    title: "Confidence & self-doubt",
    description: "Softening the inner critic and reconnecting with your own worth, steadiness, and quiet strength.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "We talk, openly",
    description: "A free, no-pressure first conversation to understand where you are and what you're hoping for.",
  },
  {
    number: "02",
    title: "We find clarity",
    description: "Together we name what matters and gently untangle the knots holding you back.",
  },
  {
    number: "03",
    title: "We take small steps",
    description: "Practical, doable actions — paired with reflection and, if you wish, spiritual grounding.",
  },
  {
    number: "04",
    title: "We walk alongside",
    description: "Ongoing, caring support as you grow — at whatever pace feels right for you.",
  },
];

export default function LifeCoachingPage() {
  return (
    <>
      <HeroTwoColumn
        eyebrow="Life Coaching · Bakersfield, CA & Online"
        heading={
          <>
            Find <em className="font-medium italic text-sage">clarity</em>, balance, and a quieter mind.
          </>
        }
        lead="Life coaching with me is an unhurried, compassionate space to untangle what weighs on you — guided by deep listening, practical steps, and the timeless wisdom of Gurbani."
        primaryCta={{ label: "Book a conversation", href: "#contact" }}
        secondaryCta={{ label: "How I can help", href: "#focus" }}
        stats={[
          { value: "1-on-1", label: "personal sessions" },
          { value: "Online", label: "or in person" },
        ]}
        image={{
          src: "/images/life-coaching.png",
          alt: "Areas life coaching can help with — stress, direction, life transitions, relationships, confidence, and grounding",
        }}
        floatingChip={{ icon: "hearing", title: "Listened to, fully", subtitle: "Before any advice" }}
      />

      <TrustStrip
        items={[
          { icon: "favorite", label: "Compassionate & confidential" },
          { icon: "menu_book", label: "Rooted in Gurbani wisdom" },
          { icon: "target", label: "Practical, gentle steps" },
          { icon: "diversity_1", label: "All faiths & backgrounds welcome" },
        ]}
      />

      <section id="focus">
        <Container className="py-24">
          <SectionIntro
            eyebrow="What we can work on"
            title="Wherever life feels heavy, we begin there."
            lead="There's no script. We start with what's weighing on you most, and move at the pace your heart can hold."
            className="mb-14"
          />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <IconCard key={area.title} {...area} />
            ))}
            <CTACard
              icon="menu_book"
              title="Spiritual grounding"
              description="For those who wish it, we draw on Gurbani to find calm, meaning, and a deeper sense of belonging."
              ctaLabel="Explore Gurbani teaching"
              ctaHref="/gurbani-teaching"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-border-warm bg-band">
        <Container className="py-24">
          <SectionIntro
            eyebrow="How coaching works"
            title="A gentle rhythm, never a formula."
            className="mb-[58px]"
          />
          <ProcessSteps steps={approachSteps} />
        </Container>
      </section>

      <DarkSection>
        <Container className="mx-auto max-w-[900px] py-[90px] text-center">
          <span className="font-ekonkar mb-6 inline-block text-[46px] leading-none text-gold">ੴ</span>
          <p className="font-heading text-[30px] font-medium italic leading-[1.4] text-[#FBF7EC]">
            &quot;I don&apos;t hand you answers. I sit beside you while you find your own — with patience,
            compassion, and a peaceful mind.&quot;
          </p>
          <div className="mt-[26px] text-[15px] font-bold text-gold">Kanwaljit Singh</div>
          <div className="text-[13.5px] text-[#9C9484]">Life coach · Healer · Gurbani teacher</div>
        </Container>
      </DarkSection>

      <section id="contact" className="border-t border-border-warm bg-band">
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
              Book a session
            </div>
            <h2 className="my-3.5 font-heading text-4xl font-semibold leading-[1.15] text-ink">
              Whatever you&apos;re carrying — you don&apos;t have to carry it alone.
            </h2>
            <p className="mb-[34px] max-w-[420px] text-base leading-relaxed text-muted">
              Reach out and we&apos;ll arrange a gentle first conversation. No commitment, no cost — just a chance
              to be heard.
            </p>
            <div className="flex flex-col gap-[18px]">
              <ContactMethodRow icon="call" label="Call or text" value={contact.phoneDisplay} href={`tel:${contact.phoneHref}`} />
              <ContactMethodRow icon="mail" label="Email" value={contact.email} />
              <ContactMethodRow icon="location_on" label="Sessions" value={`Online & in person · ${contact.serviceArea}`} />
            </div>
          </div>
          <div className="rounded-3xl border border-border-warm-2 bg-card p-9 shadow-[0_20px_50px_rgba(78,70,54,0.1)]">
            <BookingForm
              heading="Book a Session Slot"
              messageLabel="What's on your mind?"
              messagePlaceholder="Share as much or as little as you like…"
              defaultInterest="Life Coaching"
              submitLabel="Book a Session Slot"
              successTitle="Your session is on its way to being booked"
              successBody="Thank you for reaching out. I'll confirm a time that suits you soon."
              footnote="Held in confidence, offered as seva."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
