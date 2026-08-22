import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0C0F",
          elevated: "#12151B",
          hover: "#171B22",
        },
        border: {
          DEFAULT: "#22262E",
          subtle: "#1A1D23",
        },
        ink: {
          DEFAULT: "#E6E8EB",
          muted: "#8B92A0",
          faint: "#565D6B",
        },
        signal: {
          DEFAULT: "#4C9AFF",
          dim: "#3572C4",
          glow: "#7FB4FF",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "'JetBrains Mono'",
          "Menlo",
          "Consolas",
          "monospace",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Inter",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
