import Image from "next/image";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="section-ambient scroll-mt-28 py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="glass-shell mx-auto max-w-[420px]">
              <div className="glass-inner zoom-frame relative aspect-square shadow-lift">
                <Image
                  src="/assets/photos/suzette-editorial.webp"
                  width={1200}
                  height={1200}
                  alt="Portrait of Suzette Sun in a beige knit sweater, arms crossed, smiling"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <h2 className="text-display max-w-[18ch] text-ink">The person behind the campaigns.</h2>
            <div className="mt-6 space-y-5 text-[16.5px] leading-relaxed text-muted">
              <p>
                I&apos;m Suzette Sun, a marketing professional based in Dasmariñas, Cavite, with over four years
                across digital marketing, campaigns, and marketing operations. I&apos;ve run email and CRM programs
                for a US safety training company, led marketing for a Singapore investment education brand, and
                supported clients worldwide as a virtual assistant.
              </p>
              <p>
                I&apos;m at my best where creative work meets systems: designing the campaign, building the
                automation behind it, and reading the numbers after it ships. Remote work is home turf; my whole
                career has been collaborating across time zones and cultures.
              </p>
            </div>

            <ul className="glass-card mt-9 space-y-3.5 rounded-2xl p-5 text-[15px] md:p-6">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-coral" aria-hidden />
                <span className="text-muted">{site.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={18} className="shrink-0 text-coral" aria-hidden />
                <a href={`mailto:${site.email}`} className="text-ink underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-coral" aria-hidden />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-ink underline-offset-4 hover:underline">
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
