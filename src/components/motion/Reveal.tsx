"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMounted } from "@/hooks/useMounted";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
};

export function Reveal({ children, delay = 0, y = 24, className, amount = 0.3 }: RevealProps) {
  const reduce = usePrefersReducedMotion();
  const mounted = useMounted();

  if (!mounted) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
