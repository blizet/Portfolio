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
  const CARD_HEIGHT = "h-[170px] md:h-[200px]";

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
          <aside className="lg:col-span-2 lg:sticky lg:top-20 relative z-20">
            <p
              className="font-mono text-xs tracking-[0.2em] mb-4"
              style={{ color: ACCENT }}
            >
              ACTIVE PROJECT / {activeProject.category}
            </p>

            <div
              key={activeProject.id}
              className="animate-[reveal-up_420ms_cubic-bezier(0.16,1,0.3,1)_both]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="relative shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl border border-white/12 bg-white/[0.04] overflow-hidden"
                  style={{ boxShadow: `0 0 0 1px ${ACCENT}18, 0 6px 18px -8px ${ACCENT}55` }}
                >
                  <Image
                    src={activeProject.logo}
                    alt={`${activeProject.title} logo`}
                    fill
                    sizes="56px"
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {activeProject.title}
                </h3>
              </div>

              <p className="mt-3 text-lg md:text-xl text-white/80">{activeProject.role}</p>
              <p className="mt-2 text-sm font-mono text-white/55 tracking-wide">
                {activeProject.timeline} &middot; {activeProject.client}
              </p>

              <p className="mt-6 text-white/72 leading-relaxed max-w-[44ch]">
                {activeProject.context}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {activeProject.highlights.slice(0, 4).map((h, idx) => (
                  <div
                    key={`${h.label}-${idx}`}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 opacity-0 animate-[reveal-up_520ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <p
                      className="text-xl md:text-2xl font-bold tracking-tight"
                      style={{ color: ACCENT }}
                    >
                      {h.value}
                    </p>
                    <p className="mt-1 text-xs text-white/60 leading-tight">{h.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {activeProject.tech.map((tech, index) => (
                  <span
                    key={tech}
                    className="text-xs font-mono rounded-full border px-3 py-1.5 opacity-0 animate-[reveal-up_480ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    style={{
                      animationDelay: `${280 + index * 50}ms`,
                      color: ACCENT,
                      borderColor: `${ACCENT}77`,
                      backgroundColor: `${ACCENT}14`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/archive/${activeProject.slug}`}
                className="inline-flex mt-8 items-center gap-2 text-sm font-mono tracking-wide text-white/75 hover:text-white transition-colors"
              >
                Open case study
                <span aria-hidden>-&gt;</span>
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-3 self-stretch relative z-10 isolate">
            <div className="relative h-[560px] md:h-[760px] overflow-hidden rounded-3xl">
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
                                    filter:
                                      hoveredId && !isHovered ? "brightness(0.78) saturate(0.85)" : "none",
                                  }}
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 28vw"
                                    className={`object-cover transition-all duration-300 ${
                                      isActive ? "scale-105" : "scale-100"
                                    } ${isHovered ? "brightness-110" : "brightness-75"}`}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                                  <div className="absolute left-3 right-3 bottom-3">
                                    <p className="text-[11px] font-mono tracking-wide text-white/70">
                                      {item.category}
                                    </p>
                                    <p className="text-sm md:text-base font-semibold text-white">
                                      {item.title}
                                    </p>
                                  </div>
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
