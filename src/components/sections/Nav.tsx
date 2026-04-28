"use client";

import { useEffect, useState } from "react";

const ACCENT = "#8b5cf6";

const sectionLinks = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "contact", label: "CONTACT" },
];

const trackedSections: { id: string; label: string; parent: string }[] = [
  { id: "hero", label: "HOME", parent: "hero" },
  { id: "about", label: "ABOUT", parent: "about" },
  { id: "work", label: "SELECTED WORK", parent: "work" },
  { id: "experience", label: "EXPERIENCE", parent: "work" },
  { id: "skills", label: "CAPABILITIES", parent: "work" },
  { id: "awards", label: "RECOGNITION", parent: "work" },
  { id: "creative", label: "CREATIVE PURSUITS", parent: "work" },
  { id: "faq", label: "FREQUENTLY ASKED", parent: "contact" },
  { id: "contact", label: "GET IN TOUCH", parent: "contact" },
];

export default function Nav() {
  const [time, setTime] = useState("");
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = trackedSections[0].id;
      trackedSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeTracked =
    trackedSections.find((s) => s.id === activeId) ?? trackedSections[0];
  const activeParent = activeTracked.parent;
  const activeIndex = sectionLinks.findIndex((s) => s.id === activeParent);
  const safeActiveIndex = activeIndex < 0 ? 0 : activeIndex;

  const indexLabel = String(
    trackedSections.findIndex((s) => s.id === activeId) + 1,
  ).padStart(2, "0");

  return (
    <nav className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute top-4 left-4 md:top-6 md:left-6 pointer-events-auto hidden sm:block">
        <div className="rounded-full border border-white/15 bg-black/45 backdrop-blur-md px-3.5 py-2 flex items-center gap-2.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
          />
          <span className="font-mono text-[10px] tracking-[0.32em] text-white/45">
            {indexLabel}
          </span>
          <span
            key={activeTracked.id}
            className="font-mono text-[11px] tracking-[0.28em] text-white nav-active-label"
          >
            {activeTracked.label}
          </span>
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="rounded-full border border-white/20 bg-black/45 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs text-white/90 tracking-wide flex items-center gap-2 sm:gap-2.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
          />
          <span className="tracking-[0.2em] text-white/55">MUMBAI</span>
          <span className="h-3 w-px bg-white/25" />
          <span>{time} IST</span>
        </div>
      </div>

      <aside className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-4 pointer-events-auto">
        <div className="h-[52vh] w-px bg-white/30 relative">
          <div
            className="absolute top-0 left-0 w-px transition-all duration-500"
            style={{
              backgroundColor: ACCENT,
              height: `${(safeActiveIndex / (sectionLinks.length - 1 || 1)) * 100}%`,
            }}
          />
          {sectionLinks.map((section, index) => {
            const isActive = section.id === activeParent;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group absolute -left-[5px] w-[11px] h-[11px] rounded-full border transition-all duration-300"
                style={{
                  top: `${(index / (sectionLinks.length - 1 || 1)) * 100}%`,
                  transform: "translateY(-50%)",
                  backgroundColor: isActive ? ACCENT : "rgba(255,255,255,0.3)",
                  borderColor: isActive ? ACCENT : "rgba(255,255,255,0.6)",
                  boxShadow: isActive ? `0 0 14px ${ACCENT}` : "none",
                }}
              >
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 rounded border border-white/25 bg-black/70 px-2 py-1 font-mono text-[10px] tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section.label}
                </span>
              </a>
            );
          })}
        </div>
      </aside>

      <aside className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center h-[50vh] justify-between pointer-events-auto">
        <div className="w-px flex-1 bg-white/30" />
        <div className="flex flex-col items-center gap-4 py-4">
          <a href="https://github.com/blizet" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3.66 18c-1.09-.74.09-.72.09-.72a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.66-.3-5.47-1.34-5.47-5.94a4.66 4.66 0 0 1 1.24-3.24 4.33 4.33 0 0 1 .12-3.2s1.01-.33 3.3 1.24a11.4 11.4 0 0 1 6 0c2.28-1.57 3.29-1.24 3.29-1.24a4.33 4.33 0 0 1 .12 3.2 4.66 4.66 0 0 1 1.24 3.24c0 4.61-2.82 5.63-5.5 5.93a2.86 2.86 0 0 1 .81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/anjali-jha-49734924a" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.83v1.64h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21h-4V9z"/></svg>
          </a>
          <a href="mailto:anjalijha2k3@gmail.com" className="text-white/80 hover:text-white transition-colors" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
          </a>
        </div>
        <div className="w-px flex-1 bg-white/30" />
      </aside>
    </nav>
  );
}
