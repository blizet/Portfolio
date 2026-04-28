"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const ACCENT = "#8b5cf6";

const QUICK_FACTS = [
  { label: "BASED IN", value: "Mumbai, India" },
  { label: "FOCUS", value: "Web3 / Full-Stack / AI" },
  { label: "STATUS", value: "Open to roles + collabs" },
  { label: "EDUCATION", value: "Computer Engineering" },
];

const STATS = [
  { value: "7+", label: "Projects shipped" },
  { value: "GSoC '25", label: "AOSSIE contributor" },
  { value: "5+", label: "Roles & internships" },
  { value: "Mentor", label: "AOSSIE OSS" },
];

const HIGHLIGHTS = [
  "GSoC 2025 @ AOSSIE - Built Fate Protocol",
  "SDE @ Kridinify Tech - APIs, dashboards, automation",
  "Apprenticeship @ Stability Nexus - Clowder + CATs",
  "R&D @ CDAC India - Email security pipelines",
  "AI voice bot @ EOSGlobe - Azure TTS + Mistral AI",
  "Mentor @ AOSSIE - Reviews + onboarding",
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 24, stagger: 0.06 });
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_18%_22%,rgba(139,92,246,0.12),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.06),transparent_50%)] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14" data-reveal>
          <span className="font-mono text-sm text-white/45">002</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">ABOUT</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <p
          data-reveal
          className="font-mono text-xs tracking-[0.32em] mb-5"
          style={{ color: ACCENT }}
        >
          / HI, I&apos;M ANJALI
        </p>

        <h3
          data-reveal
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl mb-8 md:mb-10"
        >
          Software developer building{" "}
          <span style={{ color: ACCENT }}>web3</span>, full-stack
          and <span style={{ color: ACCENT }}>AI</span> productst.
        </h3>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14">
          <div className="space-y-5" data-reveal>
            <p className="text-base md:text-lg text-white/72 leading-relaxed max-w-2xl">
              I work across product engineering, smart contracts, and AI integrations - shipping production code, learning in the open, and building tools that respect the user&apos;s attention.
            </p>
            <p className="text-base md:text-lg text-white/72 leading-relaxed max-w-2xl">
              Most recently I built Fate Protocol during GSoC 2025 with AOSSIE, lead full-stack engineering at Kridinify Tech, and designed and built Extraction Esports.
            </p>

            <div
              className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
              style={{
                gridTemplateRows: expanded ? "1fr" : "0fr",
                opacity: expanded ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="pt-3 max-w-2xl">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-white/45 mb-4">
                    / SELECTED HIGHLIGHTS
                  </p>
                  <ul className="space-y-2.5">
                    {HIGHLIGHTS.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed"
                      >
                        <span
                          className="mt-2 h-px w-3.5 shrink-0"
                          style={{ background: ACCENT }}
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-white/65 hover:text-white transition-colors"
              aria-expanded={expanded}
            >
              {expanded ? "SHOW LESS" : "READ MORE"}
              <span
                aria-hidden
                className="text-base leading-none transition-transform duration-300"
                style={{
                  color: ACCENT,
                  transform: expanded ? "rotate(180deg)" : "none",
                }}
              >
                {expanded ? "\u2212" : "\u2192"}
              </span>
            </button>
          </div>

          <aside className="space-y-4" data-reveal>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 py-4"
                >
                  <p className="font-mono text-[9px] tracking-[0.28em] text-white/45 mb-1.5">
                    {fact.label}
                  </p>
                  <p className="text-sm text-white/85 leading-snug">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 py-4"
                >
                  <p
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: ACCENT }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/55 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
