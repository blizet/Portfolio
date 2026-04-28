"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { curveNodes } from "./curveData";

const W = 1400;
const H = 460;
const PAD_X = 80;
const TOP = 70;
const BOTTOM = 80;

export default function LearningCurve() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [drawn, setDrawn] = useState(false);

  const points = useMemo(() => {
    const usableX = W - PAD_X * 2;
    const usableY = H - TOP - BOTTOM;
    return curveNodes.map((n, i) => {
      const t = i / Math.max(1, curveNodes.length - 1);
      return {
        ...n,
        x: PAD_X + t * usableX,
        y: TOP + n.y * usableY,
      };
    });
  }, []);

  // Smooth Catmull-Rom-ish path with steeper tension so peaks/dips read like
  // a roller-coaster.
  const path = useMemo(() => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] ?? points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] ?? p2;
      const c1x = p1.x + (p2.x - p0.x) / 4;
      const c1y = p1.y + (p2.y - p0.y) / 4;
      const c2x = p2.x - (p3.x - p1.x) / 4;
      const c2y = p2.y - (p3.y - p1.y) / 4;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d;
  }, [points]);

  useEffect(() => {
    if (!svgRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(svgRef.current);
    return () => obs.disconnect();
  }, []);

  const goal = points[points.length - 1];

  return (
    <div
      className="relative w-full overflow-x-auto"
      // On narrow screens, allow horizontal scroll so labels never collapse.
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ minWidth: 720, width: "100%", overflow: "visible" }}
      >
        <defs>
          <filter id="wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
          <path id="coaster-track" d={path} />
        </defs>

        {/* Faint horizontal guide-rules */}
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line
            key={i}
            x1={PAD_X}
            x2={W - PAD_X}
            y1={TOP + t * (H - TOP - BOTTOM)}
            y2={TOP + t * (H - TOP - BOTTOM)}
            stroke="rgba(120, 53, 15, 0.14)"
            strokeWidth={1}
            strokeDasharray="3 6"
          />
        ))}
        <line
          x1={PAD_X}
          x2={W - PAD_X}
          y1={H - BOTTOM + 4}
          y2={H - BOTTOM + 4}
          stroke="rgba(120, 53, 15, 0.45)"
          strokeWidth={1.4}
        />

        {/* Light support pillars under each station */}
        {points.map((p, i) => (
          <line
            key={`s-${i}`}
            x1={p.x}
            x2={p.x}
            y1={p.y + 10}
            y2={H - BOTTOM + 4}
            stroke="rgba(120, 53, 15, 0.22)"
            strokeWidth="0.9"
            strokeDasharray="2 5"
            opacity={drawn ? 1 : 0}
            style={{ transition: `opacity 0.5s ${0.5 + i * 0.04}s` }}
          />
        ))}

        {/* Shadow rail (warm tint just below) */}
        <use
          href="#coaster-track"
          fill="none"
          stroke="#7c2d12"
          strokeOpacity="0.32"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(0 6)"
        />
        {/* Main rail */}
        <use
          href="#coaster-track"
          fill="none"
          stroke="#3f1d12"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={drawn ? "curve-draw" : undefined}
          style={{ filter: "url(#wobble)" }}
        />

        {/* Coaster cart riding the rail */}
        {drawn && (
          <g>
            <g className="cart-wobble">
              <rect x="-14" y="-12" width="28" height="14" rx="3" fill="#dc2626" stroke="#3f1d12" strokeWidth="1.4" />
              <rect x="-12" y="-10" width="24" height="6" fill="#fde7b8" />
              <circle cx="0" cy="-15" r="3" fill="#3f1d12" />
              <path d="M-3 -10 Q 0 -14, 3 -10" stroke="#3f1d12" strokeWidth="1" fill="none" />
              <circle cx="-8" cy="3" r="3" fill="#1f2937" stroke="#3f1d12" strokeWidth="1.2" />
              <circle cx="8" cy="3" r="3" fill="#1f2937" stroke="#3f1d12" strokeWidth="1.2" />
              <path d="M-3 -16 L-6 -22 M 3 -16 L 6 -22" stroke="#3f1d12" strokeWidth="1.2" strokeLinecap="round" />
            </g>
            <animateMotion
              dur="11s"
              repeatCount="indefinite"
              rotate="auto"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.42 0 0.58 1"
            >
              <mpath href="#coaster-track" />
            </animateMotion>
          </g>
        )}

        {/* Goal flag at the top-right */}
        {goal && (
          <g
            transform={`translate(${goal.x + 26}, ${goal.y - 28})`}
            opacity={drawn ? 1 : 0}
            style={{ transition: "opacity 0.6s 2.4s" }}
          >
            <line x1="0" x2="0" y1="0" y2="-30" stroke="#3f1d12" strokeWidth="1.6" />
            <path d="M0 -30 L18 -26 L14 -22 L18 -18 L0 -22 Z" fill="#dc2626" stroke="#3f1d12" strokeWidth="1.2" />
            <text
              x="22"
              y="-12"
              fill="#92400e"
              fontFamily="var(--font-caveat), cursive"
              fontSize="22"
              transform="rotate(-6, 22, -12)"
            >
              goal :)
            </text>
          </g>
        )}

        {/* STATIONS — outer <g> handles position so the inner pop animation
            (which animates `transform: scale`) doesn't overwrite our translate. */}
        {points.map((p, i) => {
          const isActive = active === i;
          const aboveLabel = i % 2 === 0;
          const labelY = aboveLabel ? -28 : 30;
          const timelineY = aboveLabel ? -14 : 44;
          return (
            <g
              key={p.label}
              transform={`translate(${p.x.toFixed(1)}, ${p.y.toFixed(1)})`}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              style={{ cursor: "pointer", outline: "none" }}
            >
              {/* INNER group does the pop-in animation only — keeps translate intact */}
              <g
                className={drawn ? "curve-pop" : undefined}
                style={{
                  opacity: drawn ? 1 : 0,
                  transformOrigin: "0 0",
                  animationDelay: drawn ? `${0.3 + i * 0.16}s` : undefined,
                }}
              >
                {isActive && <circle r="14" fill="#fcd34d" opacity="0.5" />}
                <circle
                  r={isActive ? 10 : 7.5}
                  fill="#fff8e7"
                  stroke="#3f1d12"
                  strokeWidth={2.2}
                />
                <circle r={isActive ? 5 : 3.6} fill="#dc2626" />
                <text
                  x={0}
                  y={labelY}
                  textAnchor="middle"
                  fontFamily="var(--font-patrick), cursive"
                  fontSize="13"
                  fill="#3f1d12"
                  style={{ pointerEvents: "none" }}
                >
                  {p.label}
                </text>
                <text
                  x={0}
                  y={timelineY}
                  textAnchor="middle"
                  fontFamily="var(--font-space-mono), monospace"
                  fontSize="9.5"
                  fill="#7c2d12"
                  opacity="0.7"
                  style={{ pointerEvents: "none" }}
                >
                  {p.timeline}
                </text>
              </g>
            </g>
          );
        })}

        {/* Single floating tooltip rendered outside the loop so it never tiles. */}
        {drawn && active != null && points[active]?.caption && (
          <g
            transform={`translate(${points[active].x.toFixed(1)}, ${points[active].y.toFixed(1)})`}
          >
            <foreignObject x={-130} y={active % 2 === 0 ? 22 : -76} width={260} height={70}>
              <div
                style={{
                  fontFamily: "var(--font-caveat), cursive",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "#3f1d12",
                  background: "#fff8e7",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(120,53,15,0.28)",
                  boxShadow: "0 10px 22px -10px rgba(120,53,15,0.55)",
                  lineHeight: 1.25,
                }}
              >
                {points[active].caption}
              </div>
            </foreignObject>
          </g>
        )}

        {/* "wheee!" doodle parked near the deepest dip — won't overlap labels */}
        {drawn && (() => {
          // Find the lowest peak (smallest y in viewBox) for the doodle anchor.
          let topIdx = 0;
          for (let i = 1; i < points.length; i++) {
            if (points[i].y < points[topIdx].y) topIdx = i;
          }
          const anchor = points[topIdx];
          return (
            <g
              transform={`translate(${anchor.x - 80}, ${anchor.y - 36})`}
              style={{
                opacity: 0,
                animation:
                  "tick-pop 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) 1.8s forwards",
              }}
            >
              <text
                x="0"
                y="0"
                textAnchor="middle"
                fontFamily="var(--font-caveat), cursive"
                fontSize="20"
                fill="#b45309"
                transform="rotate(-8)"
              >
                wheee!
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
