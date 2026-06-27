import type { Metadata } from "next";
import Image from "next/image";
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
import { NewsletterPanel } from "@/components/sections/NewsletterPanel";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Button } from "@/components/ui/Button";
import { contact, socials } from "@/content/shared/site";

export const metadata: Metadata = {
  title: "Gollistic Healing — Pain Relief & Wellbeing",
  description:
    "A gentle, spiritual approach to relieving pain and restoring balance with Kanwaljit Singh. Sujok, Auricular Therapy, Cupping, Magnet Therapy, and Taping. Home visits in Bakersfield, CA.",
};

const conditions = [
  "Back pain",
  "Knee pain",
  "Sciatica",
  "Neck & shoulder stiffness",
  "Arthritis discomfort",
  "Muscle tension",
  "Stress-related pain",
  "Headaches",
  "Circulation issues",
  "General body imbalance",
];

const whoThisIsFor = [
  "Seniors",
  "Working adults carrying tension",
  "People recovering from stress",
  "Those who prefer natural healing",
  "Anyone seeking relief without medication",
  "Anyone wanting a healer who listens",
];

const therapies = [
  {
    icon: "back_hand",
    title: "Sujok Therapy",
    description:
      "The hands and feet hold a map of the whole body. Gentle pressure — sometimes with small magnets or seeds — on precise points relieves pain at its source and restores natural balance.",
    footer: "Joint pain, headaches, body imbalance",
  },
  {
    icon: "hearing",
    title: "Auricular (Ear) Therapy",
    description:
      "The ear reflects the whole body. Gentle stimulation of specific ear points eases physical pain, calms the nervous system, and supports emotional balance.",
    footer: "Stress, tension, pain relief",
  },
  {
    icon: "water_drop",
    title: "Cupping",
    description:
      "Gentle suction improves circulation, releases deep muscle tension, and draws out stagnation in the tissue — especially where stiffness has settled into the back, shoulders, and neck.",
    footer: "Back, shoulder & neck stiffness",
  },
  {
    icon: "blur_on",
    title: "Magnet Therapy",
    description:
      "Small magnets placed on specific points support circulation and offer a gentle, non-invasive form of pain relief — often woven alongside Sujok and auricular work in a calm, integrated session.",
    footer: "Ongoing pain & circulation",
  },
  {
    icon: "healing",
    title: "Taping",
    description:
      "Therapeutic taping supports muscles and joints through movement and recovery, easing swelling and strain — without restricting your natural range of motion.",
    footer: "Joint support, swelling, recovery",
  },
  {
    icon: "vaccines",
    title: "Needling Acupuncture",
    description:
      "Fine, sterile needles are placed at precise points along the body's energy pathways to relieve pain, release tension, and restore the natural flow of healing energy.",
    footer: "Chronic pain, tension, energy balance",
  },
  {
    icon: "bolt",
    title: "Electroacupuncture (EAV)",
    description:
      "Electroacupuncture according to Dr. Voll measures the body's electrical energy at precise skin points to identify imbalances, then applies a gentle electrical current to support the body's own healing response.",
    footer: "Diagnosis-guided, whole-body balance",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understanding your pain",
    description: "We begin with a calm conversation about your discomfort, lifestyle, and health history.",
  },
  {
    number: "02",
    title: "Choosing the techniques",
    description:
      "I draw on Sujok, auricular points, cupping, magnets, taping, gentle pressure, and relaxation — matched to you.",
  },
  {
    number: "03",
    title: "Spiritual grounding",
    description: "I work with intention, compassion, and a peaceful mind — because healing flows best through calmness.",
  },
  {
    number: "04",
    title: "Aftercare guidance",
    description: "You leave with simple instructions to maintain and deepen the relief at home.",
  },
];

