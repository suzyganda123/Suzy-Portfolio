import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudy } from "@/data/projects";

export function FeaturedProjectCard() {
  const img = caseStudy.images[0];
  return (
    <a
      href="#case-study"
      className="pressable glass-panel group block w-full rounded-2xl p-3.5"
      aria-label="Featured project: Coffee and Compliance webinar campaign. View case study."
    >
      <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
        <span className="size-1.5 rounded-full bg-pink" aria-hidden />
        Featured Project
      </p>

      <h2 className="mt-2 text-[14px] font-semibold leading-[1.25] tracking-tight text-ink">
        Coffee &amp; Compliance
      </h2>
      <p className="mt-0.5 text-[11px] text-muted">Webinar email campaign</p>

      <div className="zoom-frame relative mt-2.5 aspect-[16/10] overflow-hidden rounded-xl border border-white/70">
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
          className="h-full w-full object-cover object-top"
          sizes="220px"
        />
      </div>

      <p className="mt-2.5 text-[10px] leading-[1.5] text-muted">
        Email design · Registration page · Automation
      </p>

      <p className="mt-2.5 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink">
        View case study
        <ArrowRight
          size={11}
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </p>
    </a>
  );
}
