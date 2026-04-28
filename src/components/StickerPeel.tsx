"use client";

import Link from "next/link";

/**
 * Premium-side sticker peel.
 * Sits in the top-right corner, hints at a hidden notebook beneath the
 * polished portfolio. Clicking it routes to the cartoon mode at /cartoon.
 *
 * Design intent: a folded "tag" with the corner peeled back to reveal a
 * warm paper layer. Pure SVG + CSS so it stays cheap.
 */
export default function StickerPeel() {
  return (
    <div className="peel-corner" aria-hidden={false}>
      <Link
        href="/cartoon"
        prefetch
        aria-label="Open cartoon mode"
        title="psst — there's a notebook behind this"
      >
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradient for the peeled paper underside */}
            <linearGradient id="peel-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fde7b8" />
              <stop offset="55%" stopColor="#f4d188" />
              <stop offset="100%" stopColor="#e2a85a" />
            </linearGradient>
            {/* Soft inner shadow on the peel curl */}
            <linearGradient id="peel-shadow" x1="0.2" x2="0.9" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
            </linearGradient>
          </defs>

          {/* The "page underneath" peeking out from the curl */}
          <path
            d="M110 0 H56 L110 54 Z"
            fill="url(#peel-grad)"
            stroke="rgba(120, 53, 15, 0.35)"
            strokeWidth="0.6"
          />

          {/* The peel itself — curled triangle flipped over */}
          <g>
            <path
              d="M56 0 L110 54 Q90 30 56 0 Z"
              fill="url(#peel-grad)"
              stroke="rgba(120, 53, 15, 0.45)"
              strokeWidth="0.7"
            />
            <path
              d="M56 0 L110 54 Q90 30 56 0 Z"
              fill="url(#peel-shadow)"
              opacity="0.55"
            />
          </g>
        </svg>
        <span className="peel-label">peek :)</span>
      </Link>
    </div>
  );
}
