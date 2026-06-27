export function BlessingCallout({ description }: { description: string }) {
  return (
    <div className="rounded-2xl bg-dark p-7 text-[#EDE7D8]">
      <div className="mb-3.5 flex items-center gap-3">
        <span className="font-ekonkar text-[30px] leading-none text-gold">ੴ</span>
        <div className="font-gurmukhi text-[19px] font-bold text-[#FBF7EC]">ਸਰਬਤ ਦਾ ਭਲਾ</div>
      </div>
      <p className="text-[14.5px] leading-relaxed text-[#B8B1A1]">{description}</p>
    </div>
  );
}
