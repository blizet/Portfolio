import type { CSSProperties } from "react";

type IconProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const Arrow = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export const Plus = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ArrowLeft = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const ExternalLink = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
  </svg>
);

export const GitHub = ({ size = 16, className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} style={style}>
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3.66 18c-1.09-.74.09-.72.09-.72a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.66-.3-5.47-1.34-5.47-5.94a4.66 4.66 0 0 1 1.24-3.24 4.33 4.33 0 0 1 .12-3.2s1.01-.33 3.3 1.24a11.4 11.4 0 0 1 6 0c2.28-1.57 3.29-1.24 3.29-1.24a4.33 4.33 0 0 1 .12 3.2 4.66 4.66 0 0 1 1.24 3.24c0 4.61-2.82 5.63-5.5 5.93a2.86 2.86 0 0 1 .81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
  </svg>
);

export const FileText = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const Calendar = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const User = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Building = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18" />
    <path d="M3 22h18M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
  </svg>
);

export const Clock = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Sparkles = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export const Sun = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const Moon = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const Layers = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="m12 2 9 5-9 5-9-5 9-5z" />
    <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const Network = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M7 5h10M5 7v10M19 7v10M7 19h10M6.4 6.4l4 4M17.6 6.4l-4 4M6.4 17.6l4-4M17.6 17.6l-4-4" />
  </svg>
);

export const ShieldCheck = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Globe = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const Zap = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="m13 2-9 12h7l-1 8 9-12h-7z" />
  </svg>
);

export const Cpu = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
);

export const Code = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const Box = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.27 6.96 8.73 5.04 8.73-5.04M12 22.08V12" />
  </svg>
);

export const Spark = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style}>
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6" />
  </svg>
);

// ===== Tech monogram icons (compact letter-marks for stack chips) =====

const Monogram = ({
  letter,
  size = 18,
  bg,
  fg,
  rounded = 6,
  className,
  style,
}: {
  letter: string;
  size?: number;
  bg: string;
  fg: string;
  rounded?: number;
  className?: string;
  style?: CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden
    className={className}
    style={style}
  >
    <rect x="0" y="0" width="24" height="24" rx={rounded} fill={bg} />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontFamily="ui-monospace, 'SF Mono', Menlo, monospace"
      fontWeight="700"
      fontSize="10"
      fill={fg}
      letterSpacing="0.04em"
    >
      {letter}
    </text>
  </svg>
);

const ACCENT = "#8b5cf6";

const techIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  // Frontend
  "Next.js": (p) => <Monogram letter="N" bg="#000" fg="#fff" {...p} />,
  "Next.js 15": (p) => <Monogram letter="N" bg="#000" fg="#fff" {...p} />,
  React: (p) => (
    <svg {...base(p.size ?? 18)} className={p.className} style={p.style} stroke="#61dafb">
      <circle cx="12" cy="12" r="2" fill="#61dafb" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  TypeScript: (p) => <Monogram letter="TS" bg="#3178c6" fg="#fff" {...p} />,
  "Tailwind CSS": (p) => (
    <svg {...base(p.size ?? 18)} className={p.className} style={p.style} stroke="#38bdf8" strokeWidth={2}>
      <path d="M5 12c1.5-3 3.5-4.5 6-4.5 3 0 4.5 1.5 6 3 1 1 2 1.5 3 1.5-1.5 3-3.5 4.5-6 4.5-3 0-4.5-1.5-6-3-1-1-2-1.5-3-1.5z" fill="#38bdf81f" />
    </svg>
  ),
  GSAP: (p) => <Monogram letter="G" bg="#0ae448" fg="#000" {...p} />,
  RainbowKit: (p) => (
    <svg viewBox="0 0 24 24" width={p.size ?? 18} height={p.size ?? 18} className={p.className} style={p.style} fill="none">
      <path d="M3 18a9 9 0 0 1 18 0" stroke="#ff8a00" strokeWidth={2} />
      <path d="M5 18a7 7 0 0 1 14 0" stroke="#ffb700" strokeWidth={2} />
      <path d="M7 18a5 5 0 0 1 10 0" stroke="#5ad7ff" strokeWidth={2} />
      <path d="M9 18a3 3 0 0 1 6 0" stroke="#7d4cff" strokeWidth={2} />
    </svg>
  ),
  Figma: (p) => (
    <svg viewBox="0 0 24 24" width={p.size ?? 18} height={p.size ?? 18} className={p.className} style={p.style}>
      <rect x="6" y="2" width="6" height="6" rx="3" fill="#f24e1e" />
      <rect x="12" y="2" width="6" height="6" rx="3" fill="#ff7262" />
      <rect x="6" y="8" width="6" height="6" rx="3" fill="#a259ff" />
      <rect x="12" y="8" width="6" height="6" rx="3" fill="#1abcfe" />
      <rect x="6" y="14" width="6" height="6" rx="3" fill="#0acf83" />
    </svg>
  ),

  // Web3
  Solidity: (p) => (
    <svg viewBox="0 0 24 24" width={p.size ?? 18} height={p.size ?? 18} className={p.className} style={p.style}>
      <path d="M12 3 7 12l5 9 5-9z" fill="#627eea" />
      <path d="M12 3v9l5 9z" fill="#3c5ad6" />
      <path d="M12 12 7 12l5 9z" fill="#94a3ff" />
    </svg>
  ),
  "Ethers.js": (p) => <Monogram letter="E" bg="#627eea" fg="#fff" {...p} />,
  viem: (p) => <Monogram letter="vi" bg="#1f2937" fg="#fff" {...p} />,
  wagmi: (p) => <Monogram letter="wa" bg="#1f2937" fg="#fff" {...p} />,

  // Backend
  Firebase: (p) => <Monogram letter="F" bg="#ffa000" fg="#fff" {...p} />,
  Firestore: (p) => <Monogram letter="Fs" bg="#ff9100" fg="#fff" {...p} />,
  "Cloud Functions": (p) => <Monogram letter="CF" bg="#4285f4" fg="#fff" {...p} />,
  Stripe: (p) => <Monogram letter="S" bg="#635bff" fg="#fff" {...p} />,
  FastAPI: (p) => <Monogram letter="Fa" bg="#009688" fg="#fff" {...p} />,
  PostgreSQL: (p) => <Monogram letter="Pg" bg="#336791" fg="#fff" {...p} />,
  "OAuth 2.0": (p) => (
    <svg {...base(p.size ?? 18)} className={p.className} style={p.style} stroke="#7e22ce">
      <circle cx="9" cy="14" r="4" />
      <path d="m12.6 11.4 6.4-6.4M15 4h4v4" />
    </svg>
  ),
  Redis: (p) => <Monogram letter="R" bg="#dc2626" fg="#fff" {...p} />,
  Docker: (p) => <Monogram letter="D" bg="#0db7ed" fg="#fff" {...p} />,
  "Node.js": (p) => <Monogram letter="N" bg="#3c873a" fg="#fff" {...p} />,
  "GitHub Actions": (p) => <Monogram letter="GA" bg="#1f2937" fg="#fff" {...p} />,
  Prisma: (p) => <Monogram letter="P" bg="#1e293b" fg="#fff" {...p} />,
};

export const TechIcon = ({
  name,
  size = 18,
  className,
  style,
}: { name: string } & IconProps) => {
  const Component = techIconMap[name];
  if (Component) {
    return <Component size={size} className={className} style={style} />;
  }
  return (
    <Monogram
      letter={name.slice(0, 2).toUpperCase()}
      bg={`${ACCENT}33`}
      fg={ACCENT}
      size={size}
      className={className}
      style={style}
    />
  );
};
