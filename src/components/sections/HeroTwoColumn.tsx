import Image from "next/image";
import { EyebrowPill } from "@/components/sections/EyebrowPill";
import { StatRow } from "@/components/sections/StatRow";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Container } from "@/components/layout/Container";

type Stat = { value: string; label: string };

type HeroTwoColumnProps = {
  eyebrow: string;
  heading: React.ReactNode;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Stat[];
  image: { src: string; alt: string };
  floatingChip: { icon: string; title: string; subtitle: string };
};

export function HeroTwoColumn({
  eyebrow,
  heading,
  lead,
  primaryCta,
  secondaryCta,
  stats,
  image,
  floatingChip,
}: HeroTwoColumnProps) {
  return (
    <section className="relative">
      <Container className="grid gap-16 py-[70px] pt-[78px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <EyebrowPill>{eyebrow}</EyebrowPill>
          <h1 className="mt-6 max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {heading}
          </h1>
          <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-ink-secondary">{lead}</p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <Button href={primaryCta.href} variant="sage" icon="arrow_forward">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="ghost">
              {secondaryCta.label}
            </Button>
          </div>
          <StatRow stats={stats} />
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-x-5 -inset-y-6 -z-10 rounded-full bg-[radial-gradient(70%_60%_at_65%_30%,#EDE2CC_0%,rgba(237,226,204,0)_70%)]"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border-warm-4 shadow-[0_30px_70px_rgba(78,70,54,0.24)]">
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              priority
              className="block h-auto w-full"
            />
          </div>
          <div className="animate-floaty absolute -bottom-6 left-5 z-10 flex items-center gap-[11px] rounded-2xl border border-[#EDE2CC] bg-card px-[17px] py-3.5 shadow-[0_16px_36px_rgba(78,70,54,0.16)]">
            <MaterialIcon name={floatingChip.icon} className="text-2xl text-terracotta" />
            <div>
              <div className="text-[13.5px] font-bold text-ink">{floatingChip.title}</div>
              <div className="text-[11.5px] font-medium text-soft-muted">{floatingChip.subtitle}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
