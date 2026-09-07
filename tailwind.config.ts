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
        bg: {
          base: "#090a0d",
          alt: "#0e1015",
          card: "#12151c",
          cardHover: "#161a24",
          input: "#0d0f14",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.2)",
          accent: "rgba(59, 130, 246, 0.35)",
        },
        accent: {
          blue: "#3b82f6",
          cobalt: "#2563eb",
          sky: "#60a5fa",
          ice: "#38bdf8",
          wash: "rgba(59, 130, 246, 0.08)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
