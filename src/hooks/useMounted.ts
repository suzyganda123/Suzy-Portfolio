"use client";

import { useEffect, useState } from "react";

/** True after the client has mounted — use to defer motion so SSR HTML matches hydration. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
