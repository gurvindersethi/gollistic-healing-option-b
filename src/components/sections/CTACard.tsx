import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Button } from "@/components/ui/Button";

type CTACardProps = {
  icon?: string;
  glyph?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CTACard({ icon, glyph, title, description, ctaLabel, ctaHref }: CTACardProps) {
  return (
    <div className="flex flex-col justify-center rounded-[22px] border border-[#E2CFA6] bg-gradient-to-br from-[#EFE3CB] to-[#E4D2AE] p-[30px]">
      {glyph ? (
        <span className="font-ekonkar mb-3.5 text-[34px] leading-none text-gold-deep">{glyph}</span>
      ) : (
        <MaterialIcon name={icon ?? "spa"} className="mb-3.5 text-[30px] text-gold-deep" />
      )}
      <h3 className="mb-[9px] font-heading text-[20px] font-semibold text-[#4A3F22]">{title}</h3>
      <p className="mb-[18px] text-[14.5px] leading-relaxed text-[#6A5C3C]">{description}</p>
      <Button href={ctaHref} variant="sage" icon="arrow_forward" className="self-start px-[19px] py-[11px] text-sm">
        {ctaLabel}
      </Button>
    </div>
  );
}
