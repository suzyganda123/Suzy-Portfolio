import { servicesStrip } from "@/data/site";
import { Container } from "@/components/layout/Container";

/** Duplicate track for seamless CSS marquee loop. */
const track = [...servicesStrip, ...servicesStrip];

export function CapabilityStrip() {
  return (
    <section aria-label="Services overview" className="relative z-[1] -mt-2 pb-2 md:-mt-4">
      <Container>
        <div className="glass-panel overflow-hidden rounded-2xl md:rounded-full">
          <div className="relative py-4 md:py-3.5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-white/55 to-transparent md:w-16"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-white/55 to-transparent md:w-16"
            />

            {/* Screen-reader list (static); visual track is decorative duplicate */}
            <ul className="sr-only">
              {servicesStrip.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="capability-marquee group" aria-hidden>
              <ul className="capability-marquee-track">
                {track.map((s, i) => (
                  <li
                    key={`${s}-${i}`}
                    className="inline-flex shrink-0 items-center gap-2.5 px-4 text-[12px] font-semibold tracking-[0.04em] text-muted sm:px-5 sm:text-[12.5px]"
                  >
                    <span
                      className="size-1 shrink-0 rounded-full bg-gradient-to-br from-pink to-orange"
                      aria-hidden
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
