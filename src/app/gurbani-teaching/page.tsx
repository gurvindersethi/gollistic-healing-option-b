import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroTwoColumn } from "@/components/sections/HeroTwoColumn";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { IconCard } from "@/components/sections/IconCard";
import { CTACard } from "@/components/sections/CTACard";
import { DarkSection } from "@/components/sections/DarkSection";
import { ContactMethodRow } from "@/components/sections/ContactMethodRow";
import { BookingForm } from "@/components/sections/BookingForm";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/shared/site";

export const metadata: Metadata = {
  title: "Gurbani Teaching — Read, Understand & Live Gurbani",
  description:
    "From your first Gurmukhi letters to singing shabads with feeling, taught gently and patiently as seva. Online and in person, Bakersfield, CA.",
};

const learnAreas = [
  {
    glyph: "ੳ",
    title: "Reading Gurmukhi",
    description: "The Painti Akhri (35 letters), vowels, and how they join — until reading flows naturally and with confidence.",
  },
  {
    icon: "record_voice_over",
    title: "Santhia & pronunciation",
    description: "Careful, correct pronunciation of each word — so Gurbani is recited the way it is meant to be spoken.",
  },
  {
    icon: "translate",
    title: "Meaning & vichar",
    description: "Understanding shabads — their meaning and reflection — so the words guide how you live, not just what you read.",
  },
  {
    icon: "music_note",
    title: "Kirtan & raag",
    description: "Singing shabads with melody and devotion — an introduction to keertan and the feeling behind the sound.",
  },
  {
    icon: "wb_twilight",
    title: "Nitnem & daily practice",
    description: "Building a gentle, steady daily routine of the banis — a discipline that anchors the mind and the day.",
  },
];

const whoItsFor = [
  { icon: "child_care", label: "Children taking their first steps" },
  { icon: "groups", label: "Youth & diaspora families reconnecting" },
  { icon: "school", label: "Adults learning to read from scratch" },
  { icon: "self_improvement", label: "Elders deepening a lifelong practice" },
];

const formatCards = [
  {
    icon: "videocam",
    title: "Online or in person",
    description: "Join from anywhere in the world, or in person in the Bakersfield area.",
  },
  {
    icon: "person",
    title: "1-on-1 or small groups",
    description: "Personal attention at your own pace, or learn alongside family and friends.",
  },
  {
    icon: "volunteer_activism",
    title: "Affordable & personal",
    description: "Every class is taught with full attention and an open heart, at $50 per session.",
  },
];

