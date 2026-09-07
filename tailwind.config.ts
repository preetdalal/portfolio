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
          base: "#080a0f",
          elevated: "#0d1118",
          surface: "#121722",
          card: "rgba(16, 22, 32, 0.78)",
          cardHover: "rgba(23, 31, 46, 0.94)",
          panel: "#0b0e15",
          sectionAlt: "rgba(13, 17, 26, 0.55)",
        },
        brand: {
          ice: "#38bdf8",
          sky: "#60a5fa",
          light: "#93c5fd",
          blue: "#3b82f6",
          cobalt: "#2563eb",
          royal: "#1d4ed8",
          navy: "#1e40af",
        },
        telemetry: {
          orange: "#f97316",
          amber: "#f59e0b",
          green: "#10b981",
          red: "#ef4444",
          purple: "#818cf8",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          strong: "rgba(255, 255, 255, 0.22)",
          accent: "rgba(56, 189, 248, 0.42)",
        }
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(56, 189, 248, 0.2)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.5)",
        card: "0 8px 32px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        'blue-gradient': "linear-gradient(135deg, #ffffff 20%, #93c5fd 60%, #38bdf8 100%)",
        'btn-primary': "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        'btn-primary-hover': "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        'card-gradient': "linear-gradient(180deg, rgba(18, 24, 35, 0.8) 0%, rgba(12, 16, 24, 0.8) 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
