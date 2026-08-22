import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/data/site";

export function HeroContactCard() {
  return (
    <Link
      href="#contact"
      className="pressable group relative block overflow-hidden rounded-xl p-4 shadow-[0_20px_48px_rgb(240_68_134/0.28)] brand-gradient"
      aria-label="Contact Suzette Sun"
    >
      <div className="flex items-start gap-3">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full border-2 border-white/40">
          <Image
            src="/assets/photos/suzette-headshot.webp"
            width={88}
            height={88}
            alt=""
            className="h-full w-full object-cover"
            sizes="44px"
          />
        </div>
        <div className="min-w-0 flex-1 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
            Based in Cavite, PH
          </p>
          <p className="mt-1 text-[14px] font-semibold leading-snug tracking-tight">
            Let&apos;s build something amazing together.
          </p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:scale-105">
          <ArrowUpRight size={16} weight="bold" aria-hidden />
        </span>
      </div>
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}
