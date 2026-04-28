"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/basePath";

const ACCENT = "#8b5cf6";

const techStack = [
  { name: "React", icon: "R" },
  { name: "Next.js", icon: "N" },
  { name: "TypeScript", icon: "TS" },
  { name: "FastAPI", icon: "F" },
  { name: "Python", icon: "Py" },
  { name: "GCP", icon: "G" },
];

const tileSpans = [
  "row-span-3 col-span-1",
  "row-span-2 col-span-1",
  "row-span-2 col-span-1",
  "row-span-3 col-span-1",
  "row-span-2 col-span-1",
  "row-span-3 col-span-1",
  "row-span-3 col-span-1",
  "row-span-2 col-span-1",
  "row-span-2 col-span-1",
  "row-span-3 col-span-1",
  "row-span-3 col-span-1",
  "row-span-2 col-span-1",
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
    <section id="hero" className="h-screen relative overflow-hidden bg-[#0a0c14]">
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 grid-rows-10 md:grid-rows-6 grid-flow-row-dense gap-2 md:gap-3 p-2 md:p-3">
        {tiles.map((src, i) => (
          <div
            key={i}
            className={`${tileSpans[i]} group relative overflow-hidden rounded-md md:rounded-lg bg-[#0a0c14]`}
          >
            <img
              key={`${i}-${shuffleId}`}
              src={src}
              alt=""
              className="tile-fade-in h-full w-full object-cover blur-[14px] brightness-60 saturate-75 scale-110 transition-[filter,transform] duration-500 ease-out group-hover:blur-0 group-hover:brightness-110 group-hover:saturate-110 group-hover:scale-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 pointer-events-none group-hover:opacity-0" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-white/90 mb-6 md:mb-8 reveal-up">
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
            className="text-base md:text-xl text-white/80 font-light tracking-wide mb-6 md:mb-8 reveal-up"
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
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3.5 py-2 md:px-4 md:py-2.5 transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 0 0 transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${ACCENT}66`;
                  e.currentTarget.style.borderColor = `${ACCENT}aa`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                }}
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: `${ACCENT}33`, color: "#fff" }}
                >
                  {tech.icon}
                </span>
                <span className="text-xs md:text-sm font-mono text-white/90">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
