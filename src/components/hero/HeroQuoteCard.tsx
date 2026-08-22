import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export function HeroQuoteCard() {
  return (
    <figure className="glass-panel flex items-start gap-3.5 rounded-2xl px-4 py-4 md:px-5">
      <Image
        src="/assets/photos/suzette-casual.webp"
        width={96}
        height={96}
        alt=""
        className="size-12 shrink-0 rounded-full border border-white/80 object-cover"
        sizes="48px"
      />
      <div className="min-w-0">
        <Quotes size={15} weight="fill" className="text-pink" aria-hidden />
        <blockquote className="mt-1.5 text-[11.5px] leading-[1.55] text-ink/85">
          I design the campaign and run the system behind it, from the first email to the analytics that prove it
          worked.
        </blockquote>
        <figcaption className="mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-pink">
          How I work
        </figcaption>
      </div>
    </figure>
  );
}
