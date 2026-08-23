import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudy } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudy() {
  const img = caseStudy.images[0];
  return (
    <section id="case-study" className="scroll-mt-28 pb-24 md:pb-36">
      <Container>
        <Reveal>
          <div className="glass-shell overflow-hidden">
            <div className="glass-inner grid lg:grid-cols-12">
              <div className="p-7 md:p-12 lg:col-span-6 xl:col-span-5">
                <p className="eyebrow">Case study</p>
                <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
                  Coffee &amp;{" "}
                  <span className="serif-accent gradient-word">Compliance</span>
                </h2>
                <p className="mt-3 text-[14px] font-medium text-muted">
                  {caseStudy.company}, {caseStudy.year}
                </p>

                <div className="mt-8 space-y-7">
                  <Block title="Challenge" text={caseStudy.challenge!} />
                  <Block title="Strategy" text={caseStudy.strategy!} />
                  <Block title="Execution" text={caseStudy.execution!} />
                </div>

                <div className="mt-9">
                  <p className="text-[13px] font-semibold text-ink">Deliverables</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {caseStudy.deliverables!.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-white/55 bg-white/40 px-3 py-1.5 text-[12.5px] font-medium text-ink backdrop-blur-sm"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={caseStudy.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable group/cs mt-10 inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 text-[15px] font-medium text-surface shadow-soft hover:bg-zinc-900"
                >
                  View the live registration page
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/cs:translate-x-0.5" aria-hidden>
                    <ArrowUpRight size={16} weight="bold" />
                  </span>
                </a>
              </div>

              <div className="relative border-t border-line/60 bg-bg/50 p-6 md:p-10 lg:col-span-6 lg:border-l lg:border-t-0 xl:col-span-7">
                <div className="glass-shell mx-auto max-w-[520px]">
                  <div className="glass-inner overflow-hidden shadow-lift">
                    <div className="flex items-center gap-3 border-b border-line/60 bg-white/50 px-4 py-3 backdrop-blur-sm">
                      <span className="flex gap-1.5" aria-hidden>
                        <i className="size-2.5 rounded-full bg-coral/40" />
                        <i className="size-2.5 rounded-full bg-orange/40" />
                        <i className="size-2.5 rounded-full bg-lime/40" />
                      </span>
                      <p className="truncate rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium text-muted">
                        Campaign email, scroll to preview
                      </p>
                    </div>
                    <div className="max-h-[420px] overflow-y-auto md:max-h-[560px]">
                      <Image
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                        className="w-full"
                        sizes="(max-width: 1024px) 90vw, 520px"
                      />
                    </div>
                  </div>
                </div>
                <p className="mx-auto mt-4 max-w-[520px] text-center text-[12.5px] text-muted">
                  One email from the webinar sequence, designed and built in Mailchimp.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}
