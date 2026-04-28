// Hand-drawn cartoon cliparts. All inline SVG so the cartoon page stays light
// (no extra image downloads). Strokes use a warm ink color; fills use the
// notebook palette.

type CP = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const INK = "#3f1d12";
const SOFT = "#7c2d12";
const ACCENT = "#b45309";

export const CoffeeMug = ({ size = 80, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    aria-hidden
    className={className}
    style={style}
  >
    {/* steam */}
    <g className="steam">
      <path
        d="M40 14 Q 36 6, 42 0"
        stroke={ACCENT}
        strokeOpacity="0.55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M52 14 Q 48 6, 54 0"
        stroke={ACCENT}
        strokeOpacity="0.55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M64 14 Q 60 6, 66 0"
        stroke={ACCENT}
        strokeOpacity="0.55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
    {/* cup */}
    <path
      d="M22 30 H68 V72 Q 68 84, 56 84 H34 Q 22 84, 22 72 Z"
      fill="#3a2418"
      stroke={INK}
      strokeWidth="2"
    />
    {/* handle */}
    <path
      d="M68 42 Q 84 42, 84 56 Q 84 70, 68 70"
      fill="none"
      stroke={INK}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* label */}
    <text
      x="45"
      y="62"
      textAnchor="middle"
      fontFamily="var(--font-caveat), cursive"
      fontSize="14"
      fill="#fff8e7"
    >
      coffee
    </text>
    <text
      x="45"
      y="74"
      textAnchor="middle"
      fontFamily="var(--font-caveat), cursive"
      fontSize="13"
      fill="#fde7b8"
    >
      &gt; code
    </text>
  </svg>
);

