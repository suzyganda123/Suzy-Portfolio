const items = [
  { value: "+30%", label: "Website traffic growth" },
  { value: "Email", label: "Campaign systems" },
  { value: "CRM", label: "Automation flows" },
  { value: "Content", label: "SEO and web assets" },
] as const;

/** Verified CyberWrath metric + non-numeric proof. No invented client counts. */
export function HeroProofStrip() {
  return (
    <div className="glass-float rounded-2xl px-4 py-4 md:rounded-[22px] md:px-5 md:py-4">
      <ul className="relative z-[1] grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-4 sm:gap-x-5">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={
              i > 0
                ? "sm:border-l sm:border-white/35 sm:pl-5"
                : undefined
            }
          >
            <p className="text-[17px] font-semibold tracking-tight text-ink">{item.value}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
