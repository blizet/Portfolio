"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const ACCENT = "#8b5cf6";

export default function Contact() {
  const containerRef = useScrollReveal<HTMLElement>({ y: 24, stagger: 0.06 });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.08),transparent_45%),radial-gradient(circle_at_15%_90%,rgba(139,92,246,0.05),transparent_45%)] text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-baseline gap-4 mb-16 md:mb-20" data-reveal>
          <span className="font-mono text-sm text-white/45">009</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">GET IN TOUCH</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="text-center px-2" data-reveal>
          <p className="text-white/65 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have a project in mind, or hiring? Let&apos;s talk.
          </p>
          <a
            href="mailto:anjalijha2k3@gmail.com"
            className="group relative inline-block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white px-2 py-1"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1 inline-block">
              SAY HELLO
            </span>
            <span
              className="pointer-events-none absolute inset-x-4 -bottom-1 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: ACCENT }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
