/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7fb",
          100: "#fdeff6",
          200: "#f9dfe9",
          300: "#f4c6d7",
          400: "#eaa7c1",
          500: "#de89ac",
          600: "#c86c93",
          700: "#a9567b",
          800: "#8a4665",
          900: "#6c3750",
        },
        skyrose: {
          50: "#f7f6ff",
          100: "#f0efff",
          200: "#dcd9ff",
          300: "#c1bbff",
          400: "#a59dff",
          500: "#8b80ff",
          600: "#7266f0",
          700: "#5a52c7",
          800: "#48429c",
          900: "#3a3678",
        },
        sand: {
          50: "#fbfaf8",
          100: "#f6f1ea",
          200: "#efe4d8",
          300: "#e5d1bf",
          400: "#d6b59f",
          500: "#c6997f",
          600: "#b07f65",
          700: "#8f654f",
          800: "#6f4f3f",
          900: "#553c30",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(140, 98, 124, 0.45)",
        card: "0 18px 50px -30px rgba(80, 40, 70, 0.35)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(60% 60% at 20% 10%, rgba(244, 198, 215, 0.45), transparent 70%), radial-gradient(50% 50% at 85% 20%, rgba(168, 187, 255, 0.35), transparent 70%), linear-gradient(180deg, #fdf7fb 0%, #f8f5ff 45%, #fbfaf8 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