const testimonials = [
  {
    quote:
      "My back pain had followed me for years. After a few gentle sessions I finally felt space in my body again — and he never once rushed me.",
    initial: "R",
    name: "Rajdeep K.",
    location: "Bakersfield, CA",
  },
  {
    quote:
      "What stayed with me was the calm. He came to my home, listened with real heart, and the tension in my shoulders eased the same evening.",
    initial: "M",
    name: "Maria S.",
    location: "Home visit client",
  },
  {
    quote:
      "I wanted relief without more medication. The magnet and Sujok work helped my knees, and the spiritual grounding helped the rest of me.",
    initial: "H",
    name: "Harbans G.",
    location: "Senior, Bakersfield",
  },
];

const journalPosts = [
  {
    icon: "self_improvement",
    gradient: "from-[#DCE0CF] to-[#BBC0A4]",
    category: "Wellbeing",
    title: "Why calmness helps the body heal faster",
    excerpt: "A few simple breathing practices to settle the nervous system before relief can take hold.",
  },
  {
    icon: "back_hand",
    gradient: "from-[#E4D2AE] to-[#CDB47E]",
    category: "Sujok",
    title: "Three pressure points for everyday tension",
    excerpt: "Gentle self-care you can practice at home between visits to ease a tight neck and head.",
  },
  {
    icon: "volunteer_activism",
    gradient: "from-[#C9CDB6] to-[#9FA585]",
    category: "Seva",
    title: "Healing as service: what seva means to me",
    excerpt: "A short reflection on why this work has never felt like a business — and never will.",
  },
];

