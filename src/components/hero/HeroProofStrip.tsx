const items = [
  { value: "+30%", label: "Website traffic growth" },
  { value: "Email", label: "Campaign systems" },
  { value: "CRM", label: "Automation flows" },
  { value: "Content", label: "SEO and web assets" },
] as const;

/** Verified metric + non-numeric proof (hero spec §16 — no invented client counts). */
export function HeroProofStrip() {
  return (
    <div className="glass-panel rounded-xl px-4 py-3.5 md:px-5">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 sm:gap-x-6">
        {items.map((item) => (
          <li key={item.label}>
            <p className="text-[15px] font-semibold tracking-tight text-ink">{item.value}</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
