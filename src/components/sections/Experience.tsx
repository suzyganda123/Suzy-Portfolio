import {
  developmentCerts,
  education,
  experience,
  professionalLicenses,
} from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                title="Experience"
                description="Over four years across email, campaigns, content, and marketing systems — fully remote."
              />
              <Reveal delay={0.08}>
                <div className="glass-card mt-10 rounded-2xl p-6">
                  <p className="eyebrow !text-[11px]">Education</p>
                  <p className="mt-3 text-[15px] font-semibold leading-snug text-ink">
                    {education.degree}
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium text-coral">{education.honor}</p>
                  <p className="mt-2 text-[14px] text-muted">{education.school}</p>
                  <p className="text-[13px] text-muted">{education.schoolAlt}</p>
                  <p className="mt-1 text-[13px] text-muted">{education.period}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/50 pt-4">
                    {education.honors.map((h) => (
                      <li key={h} className="text-[12.5px] leading-snug text-muted">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="glass-panel mt-4 rounded-2xl p-6">
                  <p className="eyebrow !text-[11px]">Licenses</p>
                  <ul className="mt-4 space-y-4">
                    {professionalLicenses.map((lic) => (
                      <li key={lic.title}>
                        <p className="text-[14px] font-semibold leading-snug text-ink">{lic.title}</p>
                        <p className="mt-0.5 text-[12.5px] text-muted">{lic.issuer}</p>
                        <p className="text-[12px] text-muted/80">{lic.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {experience.map((entry, i) => (
              <Reveal key={entry.company} delay={0.04 * i}>
                <article className="glass-card mb-5 rounded-2xl p-6 md:p-8 last:mb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[21px] font-semibold tracking-tight text-ink">{entry.company}</h3>
                    {entry.location ? (
                      <p className="text-[13px] font-medium text-muted">{entry.location}</p>
                    ) : null}
                  </div>

                  <div className="mt-5 space-y-6">
                    {entry.roles.map((role, ri) => (
                      <div key={role.title} className="relative pl-5">
                        {entry.roles.length > 1 ? (
                          <span
                            className="absolute left-0 top-2 h-full w-px bg-line"
                            aria-hidden
                            style={ri === entry.roles.length - 1 ? { height: "0.5rem" } : undefined}
                          />
                        ) : (
                          <span className="absolute left-0 top-2 size-px" aria-hidden />
                        )}
                        <span
                          className="absolute left-[-2.5px] top-[7px] size-1.5 rounded-full bg-coral"
                          aria-hidden
                        />
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <p className="text-[16px] font-semibold text-ink">{role.title}</p>
                          <p className="text-[13.5px] font-medium text-muted">{role.period}</p>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {role.points.map((point) => (
                            <li key={point} className="text-[14.5px] leading-relaxed text-muted">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {entry.metric ? (
                    <div className="glass-panel mt-6 inline-flex items-baseline gap-3 rounded-xl px-5 py-4">
                      <span className="text-[28px] font-semibold leading-none tracking-tight text-coral">
                        {entry.metric.value}
                      </span>
                      <span className="text-[13.5px] font-medium text-muted">{entry.metric.label}</span>
                    </div>
                  ) : null}

                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label={`Tools used at ${entry.company}`}
                  >
                    {entry.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-white/55 bg-white/35 px-3 py-1 text-[12px] font-medium text-muted backdrop-blur-sm"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="glass-panel mt-5 rounded-2xl p-6 md:p-7">
                <p className="eyebrow !text-[11px]">Selected professional development</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {developmentCerts.map((c) => (
                    <li key={c} className="text-[13px] leading-snug text-muted">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
