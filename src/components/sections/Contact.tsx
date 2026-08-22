import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="brand-gradient-soft scroll-mt-28 py-28 md:py-44">
      <Container>
        <Reveal className="mx-auto max-w-[820px]">
          <div className="glass-panel rounded-3xl px-6 py-12 text-center md:px-14 md:py-16">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              Let&apos;s build your next <span className="serif-accent">campaign.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted">
              I&apos;m open to new opportunities in digital marketing, campaigns, and marketing operations.
              If you need someone who can design the work and run the system behind it, let&apos;s talk.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${site.email}`} arrow="right" ariaLabel="Email Suzette Sun">
                Let&apos;s Connect
              </Button>
              <Button href={site.cvUrl} variant="outline" download ariaLabel="Download Suzette Sun's CV as PDF">
                Download CV
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[14.5px] text-muted">
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={17} className="text-coral" aria-hidden />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={17} className="text-coral" aria-hidden />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={17} className="text-coral" aria-hidden />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
