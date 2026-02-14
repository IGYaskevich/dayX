/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#F6F3EF",
          100: "#EDE8E2",
          200: "#E7E1DA",
          300: "#D7D1C9",
          400: "#C6BFB6",
          500: "#B8B2AB",
          600: "#9C968F",
          700: "#7B756E",
          800: "#5A554F",
          900: "#2E2B27",
        },
        gold: {
          50: "#F6F3EF",
          100: "#EDE8E2",
          200: "#E7E1DA",
          300: "#D7D1C9",
          400: "#C6BFB6",
          500: "#B8B2AB",
          600: "#9C968F",
          700: "#7B756E",
          800: "#5A554F",
          900: "#2E2B27",
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
        "hero-glow":
          "radial-gradient(60% 60% at 20% 10%, rgba(246, 243, 239, 0.75), transparent 70%), radial-gradient(50% 50% at 85% 20%, rgba(184, 178, 171, 0.25), transparent 70%), linear-gradient(180deg, #F6F3EF 0%, #E7E1DA 48%, #F6F3EF 100%)",
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
