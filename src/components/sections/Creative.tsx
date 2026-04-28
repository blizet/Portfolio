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
  letter: string;
  kicker: string;
  title: string;
  italic: string;
  body: string;
  manifesto: string;
  tags: string[];
  href: string;
  flip?: boolean;
};

const pursuits: Pursuit[] = [
  {
    num: "01",
    letter: "W",
    kicker: "Typography",
    title: "Typography",
    italic: "longform & technical narrative",
    body:
      "Translating complex systems into prose people actually want to read - documentation, deep dives, and the occasional argument disguised as a blog post.",
    manifesto: "I write to think clearly. The page is a debugger for ideas.",
    tags: ["Technical Writing", "Documentation", "Essays"],
    href: "https://medium.com/@anjalijha2k3",
  },
  {
    num: "02",
    letter: "D",
    kicker: "Interface",
    title: "Design",
    italic: "ui, motion & visual craft",
    body:
      "Composition, type, and rhythm. Designing for clarity first and delight second - the kind of details that only register when they're missing.",
    manifesto: "Design is the way you remove every word that doesn't earn its place.",
    tags: ["Interface", "Motion", "Identity"],
    href: "https://contra.com/anjali_jha_7i4gz4k5?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=anjali_jha_7i4gz4k5",
    flip: true,
  },
  {
    num: "03",
    letter: "O",
    kicker: "Community",
    title: "Open Source",
    italic: "build in public",
    body:
      "Collaboration with strangers who become collaborators - code reviews, mentorship, and shipping work that anyone can fork.",
    manifesto: "The best work I've shipped has somebody else's name on the next commit.",
    tags: ["GSoC", "Mentorship", "OSS Contributions"],
    href: "https://github.com/blizet",
  },
];

export default function Creative() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-creative-letter]",
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-creative-prose] > *",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_15%_25%,rgba(139,92,246,0.08),transparent_45%),radial-gradient(circle_at_90%_75%,rgba(139,92,246,0.04),transparent_45%)] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14" data-creative-head>
          <span className="font-mono text-sm text-white/45">007</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">
            CREATIVE PURSUITS
          </h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="mb-16 md:mb-24 max-w-3xl" data-creative-head>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Things I make <span className="italic text-white/55">when</span> I&apos;m not shipping software.
          </h3>
        </div>

        <div className="space-y-20 md:space-y-32">
          {pursuits.map((p) => (
            <article
              key={p.num}
              className={`group relative grid gap-y-6 md:gap-x-12 lg:gap-x-20 items-center grid-cols-1 md:grid-cols-[1fr_1.2fr] ${
                p.flip ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <a
                data-creative-letter
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} profile`}
                className={`relative select-none block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${p.flip ? "md:text-right" : ""}`}
              >
                <span
                  aria-hidden
                  className="block leading-[0.78] tracking-[-0.05em] italic transition-all duration-700 ease-out group-hover:tracking-[-0.07em]"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(8rem, 22vw, 22rem)",
                    fontWeight: 500,
                    color: "transparent",
                    WebkitTextStroke: `1px ${ACCENT}88`,
                    textShadow: `0 0 80px ${ACCENT}22`,
                  }}
                >
                  {p.letter}
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 leading-[0.78] tracking-[-0.05em] italic opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(8rem, 22vw, 22rem)",
                    fontWeight: 500,
                    background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT}55 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.letter}
                </span>
              </a>

              <a
                data-creative-prose
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative max-w-xl block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label={`Open ${p.title} profile`}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="font-mono text-[11px] tracking-[0.32em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    {p.num} / {p.kicker}
                  </span>
                  <span className="h-px flex-1 bg-white/12" />
                </div>

                <h4 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white">
                  {p.title}
                </h4>
                <p
                  className="mt-3 text-base md:text-lg italic tracking-wide"
                  style={{ color: "var(--w-50)" }}
                >
                  {p.italic}
                </p>

                <p
                  className="mt-7 md:mt-8 text-sm md:text-[15px] leading-relaxed text-white/72"
                >
                  {p.body}
                </p>

                <blockquote
                  className="mt-7 pl-5 italic text-base md:text-lg leading-relaxed"
                  style={{
                    borderLeft: `2px solid ${ACCENT}88`,
                    color: "var(--w-85)",
                  }}
                >
                  &ldquo;{p.manifesto}&rdquo;
                </blockquote>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] font-mono tracking-[0.18em] uppercase text-white/45">
                  {p.tags.map((tag, idx) => (
                    <span key={tag} className="flex items-center gap-3">
                      {idx > 0 && (
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full"
                          style={{ background: "var(--w-22)" }}
                        />
                      )}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[10px] tracking-[0.24em] uppercase text-white/55">
                  Open profile ↗
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
