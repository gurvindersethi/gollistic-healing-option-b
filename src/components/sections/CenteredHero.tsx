import { EyebrowPill } from "@/components/sections/EyebrowPill";
import { Container } from "@/components/layout/Container";

type CenteredHeroProps = {
  eyebrow: string;
  heading: React.ReactNode;
  lead: string;
};

export function CenteredHero({ eyebrow, heading, lead }: CenteredHeroProps) {
  return (
    <section>
      <Container className="mx-auto max-w-[920px] py-16 pb-14 pt-[84px] text-center">
        <EyebrowPill>{eyebrow}</EyebrowPill>
        <h1 className="mx-auto mt-6 max-w-[700px] font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-[52px]">
          {heading}
        </h1>
        <p className="mx-auto mt-[22px] max-w-[560px] text-lg leading-relaxed text-ink-secondary">{lead}</p>
      </Container>
    </section>
  );
}
