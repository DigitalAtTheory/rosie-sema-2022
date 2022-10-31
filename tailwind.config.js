/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emprint: ["EMPrint"],
        sans: ["EMPrint", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
