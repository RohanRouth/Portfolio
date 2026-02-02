import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#18181b",
          light: "#27272a",
        },
        accent: {
          DEFAULT: "#60a5fa",
          dim: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
