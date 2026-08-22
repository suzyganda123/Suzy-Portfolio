"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/layout/Container";
import { LaptopMockup } from "./LaptopMockup";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ToolsPanel } from "./ToolsPanel";
import { HeroProofStrip } from "./HeroProofStrip";
import { HeroQuoteCard } from "./HeroQuoteCard";
import { ServicesDock } from "./ServicesDock";
import { HeroContactCard } from "./HeroContactCard";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Matches heropage.jpg chip row — all real capabilities. */
const heroChips = [
  { name: "Brand Strategy", color: "pink" },
  { name: "Social Media", color: "orange" },
  { name: "Content Creation", color: "violet" },
  { name: "Campaign Management", color: "lime" },
  { name: "Virtual Assistance", color: "blue" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 16, mass: 0.6 });

  const laptopRotateY = useTransform(sx, [-0.5, 0.5], [-1.4, 1.4]);
  const laptopRotateX = useTransform(sy, [-0.5, 0.5], [0.9, -0.9]);
  const cardX = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const cardY = useTransform(sy, [-0.5, 0.5], [-4, 4]);
  const toolsY = useTransform(sy, [-0.5, 0.5], [3, -3]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const resetPointer = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      ref={sceneRef}
      className="relative overflow-hidden pb-10 lg:min-h-[100dvh] lg:pb-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <AmbientBackground />

      <Container wide className="relative">
        <div className="grid grid-cols-1 items-start pt-[88px] md:pt-[96px] lg:grid-cols-12 lg:gap-4 lg:pt-[108px] xl:gap-6">
          <motion.div
            className="relative z-[3] min-w-0 lg:col-span-5 lg:pt-10 xl:col-span-4 xl:pt-14"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } } }}
          >
            <Sparkle className="mb-2 lg:absolute lg:-left-1 lg:top-6 lg:mb-0 xl:left-0" />

            <motion.p
              variants={rise}
              className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[10px]"
            >
              <span className="h-px w-4 bg-muted/70" aria-hidden />
              Marketing Professional &amp; Virtual Assistant
            </motion.p>

            <div className="relative">
              <CurveArrow className="pointer-events-none absolute -left-[72px] top-[38%] hidden 2xl:block" />
              <motion.h1
                variants={rise}
                className="mt-3.5 text-[clamp(2.4rem,4.2vw,3.85rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink"
              >
                <span className="block">I create</span>
                <span className="serif-accent gradient-word block">impactful</span>
                <span className="block">experiences</span>
              </motion.h1>
            </div>

            <motion.p
              variants={rise}
              className="mt-4 max-w-[36ch] text-[14.5px] leading-[1.65] text-muted"
            >
              {site.positioning}
            </motion.p>

            <motion.div variants={rise} className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="#work"
                className="pressable group/cta inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-surface shadow-soft hover:bg-zinc-900"
              >
                View My Work
                <ArrowUpRight
                  size={12}
                  weight="bold"
                  className="transition-transform duration-300 group-hover/cta:-translate-y-px group-hover/cta:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <a
                href={site.cvUrl}
                download
                aria-label="Download Suzette Sun's CV as PDF"
                className="pressable group/cv inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                Download CV
                <DownloadSimple
                  size={13}
                  weight="bold"
                  className="transition-transform duration-300 group-hover/cv:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </motion.div>

            <motion.p
              variants={rise}
              className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              What I Do
            </motion.p>
            <motion.ul
              variants={rise}
              className="mt-3 flex flex-wrap gap-2"
              aria-label="Core capabilities"
            >
              {heroChips.map((c) => (
                <li key={c.name}>
                  <Chip label={c.name} color={c.color} size="compact" />
                </li>
              ))}
            </motion.ul>

            <motion.div variants={rise} className="mt-8 hidden lg:block">
              <HeroProofStrip />
            </motion.div>
          </motion.div>

          <div className="relative mt-10 min-w-0 lg:col-span-7 lg:mt-0 xl:col-span-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="relative mx-auto w-full max-w-[680px] lg:ml-auto lg:mr-0 lg:max-w-none lg:w-[98%] xl:w-[94%]"
            >
              <LaptopMockup style={reduce ? undefined : { rotateX: laptopRotateX, rotateY: laptopRotateY }} />

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.34, ease: EASE }}
                style={reduce ? undefined : { x: cardX, y: cardY }}
                className="relative z-[5] mx-auto mt-6 w-full max-w-[280px] lg:absolute lg:right-[-2%] lg:top-[16%] lg:mt-0 lg:w-[31%] lg:max-w-[268px] xl:right-[1%] xl:top-[14%]"
              >
                <FeaturedProjectCard />
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: EASE }}
                style={reduce ? undefined : { y: toolsY }}
                className="relative z-[4] mx-auto mt-4 w-full max-w-[420px] lg:absolute lg:bottom-[22%] lg:left-[18%] lg:mt-0 lg:w-[48%] lg:max-w-none xl:left-[20%] xl:w-[44%]"
              >
                <ToolsPanel />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <HeroProofStrip />
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.58, ease: EASE }}
          className="relative z-[5] mt-8 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-[0.95fr_1.55fr_1fr] lg:items-stretch xl:mt-4"
        >
          <HeroQuoteCard />
          <ServicesDock />
          <HeroContactCard />
        </motion.div>
      </Container>
    </section>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
      style={{ transform: "rotate(-8deg)" }}
    >
      <defs>
        <linearGradient id="hero-sparkle" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F04486" />
          <stop offset="0.55" stopColor="#FF6B5F" />
          <stop offset="1" stopColor="#FFAA3D" />
        </linearGradient>
      </defs>
      <g stroke="url(#hero-sparkle)" strokeWidth="3.4" strokeLinecap="round">
        <path d="M24 5v38" />
        <path d="M9.5 12.5 38.5 35.5" />
        <path d="M38.5 12.5 9.5 35.5" />
      </g>
    </svg>
  );
}

function CurveArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="58" height="70" viewBox="0 0 62 74" className={className} aria-hidden>
      <path
        d="M6 8C1 26 6 48 24 58"
        fill="none"
        stroke="#F04486"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M14 54.5 25.5 59 21 47.5"
        fill="none"
        stroke="#F04486"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
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
      <div className="absolute -top-32 left-[4%] h-[300px] w-[400px] rotate-[16deg] rounded-[48%] bg-ink/[0.05] blur-[74px]" />
      <div className="absolute -left-32 top-[40%] h-[360px] w-[220px] rounded-[50%] bg-[#7d9a5c]/20 blur-[60px]" />
      <div className="absolute -right-28 top-[54%] h-[310px] w-[200px] rounded-[50%] bg-[#82a061]/18 blur-[62px]" />
      <div
        className="absolute right-[-1%] top-[2%] h-[210px] w-[52px] rotate-[26deg] opacity-40 blur-[16px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,96,96,.45), rgba(255,196,64,.45), rgba(96,220,150,.4), rgba(88,152,255,.4), rgba(178,112,255,.34), transparent)",
        }}
      />
    </div>
  );
}
