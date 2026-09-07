import { servicesStrip } from "@/data/site";
import { Container } from "@/components/layout/Container";

function StripItems({ labeled }: { labeled?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 px-4 md:gap-10 md:px-5"
      {...(labeled
        ? { "aria-label": "Services" }
        : { "aria-hidden": true })}
    >
      {servicesStrip.map((s) => (
        <li
          key={`${labeled ? "a" : "b"}-${s}`}
          className="inline-flex shrink-0 items-center gap-2.5 text-[12px] font-semibold tracking-[0.04em] text-muted whitespace-nowrap sm:text-[12.5px]"
        >
          <span
            className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink to-orange"
            aria-hidden
          />
          {s}
        </li>
      ))}
    </ul>
  );
}

/** Infinite horizontal services marquee under the hero. */
export function CapabilityStrip() {
  return (
    <section aria-label="Services overview" className="relative z-[1] -mt-2 pb-2 md:-mt-4">
      <Container>
        <div className="glass-panel overflow-hidden rounded-2xl md:rounded-full">
          <div className="relative py-4 md:py-3.5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-white/55 to-transparent md:w-14"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-white/55 to-transparent md:w-14"
            />

            {/* Static fallback for reduced motion / no-JS readability */}
            <div className="capability-marquee-static px-5 md:px-8">
              <StripItems labeled />
            </div>

            <div className="capability-marquee group/marquee">
              <div className="capability-marquee-track">
                <StripItems labeled />
                <StripItems />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
