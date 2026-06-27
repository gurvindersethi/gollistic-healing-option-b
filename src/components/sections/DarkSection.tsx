import { cn } from "@/lib/utils";

type DarkSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function DarkSection({ children, className, id }: DarkSectionProps) {
  return (
    <section id={id} className={cn("bg-dark text-[#EDE7D8]", className)}>
      {children}
    </section>
  );
}
