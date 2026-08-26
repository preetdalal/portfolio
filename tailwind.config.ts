import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          dark: "#0b0f19",
          card: "#161b22",
          cardHover: "#1c2128",
          subtle: "#12161f",
        },
        border: {
          DEFAULT: "#30363d",
          subtle: "#21262d",
          active: "#6DB33F",
        },
        spring: {
          DEFAULT: "#6DB33F",
          light: "#7ecc4f",
          dim: "#4e822d",
          emerald: "#10B981",
          glow: "rgba(109, 179, 63, 0.25)",
        },
        k8s: {
          DEFAULT: "#326ce5",
          light: "#5185ea",
          dim: "#234ca1",
          glow: "rgba(50, 108, 229, 0.25)",
        },
        cyan: {
          DEFAULT: "#00f0ff",
          dim: "#0891b2",
        },
        ink: {
          DEFAULT: "#f0f6fc",
          muted: "#8b949e",
          faint: "#484f58",
          accent: "#c9d1d9",
        },
      },
      fontFamily: {
        mono: [
          "'JetBrains Mono'",
          "'Fira Code'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "76rem",
      },
      boxShadow: {
        "spring-glow": "0 0 15px rgba(109, 179, 63, 0.2)",
        "spring-glow-lg": "0 0 25px rgba(109, 179, 63, 0.35)",
        "k8s-glow": "0 0 15px rgba(50, 108, 229, 0.25)",
        "cyan-glow": "0 0 15px rgba(0, 240, 255, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-scan": "radar 4s linear infinite",
      },
      keyframes: {
        radar: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

