"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/basePath";
import { useThemeMode } from "@/lib/useThemeMode";

const ACCENT = "#8b5cf6";

const techStack = [
  { name: "React", icon: "R" },
  { name: "Next.js", icon: "N" },
  { name: "TypeScript", icon: "TS" },
  { name: "FastAPI", icon: "F" },
  { name: "Python", icon: "Py" },
  { name: "GCP", icon: "G" },
];

// Table-style masonry with large blocks and exact packing.
// Desktop: 4 cols × 6 rows = 24 cells.
// Packing: 2 feature blocks (2x3 = 6 each) + 4 standard blocks (1x3 = 3 each)
// => 12 + 12 = 24 exact (no gaps).
const tileSpans = [
  "row-span-3 col-span-2",
  "row-span-3 col-span-1",
  "row-span-3 col-span-1",
  "row-span-3 col-span-1",
  "row-span-3 col-span-2",
  "row-span-3 col-span-1",
];

// One signature shot per project (`_1` cover) plus secondary shots for variety.
// `_0` is each project's logo - intentionally excluded from the masonry.
// Edit project covers/galleries in src/data/projects.ts.
const tileImages = [
  `${basePath}/images/fate_1.png`,
  `${basePath}/images/fate_2.png`,
  `${basePath}/images/prosper_1.png`,
  `${basePath}/images/prosper_3.png`,
  `${basePath}/images/clowder_1.png`,
  `${basePath}/images/clowder_2.png`,
  `${basePath}/images/aossie_1.png`,
  `${basePath}/images/aossie_3.png`,
  `${basePath}/images/kridin_1.png`,
  `${basePath}/images/ext_1.png`,
  `${basePath}/images/rnt_1.png`,
  `${basePath}/images/rnt_2.png`,
];

const initialTiles = tileSpans.map((_, i) => tileImages[i % tileImages.length]);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Hero() {
  const theme = useThemeMode();
  const isLight = theme === "light";
  const [tiles, setTiles] = useState<string[]>(initialTiles);
  const [shuffleId, setShuffleId] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTiles((prev) => shuffle(prev));
      setShuffleId((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen relative overflow-hidden"
      style={{ backgroundColor: isLight ? "#f4f1ea" : "#0a0c14" }}
    >
      {/* Masonry grid — table-like, large, and gap-free on desktop */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 grid-rows-6 grid-flow-row-dense gap-3 md:gap-4 p-3 md:p-4">
        {tiles.map((src, i) => (
          <div
            key={i}
            className={`${tileSpans[i]} group relative overflow-hidden rounded-2xl`}
            style={{
              backgroundColor: isLight ? "#f4f1ea" : "#0a0c14",
              animation: `tile-entrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both`,
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <img
              key={`${i}-${shuffleId}`}
              src={src}
              alt=""
              className="tile-fade-in h-full w-full object-cover blur-[12px] brightness-50 saturate-60 scale-105 transition-all duration-500 ease-out group-hover:blur-0 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-100"
              loading="lazy"
            />
            {/* Subtle shimmer overlay on hover */}
            <div
              className="absolute inset-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-0"
              style={{ background: "var(--vignette-soft)" }}
            />
          </div>
        ))}
      </div>

      {/* Bottom vignette overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--vignette-bottom)" }}
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className={`max-w-4xl text-center ${isLight ? "text-black" : "text-white"}`}>
          <p className={`text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 reveal-up ${isLight ? "text-black/85" : "text-white/90"}`}>
            I craft digital experiences that blend{" "}
            <span style={{ color: ACCENT }}>functionality</span> with{" "}
            <span style={{ color: ACCENT }}>innovation</span>, turning complex systems into{" "}
            <span style={{ color: ACCENT }}>elegant solutions</span>.
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6 reveal-up"
            style={{ animationDelay: "0.15s" }}
          >
            Anjali Jha
          </h1>

          <p
            className={`text-base md:text-xl font-light tracking-wide mb-6 md:mb-8 reveal-up ${isLight ? "text-black/70" : "text-white/80"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Software Developer | Full Stack Developer
          </p>

          <div
            className="flex flex-wrap justify-center gap-2.5 md:gap-3 reveal-up"
            style={{ animationDelay: "0.45s" }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="group inline-flex items-center gap-2 rounded-full border backdrop-blur-md px-3.5 py-2 md:px-4 md:py-2.5 transition-all duration-300 hover:scale-105"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${ACCENT}66`;
                  e.currentTarget.style.borderColor = `${ACCENT}aa`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                  e.currentTarget.style.borderColor = isLight
                    ? "rgba(15,20,34,0.25)"
                    : "rgba(255,255,255,0.25)";
                }}
                style={{
                  boxShadow: "0 0 0 transparent",
                  borderColor: isLight ? "rgba(15,20,34,0.25)" : "rgba(255,255,255,0.25)",
                  background: isLight ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.10)",
                }}
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: `${ACCENT}33`, color: "#fff" }}
                >
                  {tech.icon}
                </span>
                <span className={`text-xs md:text-sm font-mono ${isLight ? "text-black/85" : "text-white/90"}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
