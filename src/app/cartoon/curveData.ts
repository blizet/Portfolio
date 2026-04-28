// Roller-coaster nodes: bigger swings on purpose. Curve always finishes
// at the top right ("goal") to tell the growth story.

export type CurveNode = {
  label: string;
  timeline: string;
  /** y in 0..1 — 0 = top of viewport, 1 = bottom. */
  y: number;
  /** Optional one-line caption shown on hover/tap. */
  caption?: string;
};

export const curveNodes: CurveNode[] = [
  { label: "exploring", timeline: "2022", y: 0.85, caption: "first projects, breaking + fixing things." },
  { label: "SIH finals", timeline: "2023", y: 0.32, caption: "ideas vs. real-world constraints. wild ride." },
  { label: "first internship", timeline: "Aug '24", y: 0.78, caption: "shipped to production for the first time." },
  { label: "EOSGlobe", timeline: "Aug — Sep '24", y: 0.30, caption: "AI voice bot with Azure TTS + Mistral." },
  { label: "Stability Nexus", timeline: "Oct '24", y: 0.72, caption: "built Clowder. CATs for fair contribution." },
  { label: "C-DAC R&D", timeline: "Oct '24", y: 0.18, caption: "PII-leak detection in SMTP pipelines." },
  { label: "Kridinify", timeline: "Jun '25", y: 0.65, caption: "APIs + dashboards + auth at scale." },
  { label: "GSoC '25", timeline: "Jun — Nov '25", y: 0.22, caption: "Fate Protocol — perpetual prediction market." },
  { label: "AOSSIE Mentor", timeline: "Dec '25 →", y: 0.08, caption: "mentoring contributors. paying it forward." },
];
