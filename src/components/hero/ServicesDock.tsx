import {
  ChartLineUp,
  Megaphone,
  Palette,
  ShareNetwork,
  Sparkle,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  { label: "Branding", icon: Palette, tint: "from-pink/20 to-coral/10 text-pink" },
  { label: "Social", icon: ShareNetwork, tint: "from-orange/20 to-coral/10 text-orange" },
  { label: "Content", icon: Sparkle, tint: "from-violet/20 to-pink/10 text-violet" },
  { label: "Campaigns", icon: Megaphone, tint: "from-coral/20 to-orange/10 text-coral" },
  { label: "Analytics", icon: ChartLineUp, tint: "from-blue/20 to-cyan/10 text-blue" },
  { label: "Virtual Assist", icon: UserCircle, tint: "from-cyan/20 to-blue/10 text-cyan" },
] as const;

export function ServicesDock() {
  return (
    <div className="glass-panel rounded-2xl px-3 py-2.5">
      <ul className="flex items-center justify-between gap-1.5 sm:gap-2" aria-label="Core services">
        {services.map(({ label, icon: Icon, tint }) => (
          <li key={label} className="flex flex-col items-center gap-1">
            <span
              className={`flex size-9 items-center justify-center rounded-xl bg-gradient-to-br ${tint} sm:size-10`}
              aria-hidden
            >
              <Icon size={18} weight="duotone" />
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.08em] text-muted sm:block">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
