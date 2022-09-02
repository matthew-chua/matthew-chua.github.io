/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beba: ['Bebas Neue', 'cursive'],
        title: ['Monoton', 'cursive'],
      }
    },
  },
  plugins: [],
}