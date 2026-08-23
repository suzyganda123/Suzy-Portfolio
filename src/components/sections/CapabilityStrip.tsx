import { servicesStrip } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function CapabilityStrip() {
  return (
    <section aria-label="Services overview" className="relative z-[1] -mt-2 pb-2 md:-mt-4">
      <Container>
        <div className="glass-panel overflow-hidden rounded-2xl md:rounded-full">
          <div className="relative px-5 py-4 md:px-8 md:py-3.5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/40 to-transparent md:w-16"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/40 to-transparent md:w-16"
            />
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 md:justify-between md:gap-x-3">
              {servicesStrip.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-muted sm:text-[12.5px]"
                >
                  <span
                    className="hidden size-1 rounded-full bg-gradient-to-br from-pink to-orange md:block"
                    aria-hidden
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
