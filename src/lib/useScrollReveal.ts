"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollRevealOptions = {
  selector?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      selector = "[data-reveal]",
      y = 32,
      x = 0,
      scale = 1,
      duration = 0.9,
      stagger = 0.08,
      start = "top 82%",
      once = true,
    } = options;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
}
