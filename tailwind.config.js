/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slateDark: "#0B0F17",
        slateSurface: "#101725",
        slateElevated: "#151E30",
        slateInput: "#0D131F",
        cobalt: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["'Manrope'", "sans-serif"],
        heading: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"], // taste-skill-ignore
      },
      boxShadow: {
        overlay: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
