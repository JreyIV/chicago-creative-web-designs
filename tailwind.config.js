/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "36px"],
      "4xl": ["48px", "58px"],
      "6xl": ["64px", "80px"],
      "8xl": ["96px", "106px"],
      Mammoth: ["120px", "110px"],
    },
    extend: {
      fontFamily: {},
      screens: {
        wide: "1440px",
      },
      colors: {
        "off-white": "#fff7f0",
        "brand-green-800": "#05668d",
        "brand-green-600": "#028090",
        "brand-green-400": "#00a896",
        "brand-green-200": "#02c39a",
      },
    },
  },
  plugins: [],
};
