import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5BFF",
        "primary-dark": "#1A3FCC",
        accent: "#FF6B26",
        "accent-strong": "#E85010",

        bg: "#FFFFFF",
        "bg-soft": "#EEF2FF",

        text: "#0B1220",
        "text-secondary": "#475569",

        border: "#C7D2FE",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      boxShadow: {
        soft: "0 10px 32px rgba(45, 91, 255, 0.08)",
        glow: "0 8px 28px rgba(45, 91, 255, 0.2)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
