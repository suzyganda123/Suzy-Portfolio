import { Reveal } from "@/components/motion/Reveal";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionIntroProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto max-w-[760px] text-center" : ""} ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`${eyebrow ? "mt-5" : ""} max-w-[18ch] text-display text-ink ${centered ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-[60ch] text-[17px] leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