export default function GurbaniTeachingPage() {
  return (
    <>
      <HeroTwoColumn
        eyebrow="Gurbani & Kirtan · Online & in person"
        heading={
          <>
            Learn to read, understand, and <em className="font-medium italic text-sage">live</em> Gurbani.
          </>
        }
        lead="From your first Gurmukhi letters to singing shabads with feeling, I teach gently and patiently — so the words don't just reach the tongue, but settle into the heart."
        primaryCta={{ label: "Join a class", href: "#contact" }}
        secondaryCta={{ label: "What you'll learn", href: "#learn" }}
        stats={[
          { value: "All ages", label: "children to elders" },
          { value: "1-on-1", label: "& small groups" },
          { value: "$50", label: "per session" },
        ]}
        image={{
          src: "/images/gurbani-teaching.png",
          alt: "Gurbani Teaching, the way of life — reading Gurmukhi, santhia, meaning & vichar, kirtan & raag, and nitnem",
        }}
        floatingChip={{ icon: "music_note", title: "Kirtan, with feeling", subtitle: "Not just the notes" }}
      />

      <TrustStrip
        items={[
          { icon: "child_care", label: "Patient with beginners" },
          { icon: "record_voice_over", label: "Correct pronunciation (santhia)" },
          { icon: "translate", label: "Meaning, not just recitation" },
          { icon: "videocam", label: "Learn from anywhere" },
        ]}
      />

      <section id="learn">
        <Container className="py-24">
          <SectionIntro
            eyebrow="What you'll learn"
            title="A path from first letters to living wisdom."
            lead="We start wherever you are. Each step is taught with care, never rushed, and always with meaning."
            className="mb-14"
          />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {learnAreas.map((area) => (
              <IconCard key={area.title} {...area} />
            ))}
            <CTACard
              glyph="ੴ"
              title="Start where you are"
              description="Never read a word of Gurmukhi? That's the perfect place to begin. We'll go one letter at a time."
              ctaLabel="Begin learning"
              ctaHref="#contact"
            />
          </div>
        </Container>
      </section>

      <DarkSection>
        <Container className="mx-auto max-w-[860px] py-24 text-center">
          <div className="mb-[30px] text-[13px] font-bold uppercase tracking-[1.5px] text-gold">Mool Mantar</div>
          <div className="font-gurmukhi text-[34px] font-bold leading-[1.7] tracking-wide text-[#FBF7EC]">
            ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ
            <br />
            ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥
          </div>
          <p className="mx-auto mt-8 max-w-[560px] text-base italic leading-relaxed text-[#B8B1A1]">
            &quot;One Universal Creator. Truth is the Name. Creative Being, without fear, without hatred. Beyond
            death, beyond birth, self-existent — known by the Guru&apos;s grace.&quot;
          </p>
          <div className="mt-[30px] text-[13.5px] text-soft-muted">
            A line at a time, we read it, sound it, and sit with what it means.
          </div>
        </Container>
      </DarkSection>

      <section>
        <Container className="grid gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">Who it&apos;s for</div>
            <h2 className="my-3.5 max-w-[440px] font-heading text-4xl font-semibold leading-[1.15] text-ink">
              For anyone drawn to the words — at any age, from any beginning.
            </h2>
            <p className="max-w-[470px] text-base leading-relaxed text-muted">
              Whether you&apos;re a parent hoping your children connect with their roots, a young adult reclaiming
              the language, or an elder deepening a lifelong practice — there&apos;s a gentle place for you here.
            </p>
          </div>
          <div className="flex flex-col gap-[13px]">
            {whoItsFor.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3.5 rounded-2xl border border-border-warm bg-card px-5 py-4"
              >
                <MaterialIcon name={item.icon} className="text-[22px] text-sage" />
                <span className="text-[15px] font-semibold text-[#52493B]">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-warm bg-band">
        <Container className="py-24">
          <SectionIntro eyebrow="How classes work" title="Flexible, personal teaching for every learner." className="mb-[54px]" />
          <div className="grid gap-[22px] sm:grid-cols-3">
            {formatCards.map((card) => (
              <div key={card.title} className="rounded-[22px] border border-border-warm bg-card p-8 text-center">
                <MaterialIcon name={card.icon} className="text-[34px] text-sage" />
                <h3 className="my-2 font-heading text-xl font-semibold text-ink">{card.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
              Simple, honest pricing
            </div>
            <h2 className="my-4 font-heading text-4xl font-semibold leading-[1.15] text-ink">
              One class. One fair price.
            </h2>
            <p className="mb-[26px] max-w-[440px] text-base leading-relaxed text-muted">
              No packages, no pressure to commit. Every session is personal, patient, and matched to where you are
              in your learning.
            </p>
            <div className="flex flex-col gap-3.5">
              {["A full, unhurried session", "1-on-1 or small group teaching", "Reading, santhia, vichar, or kirtan — your choice"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] font-medium text-[#52493B]">
                    <MaterialIcon name="check_circle" className="text-xl text-sage" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[26px] border border-border-warm-2 bg-card p-10 shadow-[0_26px_60px_rgba(78,70,54,0.12)]">
            <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[26px] bg-gold px-[18px] py-2 text-xs font-bold tracking-wide text-ink">
              PER SESSION
            </div>
            <div className="mt-3.5 flex items-end gap-2">
              <span className="font-heading text-[62px] font-semibold leading-none text-ink">$50</span>
              <span className="mb-[11px] text-[15px] font-semibold text-soft-muted">per class</span>
            </div>
            <p className="my-2 mb-[26px] text-[13.5px] text-soft-muted">Online or in person, Bakersfield area.</p>
            <div className="mb-[26px] flex gap-3.5 border-y border-[#EDE2CC] py-[18px]">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wide text-gold-deep-2">Format</div>
                <div className="mt-1 text-[15.5px] font-semibold text-ink">Online or in person</div>
              </div>
              <div className="w-px bg-[#EDE2CC]" />
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wide text-gold-deep-2">Group size</div>
                <div className="mt-1 text-[15.5px] font-semibold text-ink">1-on-1 or small group</div>
              </div>
            </div>
            <Button href="#contact" variant="sage" icon="arrow_forward" className="w-full justify-center rounded-2xl">
              Book a Slot
            </Button>
          </div>
        </Container>
      </section>

      <section id="contact">
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">Join a class</div>
            <h2 className="my-3.5 font-heading text-4xl font-semibold leading-[1.15] text-ink">
              Take the first step toward the words.
            </h2>
            <p className="mb-[34px] max-w-[420px] text-base leading-relaxed text-muted">
              Tell me a little about yourself or your child, and what you&apos;d like to learn. I&apos;ll be in
              touch to find a time.
            </p>
            <div className="flex flex-col gap-[18px]">
              <ContactMethodRow icon="call" label="Call or text" value={contact.phoneDisplay} href={`tel:${contact.phoneHref}`} />
              <ContactMethodRow icon="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactMethodRow icon="play_circle" label="Listen to kirtan" value="YouTube · @kjsfalcon51" href="https://www.youtube.com/@kjsfalcon51" />
            </div>
          </div>
          <div className="rounded-3xl border border-border-warm-2 bg-card p-9 shadow-[0_20px_50px_rgba(78,70,54,0.1)]">
            <BookingForm
              heading="Book a Class"
              messageLabel="What would you like to learn?"
              messagePlaceholder="Reading, kirtan, for my child, daily nitnem…"
              submitLabel="Book Now — $50/session"
              successTitle="Waheguru — thank you"
              successBody="Your booking request is on its way. I'll confirm your time soon."
              footnote="$50 per session, online or in person."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
