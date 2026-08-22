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
import { ToolsPanel } from "./ToolsPanel";
import { HeroProofStrip } from "./HeroProofStrip";
import { ServicesDock } from "./ServicesDock";
import { HeroContactCard } from "./HeroContactCard";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 16, mass: 0.6 });

  const laptopRotateY = useTransform(sx, [-0.5, 0.5], [-2, 2]);
  const laptopRotateX = useTransform(sy, [-0.5, 0.5], [1.2, -1.2]);
  const cardX = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const cardY = useTransform(sy, [-0.5, 0.5], [-4, 4]);
  const toolsX = useTransform(sx, [-0.5, 0.5], [4, -4]);
  const toolsY = useTransform(sy, [-0.5, 0.5], [3, -3]);
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
      className="relative overflow-x-clip pb-8 md:pb-12 lg:pb-20"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <AmbientBackground />
      <Container>
        <div
          ref={sceneRef}
          className="relative grid items-center gap-12 pb-24 pt-32 md:grid-cols-12 md:gap-6 md:pb-20 md:pt-36 lg:min-h-[100dvh] lg:gap-8 lg:pb-16 lg:pt-28"
        >
          {/* Copy zone — left 38–44% */}
          <motion.div
            className="relative z-[2] md:col-span-5"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
          >
            {/* Hand-drawn arrow (reference: points toward headline) */}
            <motion.div
              variants={rise}
              className="pointer-events-none absolute -left-10 top-[18%] hidden xl:block"
              aria-hidden
            >
              <svg width="72" height="56" viewBox="0 0 72 56" fill="none">
                <path
                  d="M6 46 C 18 18, 34 8, 58 14"
                  stroke="#F04486"
                  strokeOpacity="0.55"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 8 L 62 14 L 52 22"
                  stroke="#F04486"
                  strokeOpacity="0.55"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.p
              variants={rise}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[11px] sm:tracking-[0.18em]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
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
              className="mt-6 text-[clamp(2.85rem,5.2vw,5.1rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
            >
              <span className="block">I create</span>
              <span className="serif-accent gradient-word block">impactful</span>
              <span className="block">experiences.</span>
            </motion.h1>

            <motion.p variants={rise} className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
              {site.positioning}
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#work" arrow="right">
                View My Work
              </Button>
              <Button href={site.cvUrl} variant="outline" download ariaLabel="Download Suzette Sun's CV as PDF">
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={rise} className="mt-8 hidden md:block">
              <HeroProofStrip />
            </motion.div>

            <motion.ul variants={rise} className="mt-8 flex max-w-[480px] flex-wrap gap-2" aria-label="Core capabilities">
              {capabilities.map((c) => (
                <li key={c.name}>
                  <Chip label={c.name} color={c.color} />
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Workspace zone — right 56–62% */}
          <div className="relative md:col-span-7 lg:min-h-[620px] xl:min-h-[680px]">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 26, scale: 0.965 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
              className="relative mx-auto w-full lg:-mr-4 xl:-mr-8"
            >
              <LaptopMockup style={reduce ? undefined : { rotateX: laptopRotateX, rotateY: laptopRotateY }} />
            </motion.div>

            {/* Featured project — top right float */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
              style={reduce ? undefined : { x: cardX, y: cardY }}
              className="mt-6 md:absolute md:-right-1 md:-top-6 md:mt-0 lg:-right-3 lg:-top-10 xl:-right-6"
            >
              <FeaturedProjectCard />
            </motion.div>

            {/* Tools panel — over laptop keyboard area */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: EASE }}
              style={reduce ? undefined : { x: toolsX, y: toolsY }}
              className="mt-6 hidden md:absolute md:bottom-[8%] md:left-[6%] md:mt-0 md:block lg:bottom-[10%] lg:left-[8%]"
            >
              <ToolsPanel />
            </motion.div>

            {/* Services dock — bottom center */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
              style={reduce ? undefined : { y: dockY }}
              className="mt-6 hidden lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[min(440px,92%)] lg:-translate-x-1/2"
            >
              <ServicesDock />
            </motion.div>

            {/* Contact card — bottom right gradient */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62, ease: EASE }}
              style={reduce ? undefined : { x: contactX }}
              className="mt-6 hidden lg:absolute lg:bottom-2 lg:right-0 lg:mt-0 lg:w-[268px] xl:bottom-0"
            >
              <HeroContactCard />
            </motion.div>
          </div>

          {/* Mobile proof strip */}
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
            "radial-gradient(circle at 15% 30%, rgba(255,255,255,.95), transparent 42%), linear-gradient(120deg, #F7F2EA 0%, #EFE7DB 100%)",
        }}
      />
      {/* Leaf shadow hints (reference studio context) */}
      <div
        className="absolute -left-24 top-[8%] h-[420px] w-[340px] rotate-[-18deg] opacity-[0.14] blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, rgb(23 23 23 / 0.35) 0%, rgb(23 23 23 / 0.08) 42%, transparent 68%)",
        }}
      />
      <div
        className="absolute -left-8 bottom-[12%] h-[280px] w-[220px] rotate-[12deg] opacity-[0.1] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgb(23 23 23 / 0.3) 0%, transparent 65%)",
        }}
      />
      {/* Prism light leak */}
      <div
        className="absolute -right-32 -top-32 size-[520px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,68,134,.12) 0%, rgba(255,159,67,.08) 40%, rgba(122,92,250,.06) 58%, transparent 72%)",
        }}
      />
      <div
        className="absolute right-[8%] top-[22%] size-24 rotate-12 opacity-30 blur-xl"
        style={{
          background:
            "conic-gradient(from 210deg, rgba(255,115,93,.25), rgba(240,68,134,.18), rgba(76,125,255,.12), transparent)",
        }}
      />
    </div>
  );
}
