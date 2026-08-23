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
      className={`glass-float relative z-0 inline-flex items-center rounded-full text-ink ${
        compact
          ? "gap-2 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.11em]"
          : "gap-2 px-3.5 py-1.5 text-[13px] font-medium"
      }`}
    >
      {color ? (
        <span
          className={`relative z-[1] size-2 shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgb(255_255_255/0.35)] ${dotColors[color] ?? "bg-ink"}`}
          aria-hidden
        />
      ) : null}
      <span className="relative z-[1]">{label}</span>
    </span>
  );
}
