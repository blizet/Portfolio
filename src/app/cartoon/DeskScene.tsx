"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { basePath } from "@/lib/basePath";
import { Mithila } from "./Cliparts";

/**
 * DeskScene — assembled-cutout collage.
 *
 * Each piece is a transparent PNG (cutouts of the items in the reference
 * desk illustration, dropped into `public/cartoon/desk/`). On scroll into
 * view the pieces fly in from scattered offsets and lock into their
 * arranged positions, recreating the desk picture. Hovering / focusing /
 * tapping any piece reveals a paper-styled tooltip with a one-liner.
 *
 * `tagline` and `mithila portrait` are not provided as PNGs — they're
 * rendered as HTML / SVG stand-ins.
 */

type Piece = {
  id: string;
  /** PNG filename (relative to /cartoon/desk/) — null if rendered via `custom` */
  src: string | null;
  custom?: React.ReactNode;
  /** short caps tag for the tooltip footer */
  tag: string;
  title: string;
  blurb: string;
  /** position of tile center on stage, % */
  x: number;
  y: number;
  /** tile width, % of stage */
  w: number;
  /** final rotation, deg */
  rotate: number;
  /** stacking order on overlap */
  z: number;
  /** assembly order — lower assembles first */
  order: number;
  /** non-clickable decoration (no tooltip) */
  decor?: boolean;
};

const SRC = (file: string) => `${basePath}/cartoon/desk/${file}`;

