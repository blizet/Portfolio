"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ACCENT = "#8b5cf6";

type Award = {
  year: string;
  title: string;
  org: string;
  category: "Open Source" | "Hackathon" | "Publication";
  description: string;
  highlight?: boolean;
};

const awards: Award[] = [
  {
    year: "2025",
    title: "Google Summer of Code",
    org: "AOSSIE",
    category: "Open Source",
    highlight: true,
    description:
      "Selected globally to ship Fate Protocol — a decentralized prediction market — with AOSSIE.",
  },
  {
    year: "2025",
    title: "ETC Nova Hackathon · Winner",
    org: "Global",
    category: "Hackathon",
    description:
      "Recognized for innovation in blockchain UX and smart-contract design.",
  },
  {
    year: "2025",
    title: "Research Publication",
    org: "ISW",
    category: "Publication",
    description:
      "Paper on Fate Protocol accepted at International Stability Workshop (peer-reviewed).",
  },
  {
    year: "2024",
    title: "MSME Idea Hackathon 3.0",
    org: "MY MSME (Women)",
    category: "Hackathon",
    highlight: true,
    description:
      "Won with Kridin — a player-NFT crowdfunding + livestream platform. Funding + incubation under MSME Innovative Scheme.",
  },
  {
    year: "2024",
    title: "Hackoverflow · 2nd Place",
    org: "CV Competition",
    category: "Hackathon",
    description:
      "2nd place in a content-based image processing and computer vision competition.",
  },
];

const years = Array.from(new Set(awards.map((a) => a.year))).sort((a, b) =>
  b.localeCompare(a),
);

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-aw-head]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      const columns = gsap.utils.toArray<HTMLElement>("[data-aw-col]");
      columns.forEach((col, ci) => {
        gsap.fromTo(
          col.querySelectorAll("[data-aw-year]"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: ci * 0.05,
            scrollTrigger: {
              trigger: col,
              start: "top 78%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          col.querySelectorAll("[data-aw-card]"),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1 + ci * 0.05,
            scrollTrigger: {
              trigger: col,
              start: "top 78%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const totals = years.map((y) => ({
    year: y,
    count: awards.filter((a) => a.year === y).length,
  }));

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 bg-[radial-gradient(circle_at_88%_15%,rgba(139,92,246,0.07),transparent_45%),radial-gradient(circle_at_12%_88%,rgba(139,92,246,0.04),transparent_45%)] text-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14" data-aw-head>
          <span className="font-mono text-sm text-white/45">006</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">RECOGNITION</h2>
          <div className="flex-1 h-px bg-white/15" />
          <span className="font-mono text-[10px] tracking-[0.28em] text-white/40 hidden md:inline">
            {String(awards.length).padStart(2, "0")} ENTRIES
          </span>
        </div>

        <div
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          data-aw-head
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            A short list of what&apos;s been{" "}
            <span className="italic text-white/55">recognized</span>.
          </h3>
          <div className="flex items-center gap-6 md:gap-8 font-mono text-[11px] tracking-[0.22em] uppercase text-white/55">
            {totals.map((t) => (
              <div key={t.year} className="flex items-baseline gap-2">
                <span
                  className="text-2xl md:text-3xl font-bold tabular-nums"
                  style={{ color: ACCENT }}
                >
                  {String(t.count).padStart(2, "0")}
                </span>
                <span>· {t.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-12 md:gap-y-14 relative">
          <span
            aria-hidden
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.10) 25%, rgba(255,255,255,0.10) 75%, transparent 100%)`,
            }}
          />

          {years.map((year, ci) => {
            const list = awards.filter((a) => a.year === year);
            return (
              <div
                key={year}
                data-aw-col
                className={ci === 0 ? "md:pr-2" : "md:pl-2"}
              >
                <div
                  data-aw-year
                  className="flex items-end justify-between gap-4 mb-6 md:mb-8"
                >
                  <h4
                    className="font-black tabular-nums leading-[0.85] tracking-tighter text-white/[0.96]"
                    style={{
                      fontSize: "clamp(2.75rem, 8vw, 5.25rem)",
                      letterSpacing: "-0.045em",
                      textShadow: `0 12px 40px ${ACCENT}22`,
                    }}
                  >
                    {year}
                  </h4>
                  <div className="text-right pb-2 md:pb-3 shrink-0">
                    <p
                      className="font-mono text-[10px] tracking-[0.28em] uppercase"
                      style={{ color: ACCENT }}
                    >
                      Vol. {String(ci + 1).padStart(2, "0")}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40 mt-1">
                      {list.length} {list.length === 1 ? "Entry" : "Entries"}
                    </p>
                  </div>
                </div>

                <ul className="space-y-6 md:space-y-7">
                  {list.map((award, i) => (
                    <li
                      key={award.title}
                      data-aw-card
                      className="group relative pl-7"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-1 font-mono text-[10px] tracking-[0.28em] text-white/35"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className="absolute left-[6px] top-7 bottom-0 w-px bg-white/8 group-last:hidden"
                      />

                      <div className="flex items-start justify-between gap-4">
                        <h5
                          className="text-lg md:text-xl font-semibold tracking-tight text-white leading-[1.2] transition-colors duration-300 group-hover:text-white"
                          style={
                            award.highlight
                              ? {
                                  textShadow: `0 0 24px ${ACCENT}44`,
                                }
                              : undefined
                          }
                        >
                          {award.title}
                        </h5>
                        {award.highlight && (
                          <span
                            aria-hidden
                            className="shrink-0 mt-2 font-mono text-[9px] tracking-[0.32em] uppercase"
                            style={{ color: ACCENT }}
                          >
                            ★
                          </span>
                        )}
                      </div>

                      <div className="mt-1.5 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white/55">
                        <span>{award.org}</span>
                        <span className="h-3 w-px bg-white/15" />
                        <span style={{ color: `${ACCENT}cc` }}>
                          {award.category}
                        </span>
                      </div>

                      <p className="mt-4 text-[14.5px] md:text-[15px] text-white/65 leading-[1.65] max-w-[55ch]">
                        {award.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
