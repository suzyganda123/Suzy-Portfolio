const dotColors: Record<string, string> = {
  coral: "bg-coral",
  orange: "bg-orange",
  pink: "bg-pink",
  violet: "bg-violet",
  blue: "bg-blue",
  cyan: "bg-cyan",
  lime: "bg-lime",
};

type ChipProps = {
  label: string;
  color?: string;
  /** `compact` matches the hero's small tracked caps. */
  size?: "default" | "compact";
};

export function Chip({ label, color, size = "default" }: ChipProps) {
  const compact = size === "compact";
  return (
    <span
      className={`glass-card inline-flex items-center rounded-full text-ink ${
        compact
          ? "gap-2 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.11em]"
          : "gap-2 px-3.5 py-1.5 text-[13px] font-medium"
      }`}
    >
      {color ? (
        <span className={`size-2 rounded-[3px] ${dotColors[color] ?? "bg-ink"}`} aria-hidden />
      ) : null}
      {label}
    </span>
  );
}
