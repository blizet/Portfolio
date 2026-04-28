"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACCENT = "#8b5cf6";

type LenisLike = {
  scrollTo: (target: number | string | HTMLElement, options?: { duration?: number; offset?: number; immediate?: boolean }) => void;
};

type Anchor = { label: string; href: string };

type StoryChapter = {
  phase: string;
  marker: string;
  title: string;
  lines: string[];
  anchor?: Anchor;
};

const chapters: StoryChapter[] = [
  {
    phase: "01",
    marker: "BEGINNING",
    title: "Exploration",
    lines: [
      "I started my journey in my first and second year by simply exploring technology.",
      "Building, experimenting, and understanding what truly excites me in this space.",
    ],
  },
  {
    phase: "02",
    marker: "TURNING POINT",
    title: "Smart India Hackathon",
    lines: [
      "That exploration turned structured when I reached the finals of the Smart India Hackathon.",
      "I saw, for the first time, how ideas evolve when placed under real-world constraints.",
    ],
    anchor: { label: "Smart India Hackathon", href: "#experience" },
  },
  {
    phase: "03",
    marker: "FIRST EXPOSURE",
    title: "Production at last",
    lines: [
      "This momentum led me to my first government internship.",
      "I transitioned from learning systems to actually building them in production.",
    ],
  },
  {
    phase: "04",
    marker: "SCALING",
    title: "Working in parallel",
    lines: [
      "By the end of my third year I was working across multiple internships.",
      "Each one refined how I approach systems, scalability and execution.",
    ],
  },
  {
    phase: "05",
    marker: "OPEN SOURCE",
    title: "GSoC at AOSSIE",
    lines: [
      "Open source became a defining shift in my journey.",
      "It led to GSoC 2025 at AOSSIE, collaborating on distributed systems with global contributors.",
    ],
    anchor: { label: "GSoC 2025", href: "#awards" },
  },
  {
    phase: "06",
    marker: "STARTUP + PIVOT",
    title: "Building, then re-building",
    lines: [
      "With a government grant, I started a startup rooted in a blockchain-based idea.",
      "As the problem evolved, we pivoted - learning that adaptability matters as much as execution.",
    ],
    anchor: { label: "Selected Work", href: "#work" },
  },
  {
    phase: "07",
    marker: "NOW",
    title: "Building with intent",
    lines: [
      "Hackathons, internships, open source and startup building all converged into one thread.",
      "Learning how to think in systems and ship with intent.",
    ],
  },
];

