import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CenteredHero } from "@/components/sections/CenteredHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { IconCard } from "@/components/sections/IconCard";
import { DarkSection } from "@/components/sections/DarkSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Kanwaljit Singh",
  description:
    "A healer, a listener, a servant of others. Meet Kanwaljit Singh — Gollistic Healing, Life Coaching, and Gurbani Teaching in Bakersfield, CA.",
};

const values = [
  { icon: "handshake", title: "Respect", description: "You are met as a whole person, always." },
  { icon: "hourglass_empty", title: "Patience", description: "We move at the pace your body and heart need." },
  { icon: "favorite", title: "Compassion", description: "Listening first, with a heart that cares." },
  { icon: "verified", title: "Sincerity", description: "Honest guidance, never empty promises." },
  { icon: "self_improvement", title: "Grounding", description: "Work done with a calm, peaceful mind." },
];

const threePaths = [
  {
    icon: "spa",
    title: "Gollistic Healing",
    description: "Gentle, drug-free relief from pain through an integrated blend of ancient techniques.",
    href: "/",
    linkLabel: "Learn more",
  },
  {
    icon: "self_improvement",
    title: "Life Coaching",
    description: "A compassionate space to find clarity, balance, and a quieter mind through life's challenges.",
    href: "/life-coaching",
    linkLabel: "Learn more",
  },
  {
    icon: "menu_book",
    title: "Gurbani Teaching",
    description: "Learning to read, understand, and sing Gurbani — patiently, with meaning, offered as seva.",
    href: "/gurbani-teaching",
    linkLabel: "Learn more",
  },
];

export default function AboutPage() {
  return (
    <>
      <CenteredHero
        eyebrow="About · Kanwaljit Singh"
        heading={
          <>
            A healer, a listener, a <em className="font-medium italic text-sage">servant</em> of others.
          </>
        }
        lead="For me, healing has never been a profession. It is seva — service to humanity — offered with respect, patience, compassion, sincerity, and spiritual grounding."
      />

      <section>
        <Container className="grid gap-16 py-10 pb-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(78,70,54,0.22)]">
              <Image
                src="/images/kanwaljit.png"
                alt="Kanwaljit Singh"
                width={480}
                height={600}
                className="h-full w-full object-cover object-[center_16%]"
              />
            </div>
          </div>
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">My story</div>
            <h2 className="my-3.5 font-heading text-[34px] font-semibold leading-[1.18] text-ink">
              A passionate exponent of Gurbani.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-ink-secondary">
              For more than 40 years, S. Kanwaljit Singh has called the United States home — and for just as long,
              he has looked for ways to give back to the Guru. For the past two decades, he has spent four to six
              weeks of every year travelling to the United Kingdom, India, Bangkok, Malaysia, Singapore, Dubai, and
              Australia, leading camps, seminars, and workshops, and offering Kirtan, Katha, and lectures wherever
              he is welcomed.
            </p>
            <p className="mb-4 text-base leading-relaxed text-ink-secondary">
              His forte is Sri Guru Granth Sahib and Gurbani, held with a singular faith —{" "}
              <span className="font-gurmukhi">ਸਤਿਗੁਰ ਕੀ ਬਾਣੀ ਸਤਿ ਸਰੂਪ ਹੈ, ਗੁਰਬਾਣੀ ਬਣੀਐ।</span> — that the Guru&apos;s
              word is truth itself, and that a life well lived becomes Gurbani in motion.
            </p>
            <p className="mb-4 text-base leading-relaxed text-ink-secondary">
              He brings to this work a broad grounding in Western and Eastern literature, music, and psychology,
              and often reflects that Guru Nanak, through Gurbani, was the world&apos;s truest psychologist. It is
              why his teaching leans so heavily on introspection —{" "}
              <span className="font-gurmukhi">ਮਨ ਤੂੰ ਜੋਤਿ ਸਰੂਪੁ ਹੈ ਆਪਣਾ ਮੂਲ ਪਛਾਣਿ</span>{" "}
              <span className="italic">(&quot;O mind, you are the embodiment of the Divine Light — recognize your
              own origin.&quot;)</span> He describes himself, simply, as a passionate exponent and apostle of
              Gurbani.
            </p>
            <p className="text-base leading-relaxed text-ink-secondary">
              Alongside this calling, he offers Gollistic Healing and life coaching in Bakersfield, California, in
              person, and welcomes those who wish to connect online from anywhere in the world.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border-warm bg-band">
        <Container className="py-24">
          <SectionIntro eyebrow="What I bring to every soul" title="Five quiet promises." className="mb-14" />
          <div className="grid gap-[18px] sm:grid-cols-3 lg:grid-cols-5">
            {values.map((value) => (
              <IconCard key={value.title} align="center" {...value} />
            ))}
          </div>
        </Container>
      </section>

      <DarkSection>
        <Container className="mx-auto max-w-[860px] py-[90px] text-center">
          <span className="font-ekonkar mb-[22px] inline-block text-[46px] leading-none text-gold">ੴ</span>
          <div className="font-gurmukhi text-[34px] font-bold leading-[1.4] text-[#FBF7EC]">ਸਰਬਤ ਦਾ ਭਲਾ</div>
          <p className="mt-[18px] font-heading text-2xl font-medium italic leading-[1.45] text-gold-light">
            &quot;The wellbeing of all.&quot;
          </p>
          <p className="mx-auto mt-[22px] max-w-[520px] text-[15.5px] leading-relaxed text-[#B8B1A1]">
            This is the intention I carry into every session, every conversation, every class. Not my benefit —
            yours, and the wellbeing of all.
          </p>
        </Container>
      </DarkSection>

      <section>
        <Container className="py-24">
          <SectionIntro eyebrow="How I serve" title="Three paths, one purpose." className="mb-[54px]" />
          <div className="grid gap-[22px] sm:grid-cols-3">
            {threePaths.map((path) => (
              <IconCard key={path.title} {...path} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-24">
          <div className="rounded-[28px] bg-gradient-to-br from-sage to-sage-deep px-12 py-16 text-center">
            <h2 className="mb-3.5 font-heading text-[34px] font-semibold text-[#FBF7EC]">Let&apos;s begin, gently.</h2>
            <p className="mx-auto mb-7 max-w-[480px] text-base leading-relaxed text-[#D6CFBE]">
              Whether you&apos;re seeking relief, clarity, or connection — I would be honoured to walk alongside
              you.
            </p>
            <Button href="/contact" variant="gold" icon="arrow_forward">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