export default function HealingPage() {
  return (
    <>
      <HeroTwoColumn
        eyebrow="Pain Relief & Wellbeing · Bakersfield, CA"
        heading={
          <>
            A gentle, spiritual approach to <em className="font-medium italic text-sage">relieving pain</em> and
            restoring balance.
          </>
        }
        lead="Gollistic Healing is my personal, integrated approach to pain relief and wellbeing — weaving ancient techniques, modern understanding, and spiritual grounding to bring harmony to mind, body, and soul."
        primaryCta={{ label: "Book a Home Visit", href: "#contact" }}
        secondaryCta={{ label: "Explore therapies", href: "#services" }}
        stats={[
          { value: "$60", label: "per home visit" },
          { value: "45–60", label: "minutes, unhurried" },
          { value: "7", label: "healing modalities" },
        ]}
        image={{
          src: "/images/therapies.png",
          alt: "The five Gollistic therapies in practice — Sujok, auricular, cupping, magnet and taping",
        }}
        floatingChip={{ icon: "volunteer_activism", title: "Healing as seva", subtitle: "Service, not business" }}
      />

      <TrustStrip
        items={[
          { icon: "home_health", label: "Home visits, Bakersfield area" },
          { icon: "healing", label: "Drug-free, non-invasive" },
          { icon: "favorite", label: "A healer who listens with heart" },
          { icon: "self_improvement", label: "Spiritually grounded" },
        ]}
      />

      <section>
        <Container className="grid gap-16 py-24 lg:grid-cols-[1.25fr_0.9fr]">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">What I help with</div>
            <h2 className="my-3.5 max-w-[460px] font-heading text-4xl font-semibold leading-[1.15] text-ink">
              Relief for the discomforts that wear you down.
            </h2>
            <p className="mb-6 max-w-[480px] text-base leading-relaxed text-muted">
              If pain has settled into your days, these are the conditions I most often ease — gently, and at the
              source.
            </p>
            <div className="flex flex-wrap gap-[11px]">
              {conditions.map((condition) => (
                <span
                  key={condition}
                  className="rounded-full border border-border-warm-2 bg-card px-[18px] py-[11px] text-[14.5px] font-semibold text-[#52493B]"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
          <div className="self-start rounded-3xl bg-gradient-to-br from-sage to-sage-deep-3 p-9 text-[#F3EFE3] shadow-[0_24px_50px_rgba(69,79,56,0.28)]">
            <div className="text-[12.5px] font-bold uppercase tracking-[1.5px] text-gold-light-2">
              Who this is for
            </div>
            <h3 className="my-3 font-heading text-2xl font-semibold text-[#FBF7EC]">Anyone seeking relief, gently.</h3>
            <div className="flex flex-col gap-[15px]">
              {whoThisIsFor.map((item) => (
                <div key={item} className="flex items-center gap-3.5 text-[15px] font-medium">
                  <MaterialIcon name="check_circle" className="text-xl text-gold-light-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="border-t border-border-warm bg-band">
        <Container className="py-24">
          <SectionIntro
            eyebrow="Therapies I practice"
            title="A personalized blend, chosen for what your body needs."
            lead="Each session draws on a combination of these techniques. Nothing rushed, nothing forced — only what serves your relief."
            className="mb-14"
          />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {therapies.map((therapy) => (
              <IconCard key={therapy.title} {...therapy} />
            ))}
            <CTACard
              icon="spa"
              title="Not sure what you need?"
              description="We'll talk it through. I'll choose a combination based on your body, never a fixed package."
              ctaLabel="Start a conversation"
              ctaHref="#contact"
            />
          </div>
        </Container>
      </section>

      <section id="process">
        <Container className="py-24">
          <SectionIntro eyebrow="How a session works" title="Four unhurried steps, start to finish." className="mb-[58px]" />
          <ProcessSteps steps={processSteps} />
        </Container>
      </section>

      <DarkSection id="about">
        <Container className="grid gap-16 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
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
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold">About the healer</div>
            <h2 className="my-3.5 font-heading text-4xl font-semibold leading-[1.15] text-[#FBF7EC]">
              Kanwaljit Singh
            </h2>
            <p className="mb-[18px] text-[17px] leading-relaxed text-[#D6CFBE]">
              Healing is not a business for me. It is <em className="italic text-gold-light">seva</em> — service to
              humanity. I will treat you with respect, patience, compassion, sincerity, and spiritual grounding.
            </p>
            <p className="mb-[30px] text-base leading-relaxed text-[#B8B1A1]">
              Alongside Gollistic Healing, I offer life coaching and teach Gurbani &amp; Kirtan — different paths
              toward the same quiet goal: a calmer, more balanced life. I serve Bakersfield, California, and welcome
              those online.
            </p>
            <div className="flex items-center gap-[22px] rounded-2xl border border-[rgba(196,154,72,0.3)] bg-[rgba(196,154,72,0.12)] p-[22px_26px]">
              <div className="font-gurmukhi whitespace-nowrap text-2xl font-bold text-gold-light">
                ਸਰਬਤ ਦਾ ਭਲਾ
              </div>
              <div className="h-10 w-px bg-[rgba(230,199,126,0.3)]" />
              <div className="text-sm italic leading-snug text-[#CFC7B5]">
                &quot;The wellbeing of all.&quot; The intention behind every session.
              </div>
            </div>
          </div>
        </Container>
      </DarkSection>

      <section>
        <Container className="py-24">
          <SectionIntro eyebrow="In their words" title="Gentle care, felt deeply." className="mb-[54px]" />
          <div className="grid gap-[22px] sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[22px] border border-border-warm bg-card p-8">
                <MaterialIcon name="format_quote" className="text-[30px] text-gold-light-3" />
                <p className="my-2.5 text-[15.5px] leading-relaxed text-[#4A4236]">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E4D2AE] font-heading font-semibold text-[#7A5E23]">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{testimonial.name}</div>
                    <div className="text-[12.5px] text-soft-muted">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-[22px] text-center text-[12.5px] italic text-soft-muted-2">
            Placeholder testimonials — replace with real client words.
          </p>
        </Container>
      </section>

      <section id="pricing" className="border-t border-border-warm bg-band">
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
              Simple, honest pricing
            </div>
            <h2 className="my-4 font-heading text-4xl font-semibold leading-[1.15] text-ink">
              One gentle session. One fair price.
            </h2>
            <p className="mb-[26px] max-w-[440px] text-base leading-relaxed text-muted">
              No packages, no pressure to commit. I come to you, take the time your body needs, and leave you with
              care you can carry on at home.
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                "A full, unhurried 45–60 minute visit",
                "Personalized blend of all seven modalities",
                "Aftercare guidance to take home",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[15px] font-medium text-[#52493B]">
                  <MaterialIcon name="check_circle" className="text-xl text-sage" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[26px] border border-border-warm-2 bg-card p-10 shadow-[0_26px_60px_rgba(78,70,54,0.12)]">
            <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[26px] bg-gold px-[18px] py-2 text-xs font-bold tracking-wide text-ink">
              HOME VISIT
            </div>
            <div className="mt-3.5 flex items-end gap-2">
              <span className="font-heading text-[62px] font-semibold leading-none text-ink">$60</span>
              <span className="mb-[11px] text-[15px] font-semibold text-soft-muted">per visit</span>
            </div>
            <p className="my-2 mb-[26px] text-[13.5px] text-soft-muted">
              $75 if travel distance is significantly far.
            </p>
            <div className="mb-[26px] flex gap-3.5 border-y border-[#EDE2CC] py-[18px]">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wide text-gold-deep-2">Duration</div>
                <div className="mt-1 text-[15.5px] font-semibold text-ink">45–60 minutes</div>
              </div>
              <div className="w-px bg-[#EDE2CC]" />
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wide text-gold-deep-2">Format</div>
                <div className="mt-1 text-[15.5px] font-semibold text-ink">Home visit · Bakersfield</div>
              </div>
            </div>
            <Button href="#contact" variant="sage" icon="arrow_forward" className="w-full justify-center rounded-2xl">
              Book a Home Visit
            </Button>
          </div>
        </Container>
      </section>

      <section id="journal">
        <Container className="py-24">
          <div className="mb-[42px] flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
                Reflections & resources
              </div>
              <h2 className="mt-3.5 font-heading text-4xl font-semibold leading-[1.14] text-ink">From the journal</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-sage">
              View all reflections <MaterialIcon name="arrow_forward" className="text-lg" />
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {journalPosts.map((post) => (
              <div key={post.title}>
                <div
                  className={`mb-4 flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br ${post.gradient}`}
                >
                  <MaterialIcon name={post.icon} className="text-4xl text-white/60" />
                </div>
                <div className="mb-2 text-[12.5px] font-bold uppercase tracking-wide text-gold-deep-2">
                  {post.category}
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold leading-[1.28] text-ink">{post.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-24">
          <NewsletterPanel />
        </Container>
      </section>

      <section id="contact" className="border-t border-border-warm bg-band">
        <Container className="grid gap-[60px] py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">
              Book a healing session
            </div>
            <h2 className="my-3.5 font-heading text-4xl font-semibold leading-[1.15] text-ink">
              If you are in pain, or simply seeking balance — I am here.
            </h2>
            <p className="mb-[34px] max-w-[420px] text-base leading-relaxed text-muted">
              Reach out however feels easiest. I&apos;ll reply personally to arrange a time that suits you.
            </p>
            <div className="flex flex-col gap-[18px]">
              <ContactMethodRow icon="call" label="Call or text" value={contact.phoneDisplay} href={`tel:${contact.phoneHref}`} />
              <ContactMethodRow icon="mail" label="Email" value={contact.email} />
              <ContactMethodRow icon="location_on" label="Serving" value={`${contact.serviceArea} & online`} />
            </div>
            <div className="mt-[30px] flex gap-3">
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
          <div className="rounded-3xl border border-border-warm-2 bg-card p-9 shadow-[0_20px_50px_rgba(78,70,54,0.1)]">
            <BookingForm
              heading="Request a home visit"
              messageLabel="What's troubling you?"
              messagePlaceholder="Tell me a little about your pain or what you're hoping for…"
              defaultInterest="Healing"
              submitLabel="Send request"
              successTitle="Your request is on its way"
              successBody="Thank you for reaching out. I'll respond personally, soon, to arrange your visit."
              footnote="Healing is seva — service, offered with sincerity."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
