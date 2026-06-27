import Link from "next/link";
import { primaryNav } from "@/content/shared/nav";
import { site, contact, socials } from "@/content/shared/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-dark text-[#C7C0B0]">
      <Container className="py-[60px] pb-[30px]">
        <div className="grid gap-12 border-b border-white/10 pb-[42px] sm:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-heading text-xl font-semibold text-[#FBF7EC]">{site.shortName}</span>
            </div>
            <p className="max-w-[280px] text-[14.5px] leading-relaxed text-[#9C9484]">{site.footerBlurb}</p>
          </div>

          <div>
            <div className="mb-4 text-[12.5px] font-bold uppercase tracking-wide text-gold">Explore</div>
            <nav aria-label="Footer" className="flex flex-col gap-[11px]">
              {primaryNav.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14.5px] text-[#C7C0B0]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-4 text-[12.5px] font-bold uppercase tracking-wide text-gold">Reach me</div>
            <div className="flex flex-col gap-[11px]">
              <a href={`tel:${contact.phoneHref}`} className="text-[14.5px] text-[#C7C0B0]">
                {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="text-[14.5px] text-[#C7C0B0]">
                Email me
              </a>
              <span className="text-[14.5px] text-[#9C9484]">{contact.serviceArea}</span>
              <div className="mt-1 flex gap-4">
                <a href={socials.instagram.url} className="text-[13.5px] font-semibold text-gold">
                  {socials.instagram.label}
                </a>
                <a href={socials.youtube.url} className="text-[13.5px] font-semibold text-gold">
                  {socials.youtube.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="text-[13px] text-[#8A8273]">{site.copyright}</span>
          <div className="flex gap-6 text-[13px] text-[#8A8273]">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
