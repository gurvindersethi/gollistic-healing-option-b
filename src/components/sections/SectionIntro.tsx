import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionIntro({ eyebrow, title, lead, align = "center", className }: SectionIntroProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-[620px] items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-gold-deep-2">{eyebrow}</div>
      <h2 className="font-heading text-[38px] font-semibold leading-[1.14] text-ink">{title}</h2>
      {lead && <p className="text-base leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}
