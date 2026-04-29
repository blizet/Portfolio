 "use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { basePath } from "@/lib/basePath";
import { useThemeMode } from "@/lib/useThemeMode";

const ACCENT = "#8b5cf6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ExperienceItem = {
  id: string;
  index: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  year: string;
  short: string;
  location: string;
  website?: string;
  bullets: string[];
  logo: string;
  tag: string;
};

const experiences: ExperienceItem[] = [
  {
    id: "01",
    index: "01",
    title: "Mentor",
    company: "AOSSIE",
    type: "Part-time",
    duration: "Dec 2025 — Present",
    year: "2025",
    short: "Now",
    location: "Remote",
    logo: `${basePath}/logos/aossie.png`,
    tag: "Open Source",
    bullets: [
      "Mentoring contributors on open-source distributed systems and Web3 projects.",
      "Reviewing PRs, designing architecture, and shaping the contributor experience.",
    ],
  },
  {
    id: "02",
    index: "02",
    title: "Software Development Engineer",
    company: "Kridinify Tech",
    type: "Full-time",
    duration: "Jun 2025 — Present",
    year: "2025",
    short: "'25",
    location: "India · Hybrid",
    website: "https://kridinifytech.in",
    bullets: [
      "Designed 15+ scalable REST APIs using a modular connector-based architecture.",
      "Built data-dense React dashboards with filtering, analytics, and metadata views.",
      "Implemented OAuth 2.0 with rate limiting, timeouts, and centralized error logging.",
      "Developed automated pipelines for scraping, SEO audits, and metadata generation.",
    ],
    logo: `${basePath}/logos/kridinify_Tech.png`,
    tag: "Product",
  },
  {
    id: "03",
    index: "03",
    title: "GSoC Contributor",
    company: "AOSSIE",
    type: "Part-time",
    duration: "Jun 2025 — Nov 2025",
    year: "2025",
    short: "GSoC",
    location: "Remote",
    bullets: [
      "Built Fate Protocol — a decentralized perpetual prediction market — in Solidity, Next.js 15 and Ethers.js.",
      "Designed a modular dual-vault architecture and optimized smart contracts for gas efficiency.",
      "Shipped a responsive frontend in TypeScript and TailwindCSS with React Query for live blockchain interaction.",
    ],
    logo: `${basePath}/logos/GSoC-icon.png`,
    tag: "GSoC '25",
  },
  {
    id: "04",
    index: "04",
    title: "Software Developer",
    company: "Stability Nexus",
    type: "Apprenticeship",
    duration: "Oct 2024 — May 2025",
    year: "2024",
    short: "'24",
    location: "Remote",
    bullets: [
      "Built and shipped Clowder — a contribution accounting platform powered by Contribution Accounting Tokens (CATs).",
      "Developed the frontend in Next.js with viem + RainbowKit wallet flows.",
      "Integrated Solidity smart contracts to mint CATs as proof-of-contribution ownership.",
      "Designed contribution journeys for OSS, creative collaboration, events, and DAO governance.",
    ],
    logo: `${basePath}/logos/stability_nexus.png`,
    tag: "Web3",
  },
  {
    id: "05",
    index: "05",
    title: "R&D Intern — Cybersecurity",
    company: "CDAC India",
    type: "Internship",
    duration: "Oct 2024 — Mar 2025",
    year: "2024",
    short: "R&D",
    location: "Kharghar, Mumbai · On-site",
    bullets: [
      "Built an email inspection pipeline to detect PII / SI leakage in Postfix SMTP systems.",
      "Designed rule-based workflows for automated email classification and routing.",
      "Integrated RAG-based policy configuration, improving accuracy and reducing false positives.",
      "Developed monitoring and logging systems for real-time pipeline observability.",
    ],
    logo: `${basePath}/logos/C-DAC_LogoTransp.png`,
    tag: "Research",
  },
  {
    id: "06",
    index: "06",
    title: "Software Developer",
    company: "EOSGlobe",
    type: "Internship",
    duration: "Aug 2024 — Sep 2024",
    year: "2024",
    short: "Intern",
    location: "Thane · On-site",
    bullets: [
      "Built an AI-powered voice bot pipeline for conversational user flows.",
      "Integrated Azure Text-to-Speech for natural, low-latency voice output.",
      "Used Mistral AI for response generation and prompt orchestration to keep conversations context-aware.",
    ],
    logo: `${basePath}/logos/eosglobe-logo.webp`,
    tag: "AI",
  },
];

