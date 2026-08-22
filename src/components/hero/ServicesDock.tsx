import {
  ChartPieSlice,
  Megaphone,
  PenNib,
  ShareNetwork,
  Sparkle,
  Stack,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  { label: "Branding", icon: PenNib, tint: "from-pink/30 to-coral/15 text-pink" },
  { label: "Social Media", icon: ShareNetwork, tint: "from-orange/30 to-coral/15 text-orange" },
  { label: "Content", icon: Stack, tint: "from-violet/30 to-pink/12 text-violet" },
  { label: "Campaigns", icon: Megaphone, tint: "from-lime/30 to-cyan/12 text-lime" },
  { label: "Analytics", icon: ChartPieSlice, tint: "from-blue/30 to-cyan/15 text-blue" },
  { label: "Virtual Assist", icon: Sparkle, tint: "from-ink/12 to-ink/5 text-ink" },
] as const;

export function ServicesDock() {
  return (
    <div className="glass-panel rounded-2xl px-4 py-5 md:px-6">
      <ul className="flex items-start justify-between gap-2 sm:gap-4" aria-label="Core services">
        {services.map(({ label, icon: Icon, tint }) => (
          <li key={label} className="flex min-w-0 flex-col items-center gap-2">
            <span
              className={`flex size-11 items-center justify-center rounded-[14px] border border-white/70 bg-gradient-to-br ${tint} shadow-[inset_0_1px_0_rgb(255_255_255/0.8)]`}
              aria-hidden
            >
              <Icon size={20} weight="duotone" />
            </span>
            <span className="text-center text-[9px] font-medium leading-tight tracking-[0.02em] text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
