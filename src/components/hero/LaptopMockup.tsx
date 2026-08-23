"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "motion/react";

/** Full hero scene from newhero.png (laptop, plinth, floats baked in). */
const HERO = {
  src: "/assets/hero/hero-scene.webp",
  width: 1419,
  height: 1086,
} as const;

export function LaptopMockup({ style }: { style?: MotionStyle }) {
  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">
      <motion.div
        style={{ perspective: "1800px", ...style }}
        className="relative [transform-style:preserve-3d]"
      >
        <Image
          src={HERO.src}
          width={HERO.width}
          height={HERO.height}
          alt="Suzette Sun portfolio hero: laptop workspace with featured project, services, and contact card"
          className="h-auto w-full max-w-none drop-shadow-[0_32px_64px_rgb(23_23_23/0.18)]"
          priority
          quality={100}
          sizes="(max-width: 767px) 94vw, (max-width: 1279px) 58vw, 880px"
        />
      </motion.div>
    </div>
  );
}
