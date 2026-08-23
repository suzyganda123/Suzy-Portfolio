import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { archiveProjects, featuredProjects, type Project } from "@/data/projects";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const accentText: Record<string, string> = {
  coral: "text-coral",
  orange: "text-orange",
  pink: "text-pink",
  violet: "text-violet",
  blue: "text-blue",
  cyan: "text-cyan",
  lime: "text-lime",
};

const accentDot: Record<string, string> = {
  coral: "bg-coral",
  orange: "bg-orange",
  pink: "bg-pink",
  violet: "bg-violet",
  blue: "bg-blue",
  cyan: "bg-cyan",
  lime: "bg-lime",
};

function categoryLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export function WorkSection() {
  const [first, second, third, fourth] = featuredProjects;
  return (
    <section id="work" className="scroll-mt-28 py-24 md:py-36">
      <Container>
        <SectionIntro
          title="Selected work, real campaigns."
          description="Email systems, promo creatives, resource hubs, lead magnets, and social from Atlantic Training and Core Biz Hub. Every image is shipped work."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 md:col-span-2" delay={0.05}>
            <FeaturedCard project={first} tall href="#case-study" />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <FeaturedCard project={second} href={second.externalUrl} external />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.05}>
            <FeaturedCard project={third} href={third.externalUrl} external />
          </Reveal>
          <Reveal className="lg:col-span-7 md:col-span-2" delay={0.12}>
            <SocialCard project={fourth} />
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {archiveProjects.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * (i + 1)}>
              <ArchiveCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({
  project,
  href,
  external,
  tall,
}: {
  project: Project;
  href?: string;
  external?: boolean;
  tall?: boolean;
}) {
  const img = project.images[0];
  const hasWorkLinks = Boolean(project.workLinks?.length);
  const linked = Boolean(href) && !hasWorkLinks;

  const body = (
    <>
      {project.images.length > 1 && !tall ? (
        <div className={`grid grid-cols-2 gap-1.5 bg-bg/40 p-1.5 ${tall ? "" : ""}`}>
          {project.images.slice(0, 2).map((im) => (
            <div
              key={im.src}
              className={`zoom-frame relative ${tall ? "h-[300px] md:h-[420px]" : "h-[260px] md:h-[300px]"}`}
            >
              <Image
                src={im.src}
                width={im.width}
                height={im.height}
                alt={im.alt}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 768px) 50vw, 320px"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`zoom-frame relative ${tall ? "h-[300px] md:h-[420px]" : "h-[260px] md:h-[300px]"}`}>
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          />
        </div>
      )}
      <CardMeta project={project} external={external} linked={linked} />
    </>
  );

  const cls =
    "pressable group block overflow-hidden rounded-xl glass-card hover:shadow-lift";

  // Work-link pills are the targets — wrapping the card would nest <a> inside <a>.
  if (hasWorkLinks || !href) return <div className={cls}>{body}</div>;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={`${project.title}, opens live page`}
      >
        {body}
      </a>
    );
  }

  return (
    <a href={href} className={cls} aria-label={`${project.title}, view case study`}>
      {body}
    </a>
  );
}

function SocialCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl glass-card">
      <div className="grid grid-cols-2 gap-2 bg-bg p-2">
        {project.images.map((img) => (
          <div key={img.src} className="zoom-frame relative aspect-square rounded-md">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 50vw, 320px"
            />
          </div>
        ))}
      </div>
      <CardMeta project={project} linked={false} />
    </div>
  );
}

function CardMeta({
  project,
  external,
  linked,
}: {
  project: Project;
  external?: boolean;
  linked?: boolean;
}) {
  return (
    <div className="p-5 md:p-6">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span className={`size-1.5 rounded-full ${accentDot[project.accent]}`} aria-hidden />
        {project.category.slice(0, 2).map(categoryLabel).join(" & ")}
      </p>
      <div className="mt-2 flex items-start justify-between gap-4">
        <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-ink">{project.title}</h3>
        {linked ? (
          <span className={`mt-1 shrink-0 ${accentText[project.accent]}`} aria-hidden>
            {external ? <ArrowUpRight size={18} weight="bold" /> : <ArrowRight size={18} weight="bold" />}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-3 text-[12.5px] font-medium text-muted/80">
        {project.company}
        {project.year ? `, ${project.year}` : ""}
      </p>
      {project.workLinks?.length ? <WorkLinkList links={project.workLinks} /> : null}
    </div>
  );
}

function WorkLinkList({ links }: { links: NonNullable<Project["workLinks"]> }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Live pages">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex max-w-full items-center rounded-full glass-card px-3 py-1.5 text-[11.5px] font-medium leading-snug text-ink hover:shadow-soft"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ArchiveCard({ project }: { project: Project }) {
  const imgs = project.images.slice(0, 4);
  const primary = imgs[0];
  const multi = imgs.length > 1;

  const inner = (
    <div className="pressable group flex h-full flex-col gap-5 rounded-xl glass-card p-5 hover:shadow-lift sm:flex-row">
      {multi ? (
        <div className="grid w-full shrink-0 grid-cols-2 gap-1.5 sm:w-[148px]">
          {imgs.slice(0, 4).map((img) => (
            <div key={img.src} className="zoom-frame relative aspect-square overflow-hidden rounded-md">
              <Image
                src={img.src}
                width={img.width}
                height={img.height}
                alt={img.alt}
                className="h-full w-full object-cover object-top"
                sizes="74px"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="zoom-frame relative hidden w-[120px] shrink-0 self-stretch rounded-md sm:block">
          <Image
            src={primary.src}
            width={primary.width}
            height={primary.height}
            alt={primary.alt}
            className="absolute h-full w-full object-cover object-top"
            sizes="120px"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          <span className={`size-1.5 rounded-full ${accentDot[project.accent]}`} aria-hidden />
          {project.category.slice(0, 2).map(categoryLabel).join(" & ")}
        </p>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-tight text-ink">{project.title}</h3>
        <p className="mt-1.5 line-clamp-3 text-[14px] leading-relaxed text-muted">{project.summary}</p>
        {project.externalUrl ? (
          <p className={`mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold ${accentText[project.accent]}`}>
            View live
            <ArrowUpRight size={14} weight="bold" aria-hidden />
          </p>
        ) : null}
      </div>
    </div>
  );

  if (project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${project.title}, opens live page`}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
