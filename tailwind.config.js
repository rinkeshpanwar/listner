/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Roboto Slab', serif",
        secondary: "'Ubuntu', sans-serif",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}