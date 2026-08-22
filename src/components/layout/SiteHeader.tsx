"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 48));

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-5">
        <div
          className={`pointer-events-auto mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between rounded-full px-4 transition-[background-color,box-shadow,border-color] duration-300 md:h-[58px] md:px-5 ${
            scrolled ? "glass-panel" : "glass"
          }`}
        >
          <Link
            href="#top"
            className="inline-flex shrink-0 items-center"
            aria-label="Suzette Sun, back to top"
          >
            <BrandLogo variant="light" priority className="h-7 w-auto md:h-8" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="pressable group/nav hidden items-center gap-2 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-soft hover:bg-zinc-900 sm:inline-flex"
            >
              Let&apos;s Connect
              <span
                className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/nav:translate-x-0.5 group-hover/nav:-translate-y-px"
                aria-hidden
              >
                <ArrowRight size={13} weight="bold" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="pressable glass-card inline-flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <List size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col glass-panel !rounded-none"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between px-5 pt-2">
              <BrandLogo variant="light" className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="pressable glass-card inline-flex size-10 items-center justify-center rounded-full"
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
                className="pressable mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 text-[15px] font-medium text-surface"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(false)}
              >
                Let&apos;s Connect
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15" aria-hidden>
                  <ArrowRight size={16} weight="bold" />
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
