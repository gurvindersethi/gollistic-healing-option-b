export function EyebrowPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-[9px] rounded-full border border-pill-border bg-pill-bg px-[15px] py-[7px] text-[12.5px] font-bold uppercase tracking-wide text-gold-deep-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </div>
  );
}
