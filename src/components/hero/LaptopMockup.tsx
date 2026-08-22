"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "motion/react";

const HERO = {
  src: "/assets/hero/hero-workspace.webp",
  width: 1476,
  height: 995,
} as const;

/** Hero workspace: approved laptop mockup on a stone plinth (per hero reference). */
export function LaptopMockup({ style }: { style?: MotionStyle }) {
  return (
    <div style={{ perspective: "1600px" }} className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
      <motion.div style={style} className="[transform-style:preserve-3d]">
        <div style={{ transform: "rotateY(6deg) rotateX(1.5deg)", transformStyle: "preserve-3d" }}>
          {/* Stone pedestal */}
          <div
            className="relative mx-auto w-[78%] rounded-[28px] bg-gradient-to-b from-[#d8d2c8] via-[#c8c0b4] to-[#b8afa2] shadow-[0_28px_60px_rgb(23_23_23/0.16)]"
            aria-hidden
          >
            <div className="absolute inset-x-[8%] top-0 h-[3px] rounded-full bg-white/35" />
            <div className="absolute inset-0 rounded-[28px] opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.5),transparent_45%)]" />
            <div className="h-[22px]" />
          </div>

          {/* Laptop asset (screen UI baked in) */}
          <div className="relative -mt-[6px] w-full">
            <Image
              src={HERO.src}
              width={HERO.width}
              height={HERO.height}
              alt="Portfolio preview on MacBook showing campaign work, featured project, and tools"
              className="h-auto w-full drop-shadow-[0_32px_64px_rgb(23_23_23/0.22)]"
              priority
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 54vw, 640px"
            />
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-4 h-8 w-[62%] rounded-[100%] bg-ink/12 blur-2xl" aria-hidden />
    </div>
  );
}
