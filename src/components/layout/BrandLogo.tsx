import Image from "next/image";
import { site } from "@/data/site";

type BrandLogoProps = {
  /** light = dark mark on cream; dark = white mark on dark UI; color = gradient mark */
  variant?: "light" | "dark" | "color";
  className?: string;
  priority?: boolean;
};

const sizes = {
  light: { width: 400, height: 88 },
  dark: { width: 400, height: 123 },
  color: { width: 480, height: 148 },
} as const;

export function BrandLogo({ variant = "light", className = "h-7 w-auto", priority }: BrandLogoProps) {
  const src = site.logos[variant];
  const { width, height } = sizes[variant];

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={site.name}
      className={className}
      priority={priority}
      sizes="180px"
    />
  );
}
