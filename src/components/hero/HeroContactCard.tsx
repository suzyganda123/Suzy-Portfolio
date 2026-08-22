import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function HeroContactCard() {
  return (
    <Link
      href="#contact"
      className="pressable brand-gradient group relative block overflow-hidden rounded-2xl px-4 py-4 shadow-[0_24px_56px_rgb(240_68_134/0.26)]"
      aria-label="Contact Suzette Sun"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/assets/photos/suzette-headshot.webp"
          width={112}
          height={112}
          alt=""
          className="size-12 shrink-0 rounded-full border-2 border-white/45 object-cover"
          sizes="48px"
        />
        <div className="min-w-0 flex-1 text-white">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85">
            Based in Cavite, PH
          </p>
          <p className="mt-1 text-[14px] font-semibold leading-[1.25] tracking-tight">
            Let&apos;s build something amazing together.
          </p>
        </div>
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:scale-105"
          aria-hidden
        >
          <ArrowUpRight size={15} weight="bold" />
        </span>
      </div>
    </Link>
  );
}
