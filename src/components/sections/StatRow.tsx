type Stat = {
  value: string;
  label: string;
};

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-[42px] flex items-center gap-[30px]">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-[30px]">
          {index > 0 && <div className="h-[38px] w-px bg-[#E0D3BC]" />}
          <div>
            <div className="font-heading text-[26px] font-semibold text-sage">{stat.value}</div>
            <div className="text-[12.5px] font-semibold text-soft-muted">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
