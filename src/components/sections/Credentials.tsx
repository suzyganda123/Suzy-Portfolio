import Image from "next/image";
import { credentials } from "@/data/credentials";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Credentials() {
  return (
    <section id="credentials" className="section-ambient scroll-mt-28 py-24 md:py-36">
      <Container>
        <SectionIntro
          title="Credentials"
          description="A curated set of professional certifications, plus a BSBA in Marketing Management from the Polytechnic University of the Philippines."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
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
