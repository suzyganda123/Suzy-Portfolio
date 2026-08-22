import { BrandLogo } from "@/components/layout/BrandLogo";
import { nav, site } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="hairline-t bg-bg/80">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandLogo variant="light" className="h-7 w-auto" />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted">
            Digital marketing, campaigns, and marketing operations. Strategy, creative, and systems in one person.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 pb-10 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 Suzette Elyza S. Sun. All rights reserved.</p>
        <a href={`mailto:${site.email}`} className="w-fit transition-colors hover:text-ink">
          {site.email}
        </a>
      </Container>
    </footer>
  );
}
