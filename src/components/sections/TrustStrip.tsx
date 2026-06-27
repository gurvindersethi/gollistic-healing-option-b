import { MaterialIcon } from "@/components/ui/MaterialIcon";

type TrustItem = {
  icon: string;
  label: string;
};

export function TrustStrip({ items }: { items: TrustItem[] }) {
  return (
    <section className="border-y border-border-warm bg-band">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-10 px-8 py-[22px] text-sm font-semibold text-[#7A6F5C]">
        {items.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-[9px]">
            <MaterialIcon name={item.icon} className="text-xl text-gold-deep-2" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
