import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        accent: "#F97316",

        bg: "#FFFFFF",
        "bg-soft": "#F8FAFC",

        text: "#0F172A",
        "text-secondary": "#64748B",

        border: "#E2E8F0",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
