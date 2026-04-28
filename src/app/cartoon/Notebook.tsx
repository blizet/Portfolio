"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "DSA practice",
  "Build on Fate",
  "AI research",
  "T-shirt designs",
  "Content creation",
  "Gym + self care",
];

export default function Notebook() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className="relative mx-auto max-w-[560px] rounded-[14px] border-2 border-[#3f1d12] bg-[#fffaf0] p-6 md:p-8"
        style={{
          boxShadow:
            "8px 10px 0 rgba(63,29,18,0.18), inset 0 0 0 1px rgba(120,53,15,0.18)",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 31px, rgba(146,64,14,0.18) 31px, rgba(146,64,14,0.18) 32px)",
          transform: "rotate(-1.4deg)",
        }}
      >
        {/* spiral binding (left edge holes) */}
        <div className="absolute -left-2 top-0 bottom-0 w-4 flex flex-col justify-around py-3">
          {Array.from({ length: 11 }).map((_, i) => (
            <span
              key={i}
              className="block h-3 w-3 rounded-full bg-[#fffaf0] border-2 border-[#3f1d12]"
              style={{ boxShadow: "inset 0 -2px 0 rgba(120,53,15,0.35)" }}
            />
          ))}
        </div>

        {/* heading */}
        <h3
          className="font-hand text-3xl md:text-4xl text-[#3f1d12] mb-4"
          style={{ transform: "rotate(0.6deg)" }}
        >
          Today&apos;s plan:
        </h3>

        {/* checklist */}
        <ul className="space-y-3 md:space-y-3.5 pl-1">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 font-marker text-[#3f1d12] text-lg md:text-xl"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.3}deg)` }}
            >
              <span
                className="relative inline-flex h-6 w-6 items-center justify-center rounded-[5px] border-2 border-[#3f1d12] bg-[#fff8e7] shrink-0"
                aria-hidden
              >
                {shown && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 tick-pop"
                    style={{ animationDelay: `${0.3 + i * 0.18}s` }}
                  >
                    <path
                      d="M4 13 L10 19 L20 6"
                      fill="none"
                      stroke="#b45309"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className="relative"
                style={{
                  textDecoration: shown ? "line-through" : "none",
                  textDecorationColor: "rgba(180,83,9,0.55)",
                  textDecorationThickness: "1.5px",
                  transition: `text-decoration-color 0.4s ${0.5 + i * 0.18}s`,
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* doodle in the corner */}
        <svg
          className="absolute bottom-3 right-4 opacity-70"
          width="74"
          height="38"
          viewBox="0 0 74 38"
          aria-hidden
        >
          <path
            d="M2 30 Q 16 6, 30 18 Q 44 32, 58 14 Q 64 6, 70 12"
            fill="none"
            stroke="#b45309"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M70 12 L66 6 M70 12 L64 16" stroke="#b45309" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>

        {/* tape on top */}
        <span className="sticker-tape" style={{ top: -14, left: "70%" }} />
      </div>
    </div>
  );
}
