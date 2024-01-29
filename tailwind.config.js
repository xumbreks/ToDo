/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter, sans-serif",
      },
      colors: {
        base: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        product: {
          100: "#8284FA",
          200: "#5E60CE",
          300: "#4EA8DE",
          400: "#1E6F9F",
        },
        feedback: {
          500: "#E25858",
        },
      },
    },
  },
  plugins: [],
};
