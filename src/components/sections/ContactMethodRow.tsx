import { MaterialIcon } from "@/components/ui/MaterialIcon";

type ContactMethodRowProps = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export function ContactMethodRow({ icon, label, value, href }: ContactMethodRowProps) {
  const inner = (
    <>
      <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] border border-border-warm-2 bg-card">
        <MaterialIcon name={icon} className="text-[22px] text-sage" />
      </span>
      <span>
        <span className="block text-[12.5px] font-bold uppercase tracking-wide text-gold-deep-2">{label}</span>
        <span className="text-base font-semibold text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-[15px] text-ink">
        {inner}
      </a>
    );
  }

  return <div className="flex items-center gap-[15px] text-ink">{inner}</div>;
}
