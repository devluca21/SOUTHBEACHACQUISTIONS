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
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
