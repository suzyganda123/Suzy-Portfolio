import Image from "next/image";
import { site } from "@/data/site";

type BrandLogoProps = {
  variant?: "light" | "dark" | "color";
  className?: string;
  priority?: boolean;
};

const sizes = {
  light: { width: 168, height: 28 },
  dark: { width: 168, height: 28 },
  color: { width: 188, height: 32 },
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
    />
  );
}
