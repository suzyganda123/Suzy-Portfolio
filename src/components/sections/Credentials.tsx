import Image from "next/image";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { credentials } from "@/data/credentials";
import { education, professionalLicenses } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Credentials() {
  return (
    <section id="credentials" className="section-ambient scroll-mt-28 py-24 md:py-36">
      <Container>
        <SectionIntro
          title="Credentials"
          description={`${education.degree}, ${education.honor}, from ${education.school}, plus professional licenses and ongoing certifications.`}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {professionalLicenses.map((lic, i) => (
            <Reveal key={lic.title} delay={0.05 * i}>
              <div className="glass-panel flex gap-4 rounded-2xl p-6 md:p-7">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/50 text-coral shadow-soft">
                  <SealCheck size={22} weight="duotone" aria-hidden />
                </span>
                <div>
                  <p className="text-[16px] font-semibold leading-snug text-ink">{lic.title}</p>
                  <p className="mt-1 text-[13.5px] text-muted">{lic.issuer}</p>
                  <p className="mt-1 text-[12.5px] font-medium text-muted/80">{lic.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {credentials.map((cred, i) => (
            <Reveal key={cred.title} delay={0.04 * (i % 3)}>
              <figure className="group glass-card overflow-hidden rounded-xl">
                <div className="zoom-frame relative h-36 md:h-44">
                  <Image
                    src={cred.image}
                    width={cred.width}
                    height={cred.height}
                    alt={`Certificate: ${cred.title}`}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="text-[14px] font-semibold leading-snug text-ink">{cred.title}</p>
                  <p className="mt-1 text-[12.5px] text-muted">{cred.issuer}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
