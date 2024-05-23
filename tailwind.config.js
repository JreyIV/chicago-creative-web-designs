import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "26px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "36px"],
      "3.5xl": ["32px", "39.5px"],
      "4xl": ["48px", "58px"],
      "6xl": ["64px", "80px"],
      "8xl": ["96px", "106px"],
      Mammoth: ["120px", "110px"],
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        wide: "1440px",
      },
      colors: {
        "off-white": "#fff7f0",
        "dark-blue": "#6930c3",
        "brand-blue-800": "#5e60ce",
        "brand-blue-600": "#5390d9",
        "brand-blue-400": "#4ea8de",
        "brand-blue-200": "#48bfe3",
        "gradient-blue-400": "#b3beff",
        "gradient-blue-200": "#e6f2ff",
      },
    },
  },
  plugins: [daisyui],
};
