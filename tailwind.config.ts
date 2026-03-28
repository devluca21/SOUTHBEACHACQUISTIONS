import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#001F5C",
        accent: {
          DEFAULT: "#001F5C",
          deep: "#001347",
          soft: "#E8EEF5",
          ondark: "#C5D9F0",
        },
        slate: {
          muted: "#4A5568",
        },
        background: "#FFFFFF",
        foreground: "#001F5C",
        navy: {
          DEFAULT: "#001F5C",
          deep: "#00102E",
          muted: "#2D3748",
        },
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      boxShadow: {
        pill: "0px 10px 28px rgba(0, 31, 92, 0.28)",
        card: "0px 4px 24px rgba(0, 31, 92, 0.07)",
      },
      keyframes: {
        "vertical-card-sweep": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "vertical-card-sweep":
          "vertical-card-sweep 0.75s cubic-bezier(0.33, 1, 0.68, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
