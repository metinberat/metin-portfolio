import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f7f7f5",
          100: "#ececea",
          200: "#d8d8d3",
          300: "#b8b8b0",
          500: "#6f716d",
          700: "#3b3d3a",
          900: "#171817"
        },
        titanium: {
          50: "#fbfbfa",
          100: "#f3f3f0",
          200: "#e4e4df",
          300: "#cdcec8",
          500: "#92958f"
        }
      },
      boxShadow: {
        titanium: "0 24px 80px rgba(48, 52, 48, 0.14)",
        soft: "0 16px 45px rgba(44, 48, 44, 0.09)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
