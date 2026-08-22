"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "motion/react";

/** Native crop of heroasset.png after black-key (lossless WebP). */
const HERO = {
  src: "/assets/hero/hero-workspace.webp",
  width: 1476,
  height: 995,
} as const;

/** Laptop from heroasset.png, seated on a stone plinth like heropage.jpg. */
export function LaptopMockup({ style }: { style?: MotionStyle }) {
  return (
    <div className="relative mx-auto w-full">
      <div
        className="stone pointer-events-none absolute bottom-[6%] left-[11%] right-[11%] z-0 h-[22%] rounded-[32px]"
        aria-hidden
      />
      <motion.div
        style={{ perspective: "1800px", ...style }}
        className="relative z-[1] [transform-style:preserve-3d]"
      >
        <Image
          src={HERO.src}
          width={HERO.width}
          height={HERO.height}
          alt="Suzette Sun portfolio shown on a laptop, with the featured campaign and marketing tool stack"
          className="relative z-[1] h-auto w-full drop-shadow-[0_28px_56px_rgb(23_23_23/0.22)]"
          priority
          quality={100}
          sizes="(max-width: 767px) 96vw, (max-width: 1279px) 62vw, 920px"
        />
      </motion.div>
      <div className="mx-auto -mt-1 h-9 w-[58%] rounded-full bg-ink/14 blur-2xl" aria-hidden />
    </div>
  );
}
