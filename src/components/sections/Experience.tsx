"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { basePath } from "@/lib/basePath";

const ACCENT = "#8b5cf6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  year: string;
  location: string;
  website?: string;
  bullets?: string[];
  logo: string;
  tag: string;
};

const experiences: ExperienceItem[] = [
  {
    id: "01",
    title: "Mentor",
    company: "AOSSIE",
    type: "Part-time",
    duration: "Dec 2025 - Present - 5 mos",
    year: "2025",
    location: "Remote",
    logo: `${basePath}/logos/aossie.png`,
    tag: "MENTOR",
    bullets: [
      "Mentoring contributors on open-source distributed systems and Web3 projects.",
      "Reviewing pull requests, designing architecture, and shaping the contributor experience.",
    ],
  },
  {
    id: "02",
    title: "Software Development Engineer",
    company: "Kridinify Tech",
    type: "Full-time",
    duration: "Jun 2025 - Present",
    year: "2025",
    location: "India - Hybrid",
    website: "https://kridinifytech.in",
    bullets: [
      "Designed 15+ scalable REST APIs using a modular connector-based architecture.",
      "Built data-dense React dashboards with filtering, analytics, and metadata views.",
      "Implemented OAuth 2.0 with rate limiting, timeout handling, and centralized error logging.",
      "Developed automated pipelines for scraping, SEO audits, and metadata generation.",
    ],
    logo: `${basePath}/logos/kridinify_Tech.jpg`,
    tag: "SDE",
  },
  {
    id: "03",
    title: "Google Summer of Code",
    company: "Google Summer of Code @AOSSIE",
    type: "Part-time",
    duration: "Jun 2025 - Nov 2025 - 6 mos",
    year: "2025",
    location: "Remote",
    bullets: [
      "Built Fate Protocol, a decentralized perpetual prediction market using Solidity, Next.js 15 and Ethers.js.",
      "Designed a modular dual-vault architecture and optimized smart contracts for scalability and gas efficiency.",
      "Developed a responsive frontend with TypeScript, TailwindCSS and React Query for real-time blockchain interaction.",
    ],
    logo: `${basePath}/logos/GSoC-icon.png`,
    tag: "GSoC 2025",
  },
  {
    id: "04",
    title: "Software Developer",
    company: "Stability Nexus",
    type: "Apprenticeship",
    duration: "Oct 2024 - May 2025 - 8 mos",
    year: "2024",
    location: "Remote",
    bullets: [
      "Built and shipped Clowder, a contribution accounting platform that tracks project participation using Contribution Accounting Tokens (CATs).",
      "Developed the frontend in Next.js with viem + RainbowKit wallet flows for transparent on-chain contribution tracking.",
      "Integrated Solidity smart contracts to mint and account CATs as proof-of-contribution ownership.",
      "Designed contribution journeys that map well to OSS development, collaborative creativity, event operations, and governance-focused DAO workflows.",
    ],
    logo: `${basePath}/logos/stability_nexus.png`,
    tag: "APPRENTICESHIP",
  },
  {
    id: "05",
    title: "R&D Intern - Cybersecurity",
    company: "CDAC India",
    type: "Internship",
    duration: "Oct 2024 - Mar 2025 - 6 mos",
    year: "2024",
    location: "Kharghar, Navi Mumbai - On-site",
    bullets: [
      "Built an email inspection pipeline to detect PII/SI leakage in Postfix SMTP systems.",
      "Designed rule-based workflows for automated email classification and routing.",
      "Integrated RAG-based policy configuration, improving accuracy and reducing false positives.",
      "Developed monitoring and logging systems for real-time pipeline observability.",
    ],
    logo: `${basePath}/logos/C-DAC_LogoTransp.png`,
    tag: "R&D",
  },
  {
    id: "06",
    title: "Software Developer",
    company: "EOSGlobe",
    type: "Internship",
    duration: "Aug 2024 - Sep 2024 - 2 mos",
    year: "2024",
    location: "Thane, Maharashtra - On-site",
    bullets: [
      "Built an AI-powered voice bot pipeline for conversational user flows.",
      "Integrated Azure Text-to-Speech for natural, low-latency voice output.",
      "Used Mistral AI for response generation and prompt orchestration to keep conversations context-aware and reliable.",
    ],
    logo: `${basePath}/logos/eosglobe-logo.webp`,
    tag: "INTERNSHIP",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(experiences[1].id);

  const active = experiences.find((e) => e.id === activeId) ?? experiences[1];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-exp-rail-item]",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!detailRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      );
      gsap.fromTo(
        detailRef.current!.querySelectorAll("[data-exp-bullet]"),
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power3.out", delay: 0.15 },
      );
    }, detailRef);
    return () => ctx.revert();
  }, [activeId]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.08),transparent_45%),radial-gradient(circle_at_15%_90%,rgba(139,92,246,0.05),transparent_45%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12 md:mb-16" data-exp-head>
          <span className="font-mono text-sm text-white/45">004</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">EXPERIENCE</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="mb-10 md:mb-14 max-w-3xl" data-exp-head>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            A working timeline of where I&apos;ve <span className="italic text-white/55">built</span>,
            shipped, and grown.
          </h3>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-20 items-start">
          <ol className="relative lg:sticky lg:top-24">
            <span className="pointer-events-none absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <li key={exp.id} data-exp-rail-item>
                  <button
                    type="button"
                    onClick={() => setActiveId(exp.id)}
                    className="group relative w-full text-left pl-7 pr-2 py-4 transition-colors duration-300 focus:outline-none"
                  >
                    <span
                      className="pointer-events-none absolute left-0 top-0 bottom-0 w-px transition-all duration-300"
                      style={{
                        background: isActive ? ACCENT : "transparent",
                        boxShadow: isActive ? `0 0 12px ${ACCENT}` : "none",
                      }}
                    />
                    <span
                      className="absolute left-[-3px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full transition-all duration-300"
                      style={{
                        background: isActive ? ACCENT : "rgba(255,255,255,0.25)",
                        boxShadow: isActive ? `0 0 12px ${ACCENT}` : "none",
                        transform: `translateY(-50%) scale(${isActive ? 1.4 : 1})`,
                      }}
                    />
                    <p
                      className="font-mono text-[10px] tracking-[0.22em] transition-colors"
                      style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.4)" }}
                    >
                      {exp.year} - {exp.tag}
                    </p>
                    <p
                      className="mt-1.5 text-base md:text-[17px] font-medium tracking-tight transition-colors"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.62)" }}
                    >
                      {exp.title}
                    </p>
                    <p
                      className="text-xs md:text-sm transition-colors"
                      style={{ color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)" }}
                    >
                      {exp.company}
                    </p>
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            ref={detailRef}
            key={active.id}
            className="relative"
          >
            <div className="flex items-start gap-5 md:gap-6">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-transparent overflow-hidden shrink-0 border border-white/12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.logo}
                  alt={`${active.company} logo`}
                  className="h-full w-full object-contain p-1.5 md:p-2"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `${basePath}/logos/aossie.png`;
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="font-mono text-[10px] tracking-[0.32em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    {active.tag}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 tracking-[0.22em]">
                    {active.type}
                  </span>
                </div>
                <h4 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.02]">
                  {active.title}
                </h4>
                <p className="mt-2 text-lg md:text-xl text-white/72">
                  {active.company}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-xs md:text-sm text-white/45">
                  <span>{active.duration}</span>
                  <span>{active.location}</span>
                </div>
                {active.website && (
                  <a
                    href={active.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm hover:underline underline-offset-4"
                    style={{ color: ACCENT }}
                  >
                    {active.website} <span aria-hidden>-&gt;</span>
                  </a>
                )}
              </div>
            </div>

            {active.bullets && (
              <ul className="mt-10 space-y-3.5 text-white/72 leading-relaxed text-base md:text-[1.05rem] max-w-2xl">
                {active.bullets.map((point) => (
                  <li
                    key={point}
                    data-exp-bullet
                    className="flex items-start gap-3.5"
                  >
                    <span
                      className="mt-[11px] h-1 w-4 shrink-0"
                      style={{ background: ACCENT }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
