"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";

const ACCENT = "#8b5cf6";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeId) ?? projects[0],
    [activeId],
  );

  // Three columns - each contains every project once, but in a shifted order
  // so the same image never sits at the same vertical level across columns.
  const columnItems = useMemo(() => {
    const total = projects.length;
    return [
      projects,
      [...projects.slice(Math.floor(total / 3)), ...projects.slice(0, Math.floor(total / 3))],
      [...projects.slice(Math.floor((2 * total) / 3)), ...projects.slice(0, Math.floor((2 * total) / 3))],
    ];
  }, []);

  // Uniform rectangular card size - wider than tall.
  const CARD_HEIGHT = "h-[140px] sm:h-[170px] md:h-[200px]";

  return (
    <section
      id="work"
      className="relative overflow-hidden py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_10%_8%,rgba(139,92,246,0.1),transparent_38%),radial-gradient(circle_at_95%_95%,rgba(139,92,246,0.05),transparent_42%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)]"
    >
      <div className="max-w-[1380px] mx-auto">
        <div className="flex items-baseline gap-4 mb-14 md:mb-16">
          <span className="font-mono text-sm text-white/45">003</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">SELECTED WORK</h2>
          <div className="flex-1 h-px bg-white/15" />
          <span className="font-mono text-[10px] tracking-[0.28em] text-white/40 hidden md:inline">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-stretch relative">
          <aside className="lg:col-span-2 relative z-20">
            <div className="lg:sticky lg:top-24">
              <div
                key={activeProject.id}
                className="relative overflow-hidden rounded-3xl flex flex-col px-2 py-4 md:px-4 md:py-6 lg:px-6 lg:py-10 lg:h-[760px] animate-[reveal-up_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 85% 18%, ${ACCENT}26, transparent 55%), radial-gradient(circle at 12% 88%, ${ACCENT}14, transparent 50%)`,
                  }}
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 md:-right-6 -bottom-10 md:-bottom-16 select-none leading-[0.78]"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(11rem, 26vw, 26rem)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "transparent",
                    WebkitTextStroke: `1px ${ACCENT}33`,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {String(
                    projects.findIndex((p) => p.id === activeProject.id) + 1,
                  ).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
                  />
                  <span className="font-mono text-[10px] tracking-[0.32em] text-white/65">
                    ACTIVE / {activeProject.category}
                  </span>
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="font-mono text-[10px] tracking-[0.28em] text-white/45">
                    {activeProject.year}
                  </span>
                </div>

                <div className="relative flex-1 flex flex-col justify-center mt-10 md:mt-14 lg:mt-0">
                  <div
                    className="relative shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden flex items-center justify-center mb-7 md:mb-9"
                    style={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: `${ACCENT}55`,
                      background: "rgba(255,255,255,0.04)",
                      boxShadow: `0 8px 22px -8px ${ACCENT}66`,
                    }}
                  >
                    <Image
                      src={activeProject.logo}
                      alt={`${activeProject.title} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>

                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                    {activeProject.title}
                  </h3>

                  <p
                    className="mt-5 md:mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-md"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {activeProject.description}
                  </p>
                </div>

                <div className="relative mt-10 md:mt-12 flex items-center justify-between gap-4">
                  <Link
                    href={`/archive/${activeProject.slug}`}
                    aria-label={`Open case study for ${activeProject.title}`}
                    className="group/cta inline-flex items-center gap-3 rounded-full border bg-white/[0.04] backdrop-blur-md pl-5 pr-3 py-2.5 transition-all duration-300"
                    style={{ borderColor: `${ACCENT}88` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = ACCENT;
                      e.currentTarget.style.background = `${ACCENT}1f`;
                      e.currentTarget.style.boxShadow = `0 0 28px ${ACCENT}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${ACCENT}88`;
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white">
                      Open Case Study
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center h-7 w-7 rounded-full transition-transform duration-300 group-hover/cta:translate-x-0.5"
                      style={{ background: ACCENT, color: "#0a0c14" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6h7M6 3l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>

                  <span className="font-mono text-[10px] tracking-[0.28em] text-white/35 hidden sm:inline">
                    {String(
                      projects.findIndex((p) => p.id === activeProject.id) + 1,
                    ).padStart(2, "0")}{" "}
                    / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 self-stretch relative z-10 isolate">
            <div className="relative h-[440px] sm:h-[560px] md:h-[760px] overflow-hidden rounded-3xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 z-30 bg-gradient-to-b from-[#0a0c14] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 z-30 bg-gradient-to-t from-[#0a0c14] to-transparent" />

              <div className="absolute -inset-y-20 -inset-x-10 -rotate-[6deg] origin-center grid grid-cols-3 gap-3 md:gap-4">
                {columnItems.map((column, columnIndex) => {
                  const moveDown = columnIndex % 2 === 0;
                  const columnOffset =
                    columnIndex === 1 ? "translate-y-12" : columnIndex === 2 ? "-translate-y-8" : "";

                  return (
                    <div
                      key={columnIndex}
                      className={`relative h-full overflow-y-hidden overflow-x-visible ${columnOffset}`}
                    >
                      <div
                        className={`absolute left-0 right-0 flex flex-col gap-3 md:gap-4 ${
                          moveDown ? "vertical-track-down" : "vertical-track-up"
                        }`}
                        style={{ animationDuration: `${44 + columnIndex * 6}s` }}
                      >
                        {[0, 1].map((copyIdx) => (
                          <div key={copyIdx} className="flex flex-col gap-3 md:gap-4">
                            {column.map((item) => {
                              const isActive = item.id === activeProject.id;
                              const isHovered = item.id === hoveredId;

                              return (
                                <button
                                  type="button"
                                  key={`${copyIdx}-${columnIndex}-${item.id}`}
                                  onMouseEnter={() => setHoveredId(item.id)}
                                  onMouseLeave={() => setHoveredId(null)}
                                  onClick={() => setActiveId(item.id)}
                                  onFocus={() => setActiveId(item.id)}
                                  aria-pressed={isActive}
                                  aria-label={`Show details for ${item.title}`}
                                  className={`group relative ${CARD_HEIGHT} w-full shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50`}
                                  style={{
                                    borderColor: isActive ? `${ACCENT}cc` : "rgba(255,255,255,0.18)",
                                    boxShadow: isActive ? `0 0 32px ${ACCENT}66` : "none",
                                    transform: isActive
                                      ? "scale(1.04) rotate(0deg)"
                                      : isHovered
                                        ? "scale(1.02) rotate(0.4deg)"
                                        : "scale(1)",
                                    filter: isHovered
                                      ? "brightness(1.1)"
                                      : hoveredId
                                        ? "brightness(0.78) saturate(0.85)"
                                        : isActive
                                          ? "brightness(1)"
                                          : "brightness(0.92)",
                                  }}
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 28vw"
                                    className={`object-cover transition-transform duration-300 ${
                                      isActive ? "scale-105" : "scale-100"
                                    }`}
                                  />
                                  <div
                                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                      opacity: isActive ? 0 : isHovered ? 0 : 0.18,
                                      background:
                                        "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
                                    }}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
