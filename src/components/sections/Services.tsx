import Image from "next/image";
import { expertiseClusters } from "@/data/site";
import { tools } from "@/data/tools";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Services() {
  return (
    <section id="services" className="section-glow scroll-mt-28 py-24 md:py-36">
      <Container>
        <SectionIntro
          eyebrow="What I do"
          title="Capabilities across the full campaign."
          description="From strategy and creative through CRM, automation, and analytics — the same system of work on the CV, built to ship."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {expertiseClusters.map((cluster, i) => (
            <Reveal key={cluster.name} delay={0.05 * i}>
              <div className="glass-card group h-full rounded-2xl p-6 md:p-7">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/45 shadow-soft backdrop-blur-sm">
                  <span
                    className="size-2 rounded-full bg-gradient-to-br from-pink via-coral to-orange"
                    aria-hidden
                  />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight text-ink">{cluster.name}</h3>
                <ul className="mt-5 space-y-2.5">
                  {cluster.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted">
                      <span
                        className="mt-1.5 size-1 shrink-0 rounded-full bg-coral/70"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="glass-panel mt-6 flex flex-col gap-5 rounded-2xl px-6 py-5 md:flex-row md:items-center md:justify-between md:rounded-full md:px-8">
            <h3 className="eyebrow !text-[11px]">Platforms &amp; tools</h3>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-4" aria-label="Tools and platforms">
              {tools.map((tool) => (
                <li key={tool.name} className="flex items-center gap-2.5" title={tool.name}>
                  {tool.icon ? (
                    <Image src={tool.icon} width={24} height={24} alt={tool.name} className="opacity-80" />
                  ) : (
                    <span className="text-[13px] font-semibold tracking-wide text-muted">{tool.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