export default function Experience() {
  const theme = useThemeMode();
  const isLight = theme === "light";
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string>(experiences[1].id);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-exp-head]",
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

      gsap.fromTo(
        "[data-exp-row]",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-22 md:py-30 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.06),transparent_45%),radial-gradient(circle_at_15%_90%,rgba(139,92,246,0.04),transparent_45%)] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-8 md:mb-10" data-exp-head>
          <span className="font-mono text-sm text-white/45">004</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">EXPERIENCE</h2>
          <div className="flex-1 h-px bg-white/15" />
          <span className="font-mono text-[10px] tracking-[0.28em] text-white/40 hidden md:inline">
            MY EXPERIENCE
          </span>
        </div>

        <div className="space-y-2 md:space-y-3">
          {experiences.map((exp) => {
            const isOpen = openId === exp.id;
            return (
              <article
                key={exp.id}
                data-exp-row
                className="rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300"
                style={{
                  borderColor: isOpen ? `${ACCENT}55` : "var(--w-10)",
                  boxShadow: isOpen ? `0 20px 45px -28px ${ACCENT}66` : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : exp.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-4 md:px-6 py-4 md:py-5"
                >
                  <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start">
                    <div className="flex items-start gap-3 md:gap-4 min-w-0">
                      <div
                        className="relative h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/15 bg-white/[0.03] overflow-hidden flex items-center justify-center shrink-0 transition-all duration-500"
                        style={{
                          boxShadow: isOpen ? `0 0 0 1px ${ACCENT}35` : "none",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="h-full w-full object-contain p-2 transition-all duration-500"
                          style={{
                            // Dark mode uses `invert(1)` so even a pure-black
                            // monochrome logo (e.g. Kridinify) flips to white —
                            // brightness alone can't lift #000 because 0 × n = 0.
                            // Light mode keeps a darken-to-ink filter.
                            filter: isOpen
                              ? "none"
                              : isLight
                                ? "grayscale(1) brightness(0) contrast(1.05)"
                                : "grayscale(1) invert(1) brightness(1.05) contrast(1.05)",
                          }}
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h3 className="text-[1.55rem] md:text-[1.9rem] font-semibold tracking-tight leading-[1.05] text-white">
                            {exp.company}
                          </h3>
                          <span
                            className="font-mono text-[9px] tracking-[0.28em] uppercase px-2 py-0.5 rounded-full border"
                            style={{
                              borderColor: isOpen ? `${ACCENT}55` : "var(--w-14)",
                              color: isOpen ? ACCENT : "var(--w-55)",
                              background: isOpen ? `${ACCENT}10` : "transparent",
                            }}
                          >
                            {exp.tag}
                          </span>
                        </div>
                        <p className="mt-1 text-base md:text-[1.12rem] text-white/75">{exp.title}</p>
                        <p
                          className={`mt-2 inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase ${
                            isLight ? "text-black/55" : "text-white/52"
                          }`}
                        >
                          <span
                            aria-hidden
                            className="inline-block h-1.5 w-1.5 rounded-full"
                            style={{
                              background: isOpen ? ACCENT : "var(--w-32)",
                              boxShadow: isOpen ? `0 0 8px ${ACCENT}` : "none",
                            }}
                          />
                          my work
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right pl-14 md:pl-0">
                      <p className="text-lg md:text-[1.65rem] font-medium text-white/70 leading-tight">
                        {exp.duration}
                      </p>
                      <p className="mt-1 md:mt-1.5 text-[15px] md:text-[1.1rem] text-white/55 leading-tight">
                        {exp.location}
                      </p>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.24em] uppercase text-white/40">
                        {exp.type}
                      </p>
                    </div>
                  </div>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-4 md:pb-6 md:pl-[5.2rem]">
                      <div className="h-px bg-white/10 mb-4 md:mb-5" />
                      <ul className="space-y-2.5 md:space-y-3 max-w-3xl">
                        {exp.bullets.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-[14px] md:text-[15px] text-white/72 leading-[1.6]"
                          >
                            <span
                              aria-hidden
                              className="mt-[0.7em] h-px w-3 shrink-0"
                              style={{ background: `${ACCENT}cc` }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase hover:underline underline-offset-4"
                          style={{ color: ACCENT }}
                        >
                          Visit website ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
