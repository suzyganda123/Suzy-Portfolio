import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
  arrow?: "right" | "up-right" | "none";
  ariaLabel?: string;
};

const base =
  "pressable group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[15px] font-medium leading-none";

const variants = {
  primary:
    "bg-ink text-surface py-2 pl-6 pr-2 hover:bg-zinc-900 shadow-soft",
  outline:
    "glass-card border border-white/70 text-ink px-6 py-3 hover:border-ink/15 hover:shadow-lift",
  ghost: "text-ink px-2 py-2 underline-offset-4 hover:underline",
};

function TrailingIcon({ arrow }: { arrow: "right" | "up-right" }) {
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px group-active/btn:scale-95"
      aria-hidden
    >
      <Icon size={16} weight="bold" />
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
  arrow = "none",
  ariaLabel,
}: ButtonProps) {
  const showNested = arrow !== "none" && variant === "primary";
  const icon =
    arrow !== "none" && !showNested ? (
      arrow === "right" ? (
        <ArrowRight size={16} weight="bold" aria-hidden />
      ) : (
        <ArrowUpRight size={16} weight="bold" aria-hidden />
      )
    ) : showNested ? (
      <TrailingIcon arrow={arrow} />
    ) : null;

  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {children}
        {icon}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download className={cls} aria-label={ariaLabel}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
      {icon}
    </Link>
  );
}
