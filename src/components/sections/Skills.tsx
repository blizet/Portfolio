"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ACCENT = "#8b5cf6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Skill = { name: string; level: number };
type Group = { title: string; tagline: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Languages",
    tagline: "Core fluency across the stack",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Solidity", level: 78 },
      { name: "C++", level: 72 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    tagline: "Interfaces, motion, accessibility",
    skills: [
      { name: "React", level: 94 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "GSAP", level: 80 },
      { name: "Radix UI", level: 78 },
    ],
  },
  {
    title: "Backend",
    tagline: "Scalable APIs and services",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "DevOps",
    tagline: "Build, ship, observe",
    skills: [
      { name: "Docker", level: 80 },
      { name: "GitHub Actions", level: 82 },
      { name: "GCP", level: 76 },
      { name: "Linux", level: 78 },
    ],
  },
  {
    title: "Data",
    tagline: "Persistence and storage",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 80 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools",
    tagline: "Day-to-day craft",
    skills: [
      { name: "Git", level: 90 },
      { name: "Pytest", level: 78 },
      { name: "Zod", level: 76 },
      { name: "Ethers.js", level: 84 },
    ],
  },
];

const NODE_RADIUS_PCT = 40;
const LINE_END = 80;

type OrbitNode = Skill & { angle: number; ux: number; uy: number };

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ val: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [averageDisplay, setAverageDisplay] = useState(0);

  const activeGroup = groups[activeIndex];
  const avg = Math.round(
    activeGroup.skills.reduce((sum, s) => sum + s.level, 0) /
      activeGroup.skills.length,
  );

  const nodes: OrbitNode[] = activeGroup.skills.map((skill, i) => {
    const angle = (i / activeGroup.skills.length) * 2 * Math.PI - Math.PI / 2;
    return {
      ...skill,
      angle,
      ux: Math.cos(angle),
      uy: Math.sin(angle),
    };
  });

  useEffect(() => {
    const tween = gsap.to(counterRef.current, {
      val: avg,
      duration: 1.1,
      ease: "power3.out",
      onUpdate: () => setAverageDisplay(Math.round(counterRef.current.val)),
    });
    return () => {
      tween.kill();
    };
  }, [activeIndex, avg]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-skills-reveal]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!orbitRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-orbit-line]", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "0px 0px",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.05,
      });
      gsap.from("[data-orbit-node]", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.06,
        delay: 0.1,
      });
      gsap.from("[data-orbit-label]", {
        opacity: 0,
        y: 8,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from("[data-orbit-poly]", {
        opacity: 0,
        scale: 0.55,
        transformOrigin: "center",
        duration: 0.9,
        ease: "back.out(1.5)",
      });
      gsap.from("[data-hub]", {
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        ease: "back.out(1.6)",
      });
    }, orbitRef);
    return () => ctx.revert();
  }, [activeIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTilt({ x: -dy * 14, y: dx * 14 });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.06),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(139,92,246,0.08),transparent_45%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-baseline gap-4 mb-16 md:mb-20"
          data-skills-reveal
        >
          <span className="font-mono text-sm text-white/45">006</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">
            CAPABILITIES
          </h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-center">
          <aside
            className="lg:sticky lg:top-24 space-y-2.5"
            data-skills-reveal
          >
            {groups.map((group, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="w-full text-left rounded-xl border px-4 py-3.5 transition-all duration-300"
                  style={{
                    borderColor: isActive
                      ? `${ACCENT}66`
                      : "rgba(255,255,255,0.1)",
                    background: isActive ? `${ACCENT}12` : "rgba(255,255,255,0.02)",
                    boxShadow: isActive ? `0 14px 40px ${ACCENT}1f` : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-[10px] tracking-[0.22em]"
                      style={{
                        color: isActive ? "#ede9fe" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm md:text-base font-medium"
                      style={{
                        color: isActive ? "#fff" : "rgba(255,255,255,0.78)",
                      }}
                    >
                      {group.title}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-white/40">
                      {group.skills.length}
                    </span>
                  </div>
                  {isActive && (
                    <p className="mt-1.5 text-xs text-white/55 leading-relaxed pl-7">
                      {group.tagline}
                    </p>
                  )}
                </button>
              );
            })}
          </aside>

          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="relative aspect-square w-full max-w-[600px] mx-auto"
            style={{ perspective: "1400px" }}
            data-skills-reveal
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white/30 animate-pulse"
                  style={{
                    left: `${(i * 37) % 100}%`,
                    top: `${(i * 53) % 100}%`,
                    animationDelay: `${(i % 7) * 0.35}s`,
                    animationDuration: `${2 + (i % 5)}s`,
                  }}
                />
              ))}
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                animation: "orbit-spin 60s linear infinite",
              }}
            >
              <svg
                viewBox="-100 -100 200 200"
                className="absolute inset-0 w-full h-full overflow-visible"
              >
                <circle
                  cx="0"
                  cy="0"
                  r="80"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.4"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="60"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.3"
                  strokeDasharray="1 2"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.3"
                  strokeDasharray="1 2"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.3"
                  strokeDasharray="1 2"
                />
                {Array.from({ length: 12 }).map((_, i) => {
                  const a = (i / 12) * 2 * Math.PI;
                  return (
                    <line
                      key={i}
                      x1={Math.cos(a) * 82}
                      y1={Math.sin(a) * 82}
                      x2={Math.cos(a) * 86}
                      y2={Math.sin(a) * 86}
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="0.4"
                    />
                  );
                })}
                {[
                  { r: 80, label: "100" },
                  { r: 60, label: "75" },
                  { r: 40, label: "50" },
                  { r: 20, label: "25" },
                ].map(({ r, label }) => (
                  <text
                    key={r}
                    x={r + 2}
                    y="-1"
                    fill="rgba(255,255,255,0.22)"
                    fontSize="3.6"
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                    letterSpacing="0.18em"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>

            <div
              ref={orbitRef}
              className="relative w-full h-full transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <svg
                viewBox="-100 -100 200 200"
                className="absolute inset-0 w-full h-full overflow-visible"
              >
                <defs>
                  <radialGradient id="capHubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={ACCENT} stopOpacity="0.55" />
                    <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="0" cy="0" r="38" fill="url(#capHubGlow)" />

                <polygon
                  data-orbit-poly
                  points={nodes
                    .map(
                      (n) =>
                        `${n.ux * LINE_END * (n.level / 100)},${n.uy * LINE_END * (n.level / 100)}`,
                    )
                    .join(" ")}
                  fill={`${ACCENT}10`}
                  stroke={`${ACCENT}50`}
                  strokeWidth="0.55"
                />

                {nodes.map((node, i) => {
                  const isHov = hovered === i;
                  const r = LINE_END * (node.level / 100);
                  const x2 = node.ux * r;
                  const y2 = node.uy * r;
                  const intensity = 0.22 + (node.level / 100) * 0.45;
                  return (
                    <line
                      key={`line-${activeIndex}-${i}`}
                      data-orbit-line
                      x1="0"
                      y1="0"
                      x2={x2}
                      y2={y2}
                      stroke={ACCENT}
                      strokeOpacity={isHov ? 0.95 : intensity}
                      strokeWidth={isHov ? 1.1 : 0.55}
                      style={{
                        transition:
                          "stroke-opacity 220ms ease-out, stroke-width 220ms ease-out",
                      }}
                    />
                  );
                })}
                {nodes.map((node, i) => {
                  const r = LINE_END * (node.level / 100);
                  return (
                    <line
                      key={`guide-${activeIndex}-${i}`}
                      x1={node.ux * r}
                      y1={node.uy * r}
                      x2={node.ux * 92}
                      y2={node.uy * 92}
                      stroke="rgba(255,255,255,0.09)"
                      strokeWidth="0.35"
                      strokeDasharray="0.6 1.4"
                    />
                  );
                })}
              </svg>

              <div
                data-hub
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20"
              >
                <p className="font-mono text-[10px] tracking-[0.32em] text-white/45 uppercase">
                  {activeGroup.title}
                </p>
                <p className="text-4xl md:text-5xl font-semibold mt-2 text-white tabular-nums leading-none">
                  {averageDisplay}
                  <span className="text-base md:text-lg text-white/40 ml-1">
                    %
                  </span>
                </p>
                <p className="mt-2 text-[11px] md:text-xs text-white/55 leading-snug max-w-[200px] mx-auto">
                  {activeGroup.tagline}
                </p>
              </div>

              {nodes.map((node, i) => {
                const isHov = hovered === i;
                const dotSize = 12 + (node.level / 100) * 14;
                const orbRadius = NODE_RADIUS_PCT * (node.level / 100);
                const labelRadius = NODE_RADIUS_PCT + 6;
                return (
                  <div
                    key={`node-${activeIndex}-${node.name}`}
                    className="contents"
                  >
                    <div
                      className="absolute z-10"
                      style={{
                        left: `${50 + node.ux * orbRadius}%`,
                        top: `${50 + node.uy * orbRadius}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        data-orbit-node
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative cursor-pointer"
                        style={{ width: dotSize, height: dotSize }}
                      >
                        <span
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background: ACCENT,
                            opacity: 0.35,
                            transform: "scale(2.4)",
                            filter: "blur(10px)",
                          }}
                        />
                        <span
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background: ACCENT,
                            opacity: 0.5,
                            animation: "node-ping 2.6s ease-out infinite",
                            animationDelay: `${i * 0.18}s`,
                          }}
                        />
                        <span
                          className="relative block rounded-full transition-all duration-300"
                          style={{
                            width: "100%",
                            height: "100%",
                            background: `radial-gradient(circle at 30% 30%, #ffffff, ${ACCENT} 45%, ${ACCENT})`,
                            boxShadow: isHov
                              ? `0 0 26px ${ACCENT}, 0 0 60px ${ACCENT}AA`
                              : `0 0 14px ${ACCENT}99`,
                            transform: isHov ? "scale(1.35)" : "scale(1)",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      data-orbit-label
                      className="absolute z-30 pointer-events-auto"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        left: `${50 + node.ux * labelRadius}%`,
                        top: `${50 + node.uy * labelRadius}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="whitespace-nowrap text-center transition-all duration-300">
                        <p
                          className="font-semibold text-sm md:text-base tracking-tight transition-colors duration-300"
                          style={{
                            color: isHov ? "#fff" : "rgba(255,255,255,0.85)",
                            textShadow: isHov
                              ? `0 0 18px ${ACCENT}88`
                              : "0 1px 8px rgba(0,0,0,0.6)",
                          }}
                        >
                          {node.name}
                        </p>
                        <p
                          className="font-mono text-[10px] tracking-[0.22em] mt-0.5 transition-colors duration-300"
                          style={{
                            color: isHov ? ACCENT : "rgba(255,255,255,0.5)",
                          }}
                        >
                          {node.level}%
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p
          className="mt-12 lg:mt-16 text-center font-mono text-[10px] tracking-[0.32em] text-white/35"
          data-skills-reveal
        >
          MOVE THE POINTER &nbsp;/&nbsp; TILT THE FIELD &nbsp;/&nbsp; HOVER A
          NODE
        </p>
      </div>
    </section>
  );
}
