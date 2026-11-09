/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: "#0A0D14",
          card: "#121620",
          elevated: "#181F2C",
          hover: "#1D2535",
          border: "rgba(255, 255, 255, 0.08)",
        },
        brand: {
          orange: "#FF5500",
          hover: "#E64D00",
          accent: "#FF7700",
          subtle: "rgba(255, 85, 0, 0.10)",
          border: "rgba(255, 85, 0, 0.35)",
        },
        silver: {
          light: "#E2E8F0",
          DEFAULT: "#94A3B8",
          dark: "#64748B",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["'Manrope'", "sans-serif"],
        sans: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
