/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#030611",
          900: "#060B18",
          850: "#091024",
          800: "#0D172E",
          700: "#132142",
          border: "rgba(30, 107, 255, 0.16)",
          borderHover: "rgba(0, 210, 255, 0.4)",
        },
        electric: {
          blue: "#1E6BFF",
          blueDark: "#0A4AD1",
          cyan: "#00D2FF",
          sky: "#38BDF8",
          glow: "rgba(30, 107, 255, 0.35)",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["'Manrope'", "sans-serif"],
        sans: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        "blue-glow": "0 0 35px -5px rgba(30, 107, 255, 0.45)",
        "cyan-glow": "0 0 25px -5px rgba(0, 210, 255, 0.4)",
        "glass-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
