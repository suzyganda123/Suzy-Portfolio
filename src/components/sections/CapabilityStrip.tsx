import { servicesStrip } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function CapabilityStrip() {
  return (
    <section aria-label="Services overview" className="relative z-[1] -mt-2 pb-2 md:-mt-4">
      <Container>
        <div className="glass-panel rounded-2xl px-5 py-4 md:rounded-full md:px-8 md:py-3.5">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 md:justify-between">
            {servicesStrip.map((s) => (
              <li key={s} className="text-[12.5px] font-medium tracking-wide text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
