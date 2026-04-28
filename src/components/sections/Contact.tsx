"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const ACCENT = "#8b5cf6";

export default function Contact() {
  const containerRef = useScrollReveal<HTMLElement>({ y: 24, stagger: 0.06 });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.08),transparent_45%),radial-gradient(circle_at_15%_90%,rgba(139,92,246,0.05),transparent_45%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-baseline gap-4 mb-20 md:mb-24" data-reveal>
          <span className="font-mono text-sm text-white/45">009</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">GET IN TOUCH</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="text-center mb-24 md:mb-32 px-4" data-reveal>
          <p className="font-mono text-xs tracking-[0.32em] text-[#c4b5fd] mb-6">
            / AVAILABLE FOR WORK
          </p>
          <p className="text-white/65 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
          <a
            href="mailto:anjalijha2k3@gmail.com"
            className="group relative inline-block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white px-4 py-2"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1 inline-block">
              SAY HELLO
            </span>
            <span
              className="pointer-events-none absolute inset-x-6 -bottom-1 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: ACCENT }}
            />
          </a>
          <p className="mt-8 font-mono text-xs text-white/45">anjalijha2k3@gmail.com</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-16 border-t border-white/10" data-reveal>
          <div>
            <p className="font-mono text-xs text-white/45 mb-3 tracking-[0.22em]">LOCATION</p>
            <p className="text-lg md:text-xl text-white/90">Mumbai, India</p>
          </div>
          <div>
            <p className="font-mono text-xs text-white/45 mb-3 tracking-[0.22em]">AVAILABILITY</p>
            <p className="text-lg md:text-xl text-white/90">Available for new projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
