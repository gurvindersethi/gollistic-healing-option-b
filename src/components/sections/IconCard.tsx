import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils";

type IconCardProps = {
  icon?: string;
  glyph?: string;
  title: string;
  description: string;
  footer?: string;
  href?: string;
  linkLabel?: string;
  align?: "left" | "center";
};

export function IconCard({ icon, glyph, title, description, footer, href, linkLabel, align = "left" }: IconCardProps) {
  const content = (
    <>
      <div
        className={cn(
          "flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-tile-bg",
          align === "center" ? "mx-auto" : "",
          footer || href ? "mb-5" : "mb-3.5",
        )}
      >
        {glyph ? (
          <span className="font-gurmukhi text-2xl font-bold text-sage">{glyph}</span>
        ) : (
          <MaterialIcon name={icon ?? "spa"} className="text-[27px] text-sage" />
        )}
      </div>
      <h3 className={cn("font-heading text-[21px] font-semibold text-ink", align === "center" && "mb-1.5")}>
        {title}
      </h3>
      <p className={cn("text-[14.5px] leading-relaxed text-muted", footer && "mb-0")}>{description}</p>
      {footer && (
        <div className="mt-[18px] border-t border-[#EDE2CC] pt-4 text-[13px] text-soft-muted">
          <span className="font-bold text-gold-deep-2">Helps with</span> · {footer}
        </div>
      )}
      {href && linkLabel && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sage">
          {linkLabel}
          <MaterialIcon name="arrow_forward" className="text-[17px]" />
        </span>
      )}
    </>
  );

  const cardClasses = cn(
    "rounded-[22px] border border-border-warm bg-card p-[30px] shadow-[0_10px_30px_rgba(78,70,54,0.05)]",
    align === "center" && "text-center",
  );

  if (href) {
    return (
      <Link href={href} className={cn(cardClasses, "block")}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
