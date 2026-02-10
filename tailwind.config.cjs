/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#ffffff",
          100: "#F6F3EF",
          200: "#EFEAE3",
          300: "#E7E1DA",
          400: "#D6CFC6",
          500: "#B8B2AB",
          600: "#9D978F",
          700: "#7A756F",
          800: "#595552",
          900: "#2B2B2B",
        },
        gold: {
          50: "#F9F6F1",
          100: "#F2EBDD",
          200: "#E6D8BE",
          300: "#D6C59F",
          400: "#C7B28A",
          500: "#B59C72",
          600: "#9C825B",
          700: "#7F6A49",
          800: "#5E4F37",
          900: "#3F3627",
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
        "hero-glow": "radial-gradient(60% 60% at 20% 10%, rgba(231, 225, 218, 0.65), transparent 70%), radial-gradient(50% 50% at 85% 20%, rgba(199, 178, 138, 0.25), transparent 70%), linear-gradient(180deg, #F6F3EF 0%, #E7E1DA 45%, #F6F3EF 100%)",
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
