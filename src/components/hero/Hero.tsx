"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { capabilities, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/layout/Container";
import { LaptopMockup } from "./LaptopMockup";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { HeroProofStrip } from "./HeroProofStrip";
import { ServicesDock } from "./ServicesDock";
import { HeroContactCard } from "./HeroContactCard";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Cleaner hero: fewer floats (tools already live on laptop screen). */
export function Hero() {
  const reduce = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 16, mass: 0.6 });

  const laptopRotateY = useTransform(sx, [-0.5, 0.5], [-1.6, 1.6]);
  const laptopRotateX = useTransform(sy, [-0.5, 0.5], [1, -1]);
  const cardX = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const cardY = useTransform(sy, [-0.5, 0.5], [-3, 3]);
  const dockY = useTransform(sy, [-0.5, 0.5], [2, -2]);
  const contactX = useTransform(sx, [-0.5, 0.5], [-3, 3]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-x-clip pb-10 md:pb-16 lg:pb-24"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <AmbientBackground />
      <Container>
        <div
          ref={sceneRef}
          className="relative grid items-center gap-10 pb-20 pt-32 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-36 lg:min-h-[100dvh] lg:pb-20 lg:pt-28"
        >
          <motion.div
            className="relative z-[2] md:col-span-5"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } } }}
          >
            <motion.p
              variants={rise}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[11px] sm:tracking-[0.18em]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
                <defs>
                  <linearGradient id="eyebrow-star" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F04486" />
                    <stop offset="0.55" stopColor="#FF6B5F" />
                    <stop offset="1" stopColor="#FFAA3D" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 1.5 14.4 9.6 22.5 12 14.4 14.4 12 22.5 9.6 14.4 1.5 12 9.6 9.6Z"
                  fill="url(#eyebrow-star)"
                />
              </svg>
              Marketing Professional · Virtual Assistant
            </motion.p>

            <motion.h1
              variants={rise}
              className="mt-5 text-[clamp(2.75rem,5vw,4.85rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink text-balance"
            >
              <span className="block">I create</span>
              <span className="serif-accent gradient-word block">impactful</span>
              <span className="block">experiences.</span>
            </motion.h1>

            <motion.p variants={rise} className="mt-5 max-w-[42ch] text-[16.5px] leading-relaxed text-muted text-pretty">
              {site.positioning}
            </motion.p>

            <motion.div variants={rise} className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#work" arrow="right">
                View My Work
              </Button>
              <Button href={site.cvUrl} variant="outline" download ariaLabel="Download Suzette Sun's CV as PDF">
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={rise} className="mt-7 hidden md:block md:max-w-[480px]">
              <HeroProofStrip />
            </motion.div>

            <motion.ul
              variants={rise}
              className="mt-6 flex max-w-[440px] flex-wrap gap-2"
              aria-label="Core capabilities"
            >
              {capabilities.slice(0, 5).map((c) => (
                <li key={c.name}>
                  <Chip label={c.name} color={c.color} />
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <div className="relative md:col-span-7 lg:min-h-[560px] xl:min-h-[620px]">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="relative mx-auto w-full"
            >
              <LaptopMockup style={reduce ? undefined : { rotateX: laptopRotateX, rotateY: laptopRotateY }} />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease: EASE }}
              style={reduce ? undefined : { x: cardX, y: cardY }}
              className="mt-5 md:absolute md:-right-2 md:-top-4 md:mt-0 lg:-right-4 lg:-top-8"
            >
              <FeaturedProjectCard />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.48, ease: EASE }}
              style={reduce ? undefined : { y: dockY }}
              className="mt-5 hidden lg:absolute lg:bottom-3 lg:left-[4%] lg:mt-0 lg:block lg:w-[min(400px,58%)]"
            >
              <ServicesDock />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease: EASE }}
              style={reduce ? undefined : { x: contactX }}
              className="mt-5 hidden lg:absolute lg:bottom-2 lg:right-0 lg:mt-0 lg:w-[250px]"
            >
              <HeroContactCard />
            </motion.div>
          </div>

          <div className="md:col-span-5 md:hidden">
            <HeroProofStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 28%, rgba(255,255,255,.96), transparent 46%), linear-gradient(125deg, #F7F2EA 0%, #F0E8DC 100%)",
        }}
      />
      <div
        className="absolute -left-20 top-[10%] h-[380px] w-[300px] rotate-[-16deg] opacity-[0.1] blur-3xl"
        style={{
          background: "radial-gradient(ellipse at 40% 50%, rgb(23 23 23 / 0.4) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute -right-28 -top-28 size-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,68,134,.1) 0%, rgba(255,159,67,.07) 42%, transparent 70%)",
        }}
      />
    </div>
  );
}
