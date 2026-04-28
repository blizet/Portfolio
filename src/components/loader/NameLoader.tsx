"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { gsap } from "gsap";

type NameLoaderProps = {
  imagesReady: boolean;
  onAnimationDone: () => void;
};

const LETTERS: { char: string }[] = [
  { char: "A" },
  { char: "n" },
  { char: "j" },
  { char: "a" },
  { char: "l" },
  { char: "i" },
  { char: " " },
  { char: "J" },
  { char: "h" },
  { char: "a" },
];

const ACCENT_PRIMARY = "#a78bfa";
const ACCENT_SECONDARY = "#22d3ee";

export default function NameLoader({ imagesReady, onAnimationDone }: NameLoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lettersInnerRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lineRef = useRef<HTMLSpanElement>(null);
  const lineLabelRef = useRef<HTMLSpanElement>(null);
  const monogramRef = useRef<HTMLSpanElement>(null);
  const sessionRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const counterLabelRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const notifiedRef = useRef(false);
  void imagesReady;

  useEffect(() => {
    if (!rootRef.current || !headingRef.current) return;

    const root = rootRef.current;
    const heading = headingRef.current;
    const line = lineRef.current;
    const lineLabel = lineLabelRef.current;
    const monogram = monogramRef.current;
    const session = sessionRef.current;
    const subtitle = subtitleRef.current;
    const counterEl = counterRef.current;
    const counterLabel = counterLabelRef.current;
    const progress = progressRef.current;
    const progressTrack = progressTrackRef.current;
    const underline = underlineRef.current;
    const inners = lettersInnerRef.current.filter(
      (el): el is HTMLSpanElement => el !== null,
    );

    if (
      !line ||
      !lineLabel ||
      !monogram ||
      !session ||
      !subtitle ||
      !counterEl ||
      !counterLabel ||
      !progress ||
      !progressTrack ||
      !underline
    )
      return;

    gsap.set(line, { scaleX: 0, transformOrigin: "left center", opacity: 0 });
    gsap.set(lineLabel, { opacity: 0, x: -8 });
    gsap.set(monogram, { opacity: 0, y: 6 });
    gsap.set(session, { opacity: 0, y: 6 });
    gsap.set(subtitle, { opacity: 0, y: 10 });
    gsap.set(counterEl, { opacity: 0 });
    gsap.set(counterLabel, { opacity: 0 });
    gsap.set(progressTrack, { opacity: 0 });
    gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(underline, { scaleX: 0, transformOrigin: "left center", opacity: 0 });
    gsap.set(inners, { yPercent: 110, opacity: 0 });

    counterEl.textContent = "000";

    const counterObj = { value: 0 };

    const fadeOut = () => {
      const tlOut = gsap.timeline({
        onComplete: () => {
          if (!notifiedRef.current) {
            notifiedRef.current = true;
            onAnimationDone();
          }
        },
      });

      tlOut.to(
        inners,
        {
          yPercent: -28,
          opacity: 0,
          duration: 0.55,
          ease: "expo.in",
          stagger: { each: 0.025, from: "end" },
        },
        0,
      );

      tlOut.to(
        underline,
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.45,
          ease: "expo.in",
        },
        0.05,
      );

      tlOut.to(
        [
          monogram,
          session,
          subtitle,
          line,
          lineLabel,
          counterEl,
          counterLabel,
          progressTrack,
        ],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        0.15,
      );

      tlOut.to(
        root,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.15",
      );
    };

    const tl = gsap.timeline({ onComplete: fadeOut });

    tl.to(monogram, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0);
    tl.to(session, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.05);

    tl.to(
      line,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.75,
        ease: "expo.out",
      },
      0.2,
    );
    tl.to(
      lineLabel,
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: "power2.out",
      },
      0.55,
    );

    tl.to(
      inners,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.95,
        ease: "expo.out",
        stagger: { each: 0.05, from: "start" },
      },
      0.4,
    );

    tl.to(
      underline,
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        ease: "expo.out",
      },
      "-=0.55",
    );

    tl.to(
      subtitle,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      },
      "-=0.5",
    );

    tl.to(progressTrack, { opacity: 1, duration: 0.3 }, "<");
    tl.to(counterLabel, { opacity: 1, duration: 0.3 }, "<");
    tl.to(counterEl, { opacity: 1, duration: 0.3 }, "<");

    tl.to(
      progress,
      {
        scaleX: 1,
        duration: 1.3,
        ease: "power2.out",
      },
      "-=0.2",
    );

    tl.to(
      counterObj,
      {
        value: 100,
        duration: 1.3,
        ease: "power2.out",
        onUpdate: () => {
          counterEl.textContent = String(Math.floor(counterObj.value)).padStart(3, "0");
        },
      },
      "<",
    );

    tl.to({}, { duration: 0.4 });

    return () => {
      tl.kill();
      gsap.killTweensOf([
        root,
        heading,
        line,
        lineLabel,
        monogram,
        session,
        subtitle,
        counterEl,
        counterLabel,
        progress,
        progressTrack,
        underline,
        ...inners,
      ]);
    };
  }, [onAnimationDone]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#070811]"
      aria-label="Loading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(167,139,250,0.14), transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.08), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <span
        ref={monogramRef}
        className="absolute top-7 left-7 md:top-9 md:left-10 font-mono text-[10px] md:text-[11px] tracking-[0.42em] text-white/55 flex items-center gap-3"
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: ACCENT_PRIMARY, boxShadow: `0 0 10px ${ACCENT_PRIMARY}` }}
        />
        ANJALI JHA &mdash; PORTFOLIO &rsquo;26
      </span>

      <span
        ref={sessionRef}
        className="absolute top-7 right-7 md:top-9 md:right-10 font-mono text-[10px] md:text-[11px] tracking-[0.42em] text-white/35"
      >
        SESSION 001 / IN MOTION
      </span>

      <div className="relative flex flex-col items-center px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span
            ref={lineRef}
            className="block h-px w-[80px] md:w-[120px]"
            style={{
              background: `linear-gradient(to right, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
            }}
          />
          <span
            ref={lineLabelRef}
            className="font-mono text-[10px] md:text-[11px] tracking-[0.45em] text-white/50"
          >
            INTRO &middot; 01
          </span>
        </div>

        <h1
          ref={headingRef}
          className="text-white whitespace-nowrap select-none relative"
          style={{
            fontSize: "clamp(56px, 13vw, 200px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontWeight: 800,
          }}
        >
          {LETTERS.map((letter, i) => {
            const isSpace = letter.char === " ";
            const outerStyle: CSSProperties = {
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              ...(isSpace ? { width: "0.32em" } : {}),
            };
            const innerStyle: CSSProperties = {
              display: "inline-block",
              willChange: "transform, opacity",
            };
            return (
              <span key={i} style={outerStyle}>
                <span
                  ref={(el: HTMLSpanElement | null) => {
                    lettersInnerRef.current[i] = el;
                  }}
                  style={innerStyle}
                >
                  {isSpace ? "\u00A0" : letter.char}
                </span>
              </span>
            );
          })}
        </h1>

        <div className="relative w-full mt-5 md:mt-7 flex justify-center">
          <span
            ref={underlineRef}
            className="block h-px w-[55%] max-w-[640px]"
            style={{
              background: `linear-gradient(to right, transparent 0%, ${ACCENT_PRIMARY} 30%, ${ACCENT_SECONDARY} 70%, transparent 100%)`,
            }}
          />
        </div>

        <span
          ref={subtitleRef}
          className="mt-5 md:mt-7 font-mono text-[10px] md:text-[11px] tracking-[0.45em] text-white/55"
        >
          SOFTWARE &middot; FULL STACK &middot; CREATIVE
        </span>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-[260px] md:w-[320px]">
        <div
          ref={progressTrackRef}
          className="relative h-px w-full bg-white/10 overflow-hidden"
        >
          <span
            ref={progressRef}
            className="absolute inset-0 block"
            style={{
              background: `linear-gradient(to right, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
            }}
          />
        </div>
        <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-[0.42em] text-white/45">
          <span ref={counterRef}>000</span>
          <span ref={counterLabelRef}>LOADING PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}
