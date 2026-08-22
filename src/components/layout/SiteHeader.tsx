"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { nav, site } from "@/data/site";

/** Seamless chrome: sits on the cream, no pill. Blur only after scroll. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 28));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-white/50 bg-bg/65 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 md:h-[82px] md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <Link
            href="#top"
            className="inline-flex shrink-0 items-center justify-self-start"
            aria-label="Suzette Sun, back to top"
          >
            <BrandLogo variant="light" priority className="h-[26px] w-auto md:h-[30px]" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex xl:gap-10">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2.5">
            <a
              href="#contact"
              className="pressable hidden items-center gap-2 rounded-full border border-ink/15 bg-transparent px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink hover:border-ink/30 hover:bg-white/40 sm:inline-flex"
            >
              Let&apos;s Connect
              <ArrowUpRight size={12} weight="bold" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="pressable inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-white/40 text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <List size={19} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-panel fixed inset-0 z-[70] flex flex-col !rounded-none"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between px-5 pt-2">
              <BrandLogo variant="light" className="h-[26px] w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="pressable inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-white/70"
                aria-label="Close menu"
              >
                <X size={20} aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hairline-b py-4 text-[clamp(1.75rem,7vw,2.5rem)] font-semibold tracking-tight text-ink"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${site.email}`}
                className="pressable mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[15px] font-medium text-ink"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(false)}
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} weight="bold" aria-hidden />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
