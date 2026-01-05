import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        white: "#fafafa",
        gray: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 2rem))" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(calc(-100% - 2rem))" },
          "100%": { transform: "translateX(0)" },
        },
        "reveal-up": {
          from: {
            opacity: "0",
            transform: "translateY(60px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "reveal-left": {
          from: {
            opacity: "0",
            transform: "translateX(-60px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "reveal-up": "reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-left": "reveal-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

