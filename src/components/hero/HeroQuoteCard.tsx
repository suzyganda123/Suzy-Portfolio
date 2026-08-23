import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export function HeroQuoteCard() {
  return (
    <div className="glass-shell rounded-[28px]">
      <figure className="glass-lens flex items-start gap-3.5 rounded-[22px] px-4 py-4 md:px-5 md:py-5">
        <Image
          src="/assets/photos/suzette-casual.webp"
          width={96}
          height={96}
          alt=""
          className="relative z-[1] size-12 shrink-0 rounded-full border border-white/70 object-cover shadow-[0_4px_14px_rgb(23_23_23/0.1)]"
          sizes="48px"
        />
        <div className="relative z-[1] min-w-0">
          <Quotes size={15} weight="fill" className="text-pink" aria-hidden />
          <blockquote className="mt-1.5 text-[12px] leading-[1.55] text-ink/90 md:text-[12.5px]">
            I design the campaign and run the system behind it, from the first email to the analytics that prove it
            worked.
          </blockquote>
          <figcaption className="mt-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-pink">
            How I work
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
