import Link from "next/link";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type Variant = "sage" | "gold" | "ghost";

const variantClasses: Record<Variant, string> = {
  sage: "bg-sage text-bone hover:bg-sage-hover shadow-[0_10px_24px_rgba(94,107,76,0.3)]",
  gold: "bg-gold text-ink hover:bg-gold-hover shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
  ghost: "bg-transparent text-sage border-[1.5px] border-[#C9BBA0] hover:bg-pill-bg",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  icon?: string;
  iconPosition?: "leading" | "trailing";
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "sage",
  icon,
  iconPosition = "trailing",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {icon && iconPosition === "leading" && <MaterialIcon name={icon} className="text-[19px]" />}
      {children}
      {icon && iconPosition === "trailing" && <MaterialIcon name={icon} className="text-[19px]" />}
    </Link>
  );
}
