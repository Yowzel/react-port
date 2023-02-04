/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        'darkbg': '#2E446F',
        'lightfont' : '#DFE0C4',
        'complimentfont': '#71909F',
        'accentfont' : '#7E9940'
      },
    },
  },
  plugins: [],
};