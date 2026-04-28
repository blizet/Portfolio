"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ACCENT = "#8b5cf6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Pursuit = {
  num: string;
  kicker: string;
  title: string;
  italic: string;
  body: string;
  tags: string[];
  span: string;
  align?: "left" | "right";
  glyph: React.ReactNode;
};

const pursuits: Pursuit[] = [
  {
    num: "01",
    kicker: "/ NARRATIVE",
    title: "Writing",
    italic: "longform & technical narrative",
    body:
      "Translating complex systems into prose people actually want to read. Documentation, deep dives, and the occasional argument disguised as a blog post.",
    tags: ["Technical Writing", "Documentation", "Essays"],
    span: "lg:col-span-7 lg:row-span-2",
    align: "left",
    glyph: (
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full opacity-[0.08]">
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="220"
          fontStyle="italic"
          fill="currentColor"
        >
          A
        </text>
      </svg>
    ),
  },
  {
    num: "02",
    kicker: "/ INTERFACE",
    title: "Design",
    italic: "ui, motion & visual craft",
    body:
      "Composition, type, and rhythm. Designing for clarity first and delight second.",
    tags: ["Interface", "Motion", "Identity"],
    span: "lg:col-span-5",
    glyph: (
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full opacity-[0.08]">
        <circle cx="40" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="80" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "03",
    kicker: "/ COMMUNITY",
    title: "Open Source",
    italic: "build in public",
    body:
      "Collaboration with strangers who become collaborators. Code reviews, mentorship, and shipping work that anyone can fork.",
    tags: ["GSoC", "Mentorship", "OSS Contributions"],
    span: "lg:col-span-5",
    glyph: (
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full opacity-[0.08]">
        <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="16" y1="60" x2="104" y2="60" stroke="currentColor" strokeWidth="2" />
        <path d="M60 16 a44 44 0 0 1 0 88 a44 44 0 0 1 0 -88" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Creative() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-creative-card]",
        { opacity: 0, y: 36, rotateZ: -1.2 },
        {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-creative-head]",
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

  return (
    <section
      id="creative"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_15%_25%,rgba(139,92,246,0.08),transparent_45%),radial-gradient(circle_at_90%_75%,rgba(139,92,246,0.04),transparent_45%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)] text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-4 mb-12 md:mb-16" data-creative-head>
          <span className="font-mono text-sm text-white/45">005</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">CREATIVE PURSUITS</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="mb-14 md:mb-20 max-w-3xl" data-creative-head>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Things I make <span className="italic text-white/55">when</span> I&apos;m not
            shipping software.
          </h3>
          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            A side-stack of pursuits that keeps the engineering work honest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row-dense gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
          {pursuits.map((p) => (
            <article
              key={p.num}
              data-creative-card
              className={`group relative ${p.span} overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 md:p-9 transition-all duration-500 hover:-translate-y-1`}
              style={{ color: "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${ACCENT}55`;
                e.currentTarget.style.boxShadow = `0 28px 80px ${ACCENT}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-700 opacity-50 group-hover:opacity-90"
                style={{ color: ACCENT }}
              >
                {p.glyph}
              </div>

              <div
                className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ background: ACCENT }}
              />

              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] tracking-[0.32em]"
                    style={{ color: ACCENT }}
                  >
                    {p.kicker}
                  </span>
                  <span className="font-mono text-xs text-white/35 tracking-wider">{p.num}</span>
                </div>

                <div className={`flex-1 flex flex-col justify-center ${p.align === "right" ? "lg:items-end lg:text-right" : ""}`}>
                  <h4 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.95]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm md:text-base italic text-white/55 tracking-wide">
                    {p.italic}
                  </p>
                  <p className="mt-5 max-w-xl text-sm md:text-base text-white/72 leading-relaxed">
                    {p.body}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-2 ${p.align === "right" ? "lg:justify-end" : ""}`}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.04] text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className="pointer-events-none absolute top-0 left-0 h-12 w-12 origin-top-left rotate-45 -translate-x-6 -translate-y-6 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, transparent 60%)` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