const pieces: Piece[] = [
  {
    id: "engineer",
    src: SRC("engineer_sticky_note.png"),
    tag: "philosophy",
    title: "engineer + artist",
    blurb:
      "engineer by degree, problem-solver by nature. logic-first, design-led — both, always.",
    x: 11,
    y: 8,
    w: 22,
    rotate: -3,
    z: 2,
    order: 0,
  },
  {
    id: "artist",
    src: SRC("artist_sticky_note.png"),
    tag: "artist heart",
    title: "artist by heart",
    blurb:
      "designing culture. wearing stories. typography as the protagonist. all that good stuff.",
    x: 80,
    y: 21,
    w: 22,
    rotate: 3,
    z: 2,
    order: 1,
  },
  {
    id: "fate-sticky",
    src: SRC("fate_sticky_note.png"),
    tag: "why blockchain",
    title: "trustless tomorrow",
    blurb:
      "blockchain is just transparency by design. building trustless solutions for a better tomorrow — that's the why.",
    x: 11,
    y: 60,
    w: 22,
    rotate: -3,
    z: 2,
    order: 2,
  },
  {
    id: "mithila-sticky",
    src: SRC("mithila_sticky_note.png"),
    tag: "tradition × trends",
    title: "mithila prints",
    blurb:
      "the motifs come from home; the silhouettes come from the street. tradition meets trends.",
    x: 73,
    y: 53,
    w: 20,
    rotate: 3,
    z: 4,
    order: 3,
  },
  {
    id: "blockchain",
    src: SRC("blockchain_sticky_note.png"),
    tag: "north star",
    title: "blockchain · ai · innovation · impact",
    blurb:
      "the four pillars that decide what I'll spend my week on. anything else is noise.",
    x: 28,
    y: 96,
    w: 18,
    rotate: -2,
    z: 3,
    order: 4,
  },
  {
    id: "plant",
    src: SRC("plant.png"),
    tag: "desk garden",
    title: "plants of focus",
    blurb:
      "ZZ + pothos + money plant + snake plant. they survive my forgetfulness (mostly).",
    x: 86,
    y: 8,
    w: 22,
    rotate: 4,
    z: 2,
    order: 5,
  },
  {
    id: "ai",
    src: SRC("ai_chip.png"),
    tag: "AI tinkering",
    title: "ai experiments",
    blurb:
      "voice bots, RAG pipelines, tiny models. EOSGlobe with Azure TTS + Mistral was where I fell in love.",
    x: 12,
    y: 27,
    w: 22,
    rotate: -2,
    z: 3,
    order: 6,
  },
  {
    id: "quote",
    src: SRC("building_the_future_dialogue.png"),
    tag: "mantra",
    title: "the mantra",
    blurb:
      "building the future, designing the present, inspiring always. on my screensaver, my notebook, my t-shirts.",
    x: 56,
    y: 16,
    w: 28,
    rotate: -2,
    z: 3,
    order: 7,
  },
  {
    id: "mithila-portrait",
    src: null,
    // Stand-in: madhubani-style face SVG, since no PNG provided.
    custom: <Mithila size={400} style={{ width: "100%", height: "100%" }} />,
    tag: "from home",
    title: "madhubani roots",
    blurb:
      "growing up around Madhubani art shows up everywhere — in patterns, palettes, in how I compose UI.",
    x: 87,
    y: 64,
    w: 20,
    rotate: 3,
    z: 3,
    order: 8,
  },
  {
    id: "laptop",
    src: SRC("laptop.png"),
    tag: "GSoC '25",
    title: "Fate Protocol",
    blurb:
      "decentralized perpetual prediction market. dual-vault architecture, multi-oracle support, lots of solidity.",
    x: 13,
    y: 43,
    w: 26,
    rotate: -1,
    z: 3,
    order: 9,
  },
  {
    id: "tshirts",
    src: SRC("mithila_t-shirt.png"),
    tag: "mithila prints",
    title: "designing tradition",
    blurb:
      "I design Mithila-inspired tees in my downtime. tradition meets streetwear meets late-night ideas.",
    x: 75,
    y: 36,
    w: 30,
    rotate: -3,
    z: 3,
    order: 10,
  },
  {
    id: "books",
    src: SRC("books.png"),
    tag: "always reading",
    title: "always reading",
    blurb:
      "data structures, blockchain basics, ML, system design. usually 3 books in rotation.",
    x: 13,
    y: 76,
    w: 26,
    rotate: 1,
    z: 3,
    order: 11,
  },
  {
    id: "coffee",
    src: SRC("coffee_mug.png"),
    tag: "coffee > code",
    title: "caffeine routine",
    blurb:
      "first cup plans the day, second writes the code, third edits it. cold brew enthusiast.",
    x: 12,
    y: 91,
    w: 20,
    rotate: -4,
    z: 4,
    order: 12,
  },
  {
    id: "tablet",
    src: SRC("tablet.png"),
    tag: "doodling",
    title: "code · create · collab",
    blurb:
      "iPad sessions where wireframes and motifs get sketched before they become Figma frames or Solidity.",
    x: 70,
    y: 80,
    w: 28,
    rotate: -2,
    z: 3,
    order: 13,
  },
  {
    id: "journal",
    src: SRC("journal.png"),
    tag: "ideas · plans · impact",
    title: "the journal",
    blurb:
      "every project starts here. messy mind-maps, problem statements, sometimes a single sparking line.",
    x: 87,
    y: 91,
    w: 22,
    rotate: 4,
    z: 3,
    order: 14,
  },
  {
    id: "notebook",
    src: SRC("to_do_list.png"),
    tag: "today's plan",
    title: "today's plan",
    blurb:
      "DSA practice, build on Fate, AI research, t-shirt designs, content, gym + self care. ✓",
    x: 42,
    y: 80,
    w: 32,
    rotate: -1,
    z: 5,
    order: 15,
  },
  {
    id: "tagline",
    src: null,
    custom: (
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        <span
          className="font-hand text-amber-950"
          style={{ fontSize: "clamp(14px, 2.4vw, 26px)" }}
        >
          tech · art · purpose
        </span>
        <span
          className="font-marker text-amber-900/80"
          style={{
            fontSize: "clamp(8px, 1.2vw, 12px)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          that&apos;s my superpower
        </span>
      </div>
    ),
    tag: "superpower",
    title: "tech · art · purpose",
    blurb:
      "when those three line up, I'm unstoppable. that's the cocktail I keep mixing.",
    x: 50,
    y: 96,
    w: 36,
    rotate: 0,
    z: 4,
    order: 16,
  },
  {
    id: "avatar",
    src: SRC("avatar.png"),
    tag: "that's me",
    title: "hi, I'm Anjali",
    blurb:
      "engineer by degree, problem-solver by nature. always shipping something — sometimes art, sometimes solidity.",
    x: 47,
    y: 38,
    w: 44,
    rotate: 0,
    z: 6,
    order: 17,
  },
];

/**
 * Deterministic scatter: each piece gets a stable, scattered start
 * (offset + rotation) derived from its id. Limit dispersion so pieces
 * stay within ~30% of the stage in any direction.
 */
function scatterFor(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  const angle = ((h & 0xff) / 256) * Math.PI * 2;
  const dist = 22 + (((h >> 8) & 0x3f) / 64) * 18; // 22-40%
  const rot = (((h >> 16) & 0x3f) / 64) * 50 - 25; // -25..+25 deg
  return {
    dx: Math.cos(angle) * dist,
    dy: Math.sin(angle) * dist,
    dr: rot,
  };
}

function initPositions(): Record<string, { x: number; y: number }> {
  const o: Record<string, { x: number; y: number }> = {};
  for (const p of pieces) {
    o[p.id] = { x: p.x, y: p.y };
  }
  return o;
}

type DragRef = {
  id: string;
  startClientX: number;
  startClientY: number;
  startCenterX: number;
  startCenterY: number;
};

const DRAG_THRESHOLD_PX = 6;

export default function DeskScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragRef | null>(null);
  const dragMovedRef = useRef(false);

  const [assembled, setAssembled] = useState(false);
  /** After entry animation finishes, stagger delays are cleared so drags feel instant. */
  const [assemblyComplete, setAssemblyComplete] = useState(false);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(
    initPositions,
  );
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const maxOrder = Math.max(...pieces.map((p) => p.order));
  const assemblyTailMs = Math.ceil(maxOrder * 70 + 1100);

  const active =
    draggingId !== null ? null : pieces.find((p) => p.id === activeId) ?? null;

  useEffect(() => {
    if (!stageRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAssembled(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    obs.observe(stageRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!assembled) return;
    const t = window.setTimeout(() => setAssemblyComplete(true), assemblyTailMs);
    return () => window.clearTimeout(t);
  }, [assembled, assemblyTailMs]);

  const tooltipPosition = (p: Piece, cx: number, cy: number): CSSProperties => {
    const ttY = Math.min(Math.max(cy, 10), 90);
    if (cx > 50) {
      return {
        right: `${100 - (cx - p.w / 2) + 1.4}%`,
        top: `${ttY}%`,
        transform: "translateY(-50%) rotate(-1deg)",
      };
    }
    return {
      left: `${cx + p.w / 2 + 1.4}%`,
      top: `${ttY}%`,
      transform: "translateY(-50%) rotate(1deg)",
    };
  };
  const tooltipSide = (p: Piece, cx: number): "is-left" | "is-right" =>
    cx > 50 ? "is-left" : "is-right";

  const clampPieceToStage = (
    stageRect: DOMRect,
    pieceRect: DOMRect,
    desiredCenterX: number,
    desiredCenterY: number,
  ) => {
    const halfW = pieceRect.width / 2;
    const halfH = pieceRect.height / 2;
    const cx = Math.max(
      stageRect.left + halfW,
      Math.min(stageRect.right - halfW, desiredCenterX),
    );
    const cy = Math.max(
      stageRect.top + halfH,
      Math.min(stageRect.bottom - halfH, desiredCenterY),
    );
    const xPct = ((cx - stageRect.left) / stageRect.width) * 100;
    const yPct = ((cy - stageRect.top) / stageRect.height) * 100;
    return { x: xPct, y: yPct };
  };

  const handlePiecePointerDown =
    (p: Piece) => (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!assembled) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      dragMovedRef.current = false;
      const pieceRect = e.currentTarget.getBoundingClientRect();
      dragRef.current = {
        id: p.id,
        startClientX: e.clientX,
        startClientY: e.clientY,
        startCenterX: pieceRect.left + pieceRect.width / 2,
        startCenterY: pieceRect.top + pieceRect.height / 2,
      };
      setDraggingId(p.id);
      setActiveId(null);
    };

  const handlePiecePointerMove =
    (p: Piece) => (e: React.PointerEvent<HTMLButtonElement>) => {
      const d = dragRef.current;
      if (!d || d.id !== p.id || !stageRef.current) return;
      const dx = Math.abs(e.clientX - d.startClientX);
      const dy = Math.abs(e.clientY - d.startClientY);
      if (dx > DRAG_THRESHOLD_PX || dy > DRAG_THRESHOLD_PX) dragMovedRef.current = true;

      const stageRect = stageRef.current.getBoundingClientRect();
      const pieceRect = e.currentTarget.getBoundingClientRect();
      const newCenterX = d.startCenterX + (e.clientX - d.startClientX);
      const newCenterY = d.startCenterY + (e.clientY - d.startClientY);
      const next = clampPieceToStage(stageRect, pieceRect, newCenterX, newCenterY);
      setPositions((prev) => ({ ...prev, [p.id]: next }));
    };

  const handlePiecePointerUp =
    (p: Piece) => (e: React.PointerEvent<HTMLButtonElement>) => {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      const wasDrag = dragRef.current?.id === p.id && dragMovedRef.current;
      dragRef.current = null;
      setDraggingId(null);
      if (!wasDrag) {
        setActiveId((prev) => (prev === p.id ? null : p.id));
      }
    };

  return (
    <div>
      <div
        ref={stageRef}
        className={`desk-stage${assembled ? " is-assembled" : ""}`}
        onPointerLeave={() => {
          if (!draggingId) setActiveId(null);
        }}
      >
        {pieces.map((p) => {
          const isActive = activeId === p.id;
          const isDragging = draggingId === p.id;
          const scatter = scatterFor(p.id);
          const pos = positions[p.id] ?? { x: p.x, y: p.y };

          const finalTransform = `translate(-50%, -50%) rotate(${p.rotate}deg)`;
          const startTransform = `translate(calc(-50% + ${scatter.dx}vw), calc(-50% + ${scatter.dy}vw)) rotate(${scatter.dr}deg)`;

          return (
            <button
              key={p.id}
              type="button"
              className={`desk-piece${isActive ? " is-active" : ""}${isDragging ? " is-dragging" : ""}`}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${p.w}%`,
                aspectRatio: "244 / 233",
                transform: assembled ? finalTransform : startTransform,
                transitionDelay:
                  !assembled || assemblyComplete || isDragging
                    ? "0ms"
                    : `${p.order * 70}ms`,
                zIndex:
                  isDragging ? 100 : isActive ? 50 : p.z,
              }}
              onMouseEnter={() => {
                if (draggingId == null && assembled) setActiveId(p.id);
              }}
              onMouseLeave={() => {
                if (!isDragging && activeId === p.id) setActiveId(null);
              }}
              onFocus={() => {
                if (draggingId == null && assembled) setActiveId(p.id);
              }}
              onBlur={() => {
                if (!isDragging && activeId === p.id) setActiveId(null);
              }}
              onPointerDown={handlePiecePointerDown(p)}
              onPointerMove={handlePiecePointerMove(p)}
              onPointerUp={handlePiecePointerUp(p)}
              onPointerCancel={handlePiecePointerUp(p)}
              aria-pressed={Boolean(isActive || isDragging)}
              aria-grabbed={isDragging}
              aria-label={`${p.tag}${assembled ? ". drag to rearrange." : ""}`}
            >
              {p.src ? (
                <Image
                  src={p.src}
                  alt={p.title}
                  width={244}
                  height={233}
                  sizes="(max-width: 1024px) 28vw, 220px"
                  draggable={false}
                />
              ) : (
                p.custom
              )}
            </button>
          );
        })}

        {assembled && active && draggingId == null && (
          <div
            className={`desk-tooltip ${tooltipSide(active, positions[active.id]?.x ?? active.x)}`}
            style={{
              ...tooltipPosition(
                active,
                positions[active.id]?.x ?? active.x,
                positions[active.id]?.y ?? active.y,
              ),
              zIndex: 60,
            }}
            role="tooltip"
          >
            <h4>{active.title}</h4>
            <p>{active.blurb}</p>
            <span className="desk-tooltip-tag">· {active.tag}</span>
          </div>
        )}
      </div>

      <p className="mt-5 md:mt-6 text-center font-hand text-amber-900/70 text-xl px-4">
        {assembled
          ? "drag anything on the board to rearrange it — hover to read notes"
          : "putting the desk together…"}
      </p>
    </div>
  );
}