export const BookStack = ({ size = 110, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 140 100"
    aria-hidden
    className={className}
    style={style}
  >
    {[
      { y: 22, fill: "#9b3a2a", label: "DSA" },
      { y: 42, fill: "#3f5c5e", label: "blockchain" },
      { y: 62, fill: "#5d4838", label: "machine learning" },
      { y: 82, fill: "#8a6e3a", label: "system design" },
    ].map((b, i) => (
      <g key={i}>
        <rect
          x={8}
          y={b.y - 14}
          width={120}
          height={16}
          rx="2.5"
          fill={b.fill}
          stroke={INK}
          strokeWidth="1.2"
        />
        <line x1={14} x2={14} y1={b.y - 14} y2={b.y + 2} stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
        <line x1={122} x2={122} y1={b.y - 14} y2={b.y + 2} stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
        <text
          x={68}
          y={b.y - 2}
          textAnchor="middle"
          fontFamily="var(--font-patrick), cursive"
          fontSize="9"
          fill="#fdf6e3"
          letterSpacing="0.06em"
        >
          {b.label.toUpperCase()}
        </text>
      </g>
    ))}
  </svg>
);

export const AIChip = ({ size = 90, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    aria-hidden
    className={className}
    style={style}
  >
    {/* circuit traces */}
    {[
      "M2 30 H18", "M82 30 H98", "M2 50 H18", "M82 50 H98", "M2 70 H18", "M82 70 H98",
      "M30 2 V18", "M50 2 V18", "M70 2 V18", "M30 82 V98", "M50 82 V98", "M70 82 V98",
    ].map((d, i) => (
      <path key={i} d={d} stroke={INK} strokeOpacity="0.65" strokeWidth="1.4" fill="none" />
    ))}
    {/* chip body */}
    <rect
      x="18"
      y="18"
      width="64"
      height="64"
      rx="6"
      fill="#1f2937"
      stroke={INK}
      strokeWidth="1.6"
    />
    <rect x="24" y="24" width="52" height="52" rx="4" fill="#0d1320" stroke="rgba(180,150,100,0.35)" />
    <text
      x="50"
      y="56"
      textAnchor="middle"
      fontFamily="var(--font-syne), sans-serif"
      fontWeight="700"
      fontSize="18"
      fill="#5eead4"
    >
      AI
    </text>
    {/* blinking pads */}
    <circle cx="34" cy="34" r="1.6" fill="#fbbf24" className="ai-blink" />
    <circle cx="66" cy="34" r="1.6" fill="#22d3ee" className="ai-blink ai-blink-d" />
    <circle cx="34" cy="66" r="1.6" fill="#22d3ee" className="ai-blink ai-blink-d2" />
    <circle cx="66" cy="66" r="1.6" fill="#fbbf24" className="ai-blink" />
  </svg>
);

export const Plant = ({ size = 90, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 110"
    aria-hidden
    className={className}
    style={style}
  >
    {/* leaves */}
    <g className="leaves">
      <path d="M50 60 Q 30 30, 18 14" stroke={SOFT} strokeWidth="1.6" fill="none" />
      <ellipse cx="22" cy="22" rx="14" ry="6" fill="#65a30d" stroke={INK} strokeWidth="1.2" transform="rotate(-30 22 22)" />
      <path d="M50 60 Q 50 30, 50 6" stroke={SOFT} strokeWidth="1.6" fill="none" />
      <ellipse cx="50" cy="14" rx="14" ry="6" fill="#84cc16" stroke={INK} strokeWidth="1.2" transform="rotate(0 50 14)" />
      <path d="M50 60 Q 70 30, 82 16" stroke={SOFT} strokeWidth="1.6" fill="none" />
      <ellipse cx="78" cy="22" rx="14" ry="6" fill="#4d7c0f" stroke={INK} strokeWidth="1.2" transform="rotate(30 78 22)" />
      <ellipse cx="34" cy="40" rx="11" ry="5" fill="#a3e635" stroke={INK} strokeWidth="1.1" transform="rotate(-15 34 40)" />
      <ellipse cx="66" cy="40" rx="11" ry="5" fill="#84cc16" stroke={INK} strokeWidth="1.1" transform="rotate(15 66 40)" />
    </g>
    {/* pot */}
    <path
      d="M28 64 H72 L66 100 H34 Z"
      fill="#c2410c"
      stroke={INK}
      strokeWidth="1.6"
    />
    <rect x="26" y="60" width="48" height="8" fill="#9a3412" stroke={INK} strokeWidth="1.4" />
  </svg>
);

export const Tablet = ({ size = 110, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 140 100"
    aria-hidden
    className={className}
    style={style}
  >
    <rect x="6" y="6" width="128" height="88" rx="6" fill="#0f172a" stroke={INK} strokeWidth="1.6" />
    <rect x="12" y="12" width="116" height="76" rx="3" fill="#fef3c7" stroke="rgba(0,0,0,0.15)" />
    <text
      x="70"
      y="32"
      textAnchor="middle"
      fontFamily="var(--font-caveat), cursive"
      fontSize="14"
      fill="#3f1d12"
    >
      code.
    </text>
    <text x="70" y="48" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="14" fill="#3f1d12">
      create.
    </text>
    <text x="70" y="64" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="14" fill="#3f1d12">
      collaborate.
    </text>
    <text x="70" y="80" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="14" fill="#b45309">
      impact. ♥
    </text>
  </svg>
);

export const TShirt = ({
  size = 70,
  color = "#fef3c7",
  motif = "swirl",
  className,
  style,
}: CP & { color?: string; motif?: "swirl" | "block" | "leaf" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    aria-hidden
    className={className}
    style={style}
  >
    {/* hanger */}
    <path
      d="M50 12 Q 50 4, 56 4 Q 60 4, 60 8"
      stroke={INK}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M22 22 L50 14 L78 22" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    {/* shirt body */}
    <path
      d="M22 22 L10 36 L20 44 L24 38 V90 H76 V38 L80 44 L90 36 L78 22 L62 22 Q 60 32, 50 32 Q 40 32, 38 22 Z"
      fill={color}
      stroke={INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* motif */}
    {motif === "swirl" && (
      <g>
        <circle cx="50" cy="58" r="10" fill="none" stroke={SOFT} strokeWidth="1.4" />
        <path d="M50 50 Q 56 58, 50 66 Q 44 58, 50 50" fill={ACCENT} />
        <path d="M44 64 L40 70 M56 64 L60 70 M50 70 L50 78" stroke={SOFT} strokeWidth="1.2" />
      </g>
    )}
    {motif === "block" && (
      <g>
        <rect x="40" y="48" width="20" height="20" fill={SOFT} />
        <path d="M40 58 H60 M50 48 V68" stroke="#fde7b8" strokeWidth="1.4" />
      </g>
    )}
    {motif === "leaf" && (
      <g>
        <path d="M40 70 Q 50 50, 60 70" fill="none" stroke="#4d7c0f" strokeWidth="1.6" />
        <path d="M44 64 Q 50 56, 56 64" fill="#84cc16" stroke={INK} strokeWidth="1.1" />
      </g>
    )}
  </svg>
);

export const Pencil = ({ size = 90, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 30"
    aria-hidden
    className={className}
    style={style}
  >
    <path d="M0 15 L10 6 L100 6 L100 24 L10 24 Z" fill="#fbbf24" stroke={INK} strokeWidth="1.4" />
    <path d="M100 6 L116 15 L100 24 Z" fill="#fde68a" stroke={INK} strokeWidth="1.4" />
    <path d="M0 15 L10 6 L10 24 Z" fill="#1f2937" stroke={INK} strokeWidth="1.4" />
    <line x1="20" x2="92" y1="15" y2="15" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
  </svg>
);

export const Heart = ({
  size = 22,
  filled = true,
  className,
  style,
}: CP & { filled?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden
    className={className}
    style={style}
  >
    <path
      d="M12 21s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9z"
      fill={filled ? "#dc2626" : "transparent"}
      stroke="#9f1239"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sparkle = ({ size = 18, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden
    className={className}
    style={style}
  >
    <path
      d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z"
      fill={ACCENT}
      stroke={SOFT}
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
  </svg>
);

export const SwirlArrow = ({
  size = 110,
  className,
  style,
}: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 80"
    aria-hidden
    className={className}
    style={style}
  >
    <path
      d="M2 60 Q 30 8, 60 30 T 110 18"
      fill="none"
      stroke={SOFT}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M110 18 L100 12 M110 18 L100 24"
      fill="none"
      stroke={SOFT}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

export const Mithila = ({ size = 90, className, style }: CP) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    aria-hidden
    className={className}
    style={style}
  >
    <circle cx="50" cy="50" r="42" fill="none" stroke={INK} strokeWidth="1.4" />
    <circle cx="50" cy="50" r="36" fill="none" stroke={SOFT} strokeWidth="0.9" strokeDasharray="2 4" />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 50 + Math.cos(a) * 28;
      const y1 = 50 + Math.sin(a) * 28;
      const x2 = 50 + Math.cos(a) * 40;
      const y2 = 50 + Math.sin(a) * 40;
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={SOFT} strokeWidth="1.1" />
      );
    })}
    {/* central face hint */}
    <ellipse cx="50" cy="50" rx="14" ry="18" fill="#fde7b8" stroke={INK} strokeWidth="1.2" />
    <ellipse cx="44" cy="48" rx="2" ry="3" fill={INK} />
    <ellipse cx="56" cy="48" rx="2" ry="3" fill={INK} />
    <path d="M44 58 Q 50 62, 56 58" stroke={INK} strokeWidth="1.2" fill="none" />
    <circle cx="50" cy="42" r="1.8" fill="#dc2626" />
  </svg>
);

export const Laptop = ({
  size = 150,
  title = "FATE PROTOCOL",
  className,
  style,
}: CP & { title?: string }) => (
  <svg
    width={size}
    height={size * 0.78}
    viewBox="0 0 200 156"
    aria-hidden
    className={className}
    style={style}
  >
    {/* lid frame */}
    <rect x="14" y="6" width="172" height="112" rx="8" fill="#1f2937" stroke={INK} strokeWidth="2" />
    {/* screen */}
    <rect x="20" y="12" width="160" height="100" rx="3" fill="#0d1117" stroke="rgba(180,130,60,0.3)" />
    {/* code lines (left) */}
    <text
      x="28"
      y="30"
      fontFamily="var(--font-syne), sans-serif"
      fontWeight="800"
      fontSize="11"
      fill="#5eead4"
      letterSpacing="0.04em"
    >
      {title}
    </text>
    {[
      { y: 46, text: "decentralized", fill: "#a78bfa" },
      { y: 58, text: "private", fill: "#94a3b8" },
      { y: 70, text: "verifiable", fill: "#94a3b8" },
    ].map((l) => (
      <text
        key={l.y}
        x="28"
        y={l.y}
        fontFamily="var(--font-space-mono), monospace"
        fontSize="7"
        fill={l.fill}
        opacity="0.85"
      >
        {l.text}
      </text>
    ))}
    {/* tiny indicator dots — TFL traffic-light cluster */}
    <circle cx="32" cy="86" r="2" fill="#fbbf24" />
    <circle cx="40" cy="86" r="2" fill="#22d3ee" opacity="0.7" />
    <circle cx="48" cy="86" r="2" fill="#a78bfa" opacity="0.5" />
    {/* fate diamond emblem on the right */}
    <g transform="translate(150 60)">
      <circle r="18" fill="none" stroke="#5eead4" strokeWidth="1.5" />
      <path d="M-12 0 L0 -12 L12 0 L0 12 Z" fill="none" stroke="#5eead4" strokeWidth="1.4" />
      <circle r="3" fill="#5eead4" opacity="0.7" />
    </g>
    {/* hinge bar */}
    <rect x="14" y="116" width="172" height="6" fill="#0a0c14" stroke={INK} strokeWidth="1.4" />
    {/* base */}
    <path d="M4 122 H196 L188 150 H12 Z" fill="#374151" stroke={INK} strokeWidth="2" />
    <line x1="78" y1="138" x2="122" y2="138" stroke="#1f2937" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const ClosedBook = ({
  size = 110,
  className,
  style,
}: CP) => (
  <svg
    width={size}
    height={size * 1.35}
    viewBox="0 0 100 135"
    aria-hidden
    className={className}
    style={style}
  >
    {/* shadow */}
    <ellipse cx="50" cy="128" rx="36" ry="3" fill="rgba(0,0,0,0.18)" />
    {/* page edge */}
    <rect x="10" y="14" width="80" height="110" rx="2" fill="#fef3c7" />
    {/* cover */}
    <rect x="8" y="10" width="80" height="110" rx="3" fill="#1f2937" stroke={INK} strokeWidth="1.6" />
    <rect x="12" y="14" width="72" height="102" fill="none" stroke="rgba(180,130,60,0.45)" strokeWidth="0.8" />
    {[
      { y: 50, text: "IDEAS" },
      { y: 70, text: "PLANS" },
      { y: 90, text: "IMPACT" },
    ].map((l) => (
      <text
        key={l.text}
        x="48"
        y={l.y}
        textAnchor="middle"
        fontFamily="var(--font-patrick), cursive"
        fontWeight="700"
        fontSize="13"
        fill="#fbbf24"
        letterSpacing="0.12em"
      >
        {l.text}
      </text>
    ))}
    {/* spine line */}
    <line x1="20" y1="14" x2="20" y2="116" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
  </svg>
);

export const MiniNotebook = ({
  size = 220,
  className,
  style,
}: CP) => (
  <svg
    width={size}
    height={size * 0.62}
    viewBox="0 0 220 136"
    aria-hidden
    className={className}
    style={style}
  >
    {/* shadow */}
    <ellipse cx="110" cy="130" rx="98" ry="4" fill="rgba(0,0,0,0.18)" />
    {/* page */}
    <rect x="6" y="6" width="208" height="120" rx="6" fill="#fffaf0" stroke={INK} strokeWidth="1.6" />
    {/* lines */}
    {[24, 38, 52, 66, 80, 94, 108].map((y) => (
      <line key={y} x1="36" x2="206" y1={y} y2={y} stroke="rgba(146,64,14,0.25)" strokeWidth="0.8" />
    ))}
    {/* spiral binding */}
    {Array.from({ length: 9 }).map((_, i) => (
      <circle
        key={i}
        cx="14"
        cy={14 + i * 13}
        r="3"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
      />
    ))}
    {/* heading */}
    <text
      x="36"
      y="20"
      fontFamily="var(--font-caveat), cursive"
      fontSize="14"
      fill="#3f1d12"
      fontWeight="700"
    >
      TODAY&apos;S PLAN:
    </text>
    {/* checklist */}
    {[
      { y: 36, text: "DSA Practice" },
      { y: 50, text: "Build on Fate" },
      { y: 64, text: "AI Research" },
      { y: 78, text: "T-shirt Designs" },
      { y: 92, text: "Content Creation" },
      { y: 106, text: "Gym + Self care" },
    ].map((l) => (
      <g key={l.text}>
        <rect
          x="36"
          y={l.y - 8}
          width="9"
          height="9"
          rx="1.2"
          fill="#fff8e7"
          stroke={INK}
          strokeWidth="1"
        />
        <path
          d={`M37 ${l.y - 4} L40 ${l.y - 1} L44 ${l.y - 7}`}
          stroke="#b45309"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="50"
          y={l.y}
          fontFamily="var(--font-patrick), cursive"
          fontSize="10"
          fill="#3f1d12"
        >
          {l.text}
        </text>
      </g>
    ))}
    {/* doodle squiggle bottom-right */}
    <path
      d="M170 118 Q 178 110, 186 116 Q 194 122, 202 116"
      fill="none"
      stroke="#b45309"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const Ribbon = ({
  text,
  className,
  style,
}: { text: string; className?: string; style?: React.CSSProperties }) => (
  <span
    className={className}
    style={{
      display: "inline-block",
      padding: "4px 14px",
      background: "#fef3c7",
      border: `1.4px solid ${INK}`,
      boxShadow: `2px 2px 0 ${INK}`,
      fontFamily: "var(--font-patrick), cursive",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      transform: "rotate(-2deg)",
      ...style,
    }}
  >
    {text}
  </span>
);
