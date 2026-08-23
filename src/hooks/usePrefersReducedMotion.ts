"use client";

import { useEffect, useState } from "react";

/**
 * Silent prefers-reduced-motion reader.
 * Avoids Motion's useReducedMotion() which logs a console warning in development.
 */
export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduce;
}
