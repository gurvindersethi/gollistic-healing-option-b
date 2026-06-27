export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Healing", href: "/" },
  { label: "Life Coaching", href: "/life-coaching" },
  { label: "Gurbani Teaching", href: "/gurbani-teaching" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaByPath: Record<string, { label: string; icon: string; href: string }> = {
  "/": { label: "Book a Visit", icon: "spa", href: "/contact" },
  "/life-coaching": { label: "Book a Session", icon: "self_improvement", href: "/contact" },
  "/gurbani-teaching": { label: "Book a Class", icon: "menu_book", href: "/contact" },
  "/about": { label: "Book a Visit", icon: "spa", href: "/contact" },
  "/contact": { label: "Send a message", icon: "send", href: "/contact" },
};
