const dotColors: Record<string, string> = {
  coral: "bg-coral",
  orange: "bg-orange",
  pink: "bg-pink",
  violet: "bg-violet",
  blue: "bg-blue",
  cyan: "bg-cyan",
  lime: "bg-lime",
};

export function Chip({ label, color }: { label: string; color?: string }) {
  return (
    <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink">
      {color ? <span className={`size-1.5 rounded-full ${dotColors[color] ?? "bg-ink"}`} aria-hidden /> : null}
      {label}
    </span>
  );
}
