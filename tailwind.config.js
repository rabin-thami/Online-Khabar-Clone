/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "color-default-white": "#FFFFFF",
      "color-primary-blue": "#2260BF",
      "color-primary-text-blue": "#102C57",
      "color-text-hover-blue": "#2260BF",
      "color-text-black-color": "rgba(0,0,0,.48);",
      "color-shadow-color": "#EBEBEB",
    },
    fontFamily: {
      Khand: ["Khand", "sans-serif"],
      Mukta: ["Mukta", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
};
