import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudy } from "@/data/projects";

export function FeaturedProjectCard() {
  const img = caseStudy.images[0];
  return (
    <a
      href="#case-study"
      className="pressable glass-panel group relative z-[1] block w-full max-w-[300px] rounded-xl p-3.5 md:w-[248px] xl:w-[272px]"
      aria-label="Featured project: Coffee and Compliance webinar campaign. View case study."
    >
      <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="size-1.5 rounded-full bg-coral" aria-hidden />
        Featured Project
      </p>
      <p className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-ink">
        Coffee &amp; Compliance
      </p>
      <p className="mt-0.5 text-[12px] leading-snug text-muted">Webinar email campaign</p>

      <div className="mt-3 flex items-end gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] leading-relaxed text-muted">
            Email design · Registration page · Automation
          </p>
          <p className="mt-2.5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
            View case study
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </p>
        </div>
        <div className="zoom-frame relative size-[72px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            className="h-full w-full object-cover object-top"
            sizes="72px"
          />
        </div>
      </div>
    </a>
  );
}
