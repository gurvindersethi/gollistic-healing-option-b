"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, ctaByPath } from "@/content/shared/nav";
import { site } from "@/content/shared/site";
import { Container } from "@/components/layout/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cta = ctaByPath[pathname] ?? ctaByPath["/"];

  return (
    <header className="sticky top-0 z-50 border-b border-border-warm bg-bone/80 backdrop-blur-md">
      <Container className="flex h-[74px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-ink" onClick={() => setIsMenuOpen(false)}>
          <span className="font-heading text-xl font-semibold">{site.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "pb-1 text-[14.5px]",
                  isActive
                    ? "border-b-2 border-gold font-bold text-ink"
                    : "font-semibold text-ink-secondary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={cta.href}
          className="hidden items-center gap-2 rounded-full bg-sage px-5 py-[11px] text-sm font-bold text-bone shadow-[0_6px_16px_rgba(94,107,76,0.28)] hover:bg-sage-hover lg:inline-flex"
        >
          <MaterialIcon name={cta.icon} className="text-lg" />
          {cta.label}
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MaterialIcon name={isMenuOpen ? "close" : "menu"} className="text-2xl" />
        </button>
      </Container>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-border-warm bg-bone lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-lg font-bold",
                    isActive ? "bg-band text-ink" : "text-ink-secondary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={cta.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-base font-bold text-bone"
            >
              <MaterialIcon name={cta.icon} />
              {cta.label}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
