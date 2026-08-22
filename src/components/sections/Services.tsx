import Image from "next/image";
import { tools } from "@/data/tools";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

const clusters = [
  {
    name: "Campaigns & Email",
    items: ["Campaign strategy", "Email marketing", "Newsletters", "A/B testing", "Segmentation", "Lifecycle flows"],
  },
  {
    name: "Content & Creative",
    items: ["Content creation", "Social media", "Copywriting", "Design in Canva and Figma", "SEO", "YouTube optimization"],
  },
  {
    name: "Systems & Operations",
    items: [
      "CRM & automation",
      "HubSpot",
      "GoHighLevel",
      "Google Analytics",
      "Tag Manager",
      "WordPress",
      "Virtual assistance",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-glow scroll-mt-28 py-24 md:py-36">
      <Container>
        <SectionIntro
          eyebrow="What I do"
          title="Capabilities that cover the full campaign."
          description="From the first brief to the final report: the creative work, the systems behind it, and the numbers after."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {clusters.map((cluster, i) => (
            <Reveal key={cluster.name} delay={0.05 * i}>
              <div className="glass-card h-full rounded-2xl p-6 md:p-7">
                <h3 className="text-[18px] font-semibold tracking-tight text-ink">{cluster.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cluster.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/60 bg-white/40 px-3 py-1.5 text-[13px] font-medium text-ink backdrop-blur-sm"
                    >
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
            <h3 className="eyebrow !text-[11px]">Tools &amp; Platforms</h3>
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