function AnchorPill({ label, href }: Anchor) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-mono tracking-wide transition-all duration-300 hover:-translate-y-0.5 mt-1"
      style={{
        borderColor: `${ACCENT}66`,
        color: "#ede9fe",
        backgroundColor: "rgba(139,92,246,0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 18px ${ACCENT}40`;
        e.currentTarget.style.borderColor = `${ACCENT}cc`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = `${ACCENT}66`;
      }}
    >
      {label}
    </a>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const skipNarrative = useCallback(() => {
    const target = document.getElementById("work");
    if (!target) return;
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target, { offset: 0, duration: 1.1 });
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const root = sectionRef.current!;
      const stage = root.querySelector<HTMLElement>("[data-stage]");
      const progressBar = root.querySelector<HTMLElement>("[data-progress-bar]");
      if (!stage) return;

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: `+=${chapters.length * 80}%`,
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: `+=${chapters.length * 80}%`,
            scrub: true,
          },
        });
      }

      chapters.forEach((_, i) => {
        const cardSel = `[data-chapter='${i}']`;
        const linesSel = `[data-chapter='${i}'] [data-line]`;
        const headSel = `[data-chapter='${i}'] [data-head]`;
        const dotSel = `[data-progress-dot='${i}']`;

        tl.addLabel(`enter-${i}`)
          .fromTo(cardSel, { opacity: 0 }, { opacity: 1, duration: 0.25 })
          .fromTo(headSel, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35 }, "<")
          .fromTo(
            linesSel,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.18 },
            "<+0.08",
          )
          .to(dotSel, { backgroundColor: ACCENT, width: 36, duration: 0.2 }, "<");

        tl.to({}, { duration: 0.45 });

        if (i < chapters.length - 1) {
          tl.to(cardSel, { opacity: 0, y: -18, duration: 0.3 });
          tl.to(dotSel, { backgroundColor: "rgba(255,255,255,0.18)", width: 24, duration: 0.2 }, "<");
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      const root = sectionRef.current!;
      gsap.utils.toArray<HTMLElement>("[data-chapter]", root).forEach((el) => {
        gsap.set(el, { position: "relative", opacity: 0 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
        gsap.fromTo(
          el.querySelectorAll("[data-line], [data-head]"),
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 78%" },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      data-no-snap
      className="relative bg-[#0a0c14] text-white"
    >
      <div
        data-stage
        className="relative h-screen overflow-hidden flex items-center px-6 md:px-12 lg:px-20"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 22% 18%, rgba(139,92,246,0.16), transparent 45%), radial-gradient(circle at 82% 82%, rgba(139,92,246,0.08), transparent 50%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0c14] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0c14] to-transparent"
          aria-hidden
        />

        <div className="absolute top-8 md:top-10 left-0 right-0 z-10">
          <div className="max-w-3xl mx-auto px-6 md:px-0 flex items-baseline gap-4">
            <span className="font-mono text-sm text-white/45">002</span>
            <h2 className="font-mono text-sm tracking-widest text-white/45">NARRATIVE</h2>
            <span className="flex-1 h-px bg-white/15" />
          </div>
        </div>

        <div className="absolute top-6 md:top-8 right-6 md:right-12 z-20">
          <button
            type="button"
            onClick={skipNarrative}
            aria-label="Skip narrative and jump to selected work"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-3.5 py-1.5 font-mono text-[10px] tracking-[0.28em] text-white/65 hover:text-white transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${ACCENT}88`;
              e.currentTarget.style.boxShadow = `0 0 18px ${ACCENT}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>SKIP NARRATIVE</span>
            <span
              aria-hidden
              className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ color: ACCENT }}
            >
              &rarr;
            </span>
          </button>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <div className="relative grid">
            {chapters.map((c, i) => (
              <article
                key={c.phase}
                data-chapter={i}
                className="col-start-1 row-start-1 will-change-[opacity,transform]"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <div data-head className="mb-8 md:mb-10 flex items-center gap-3">
                  <span
                    className="font-mono text-xs tracking-[0.32em]"
                    style={{ color: ACCENT }}
                  >
                    {c.phase} / {String(chapters.length).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/25" />
                  <span className="font-mono text-[10px] tracking-[0.32em] text-white/55">
                    {c.marker}
                  </span>
                </div>

                <h3
                  data-head
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02] mb-8 md:mb-10"
                >
                  {c.title}
                </h3>

                <div className="space-y-4 max-w-2xl">
                  {c.lines.map((line, idx) => (
                    <p
                      key={idx}
                      data-line
                      className="text-lg md:text-xl lg:text-[1.4rem] text-white/78 leading-[1.55] tracking-[0.005em]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {c.anchor && (
                  <div data-line className="mt-8">
                    <AnchorPill {...c.anchor} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="max-w-3xl mx-auto px-6 md:px-0">
            <div className="flex items-center gap-2.5">
              {chapters.map((_, i) => (
                <span
                  key={i}
                  data-progress-dot={i}
                  className="h-1 rounded-full transition-colors"
                  style={{
                    width: i === 0 ? 36 : 24,
                    backgroundColor: i === 0 ? ACCENT : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
              <span className="ml-3 font-mono text-[10px] tracking-[0.32em] text-white/40">
                SCROLL TO READ
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-white/8 overflow-hidden">
              <span
                data-progress-bar
                className="block h-full origin-left"
                style={{
                  width: "100%",
                  transform: "scaleX(0)",
                  background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}55)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
