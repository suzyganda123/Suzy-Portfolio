"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "motion/react";

/** Full hero scene from heronew.png (laptop, plinth, glass floats baked in). */
const HERO = {
  src: "/assets/hero/hero-scene.webp",
  width: 1401,
  height: 1081,
} as const;

export function LaptopMockup({ style }: { style?: MotionStyle }) {
  return (
    <div className="relative mx-auto w-full max-w-[640px] sm:max-w-[720px] lg:max-w-none">
      <motion.div
        style={{ perspective: "1800px", ...style }}
        className="relative [transform-style:preserve-3d]"
      >
        <Image
          src={HERO.src}
          width={HERO.width}
          height={HERO.height}
          alt="Suzette Sun portfolio hero: laptop workspace with featured project, tools, services, and contact card"
          className="h-auto w-full max-w-none drop-shadow-[0_28px_56px_rgb(23_23_23/0.2)]"
          priority
          quality={100}
          sizes="(max-width: 639px) 92vw, (max-width: 1023px) 720px, (max-width: 1279px) 58vw, 900px"
        />
      </motion.div>
    </div>
  );
}
