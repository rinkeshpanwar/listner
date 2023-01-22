/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Roboto Slab', serif",
        secondary: "'Ubuntu', sans-serif",
      },
      colors: {
        primary_black: "#1F1F1F",
        primary_white: "#F1F1F1"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}