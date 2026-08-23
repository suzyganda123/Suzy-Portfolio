"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Site-wide Motion policy: respect OS reduced-motion without console noise. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
