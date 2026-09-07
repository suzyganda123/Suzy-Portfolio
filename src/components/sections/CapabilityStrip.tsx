import { servicesStrip } from "@/data/site";
import { Container } from "@/components/layout/Container";

function StripItems({ inert }: { inert?: boolean }) {
  return (
    <ul
      className="capability-marquee-list"
      {...(inert ? { "aria-hidden": true } : { "aria-label": "Services" })}
    >
      {servicesStrip.map((s) => (
        <li key={`${inert ? "b" : "a"}-${s}`} className="capability-marquee-item">
          <span className="capability-marquee-dot" aria-hidden />
          {s}
        </li>
      ))}
    </ul>
  );
}

/** Single-line infinite services marquee under the hero. */
export function CapabilityStrip() {
  return (
    <section aria-label="Services overview" className="relative z-[1] -mt-2 pb-2 md:-mt-4">
      <Container>
        <div className="glass-panel capability-marquee-shell overflow-hidden rounded-full">
          <div className="capability-marquee">
            <div className="capability-marquee-track">
              <StripItems />
              <StripItems inert />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
