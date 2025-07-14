"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
    });

    // Simpan ke global window
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

// Fungsi scroll ke selector dengan offset setara scroll-m-24
export const handleScrollTo = (selector: string) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(selector, {
      offset: -96, // sama dengan scroll-m-24 (6rem)
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional easing
    });
  }
};
