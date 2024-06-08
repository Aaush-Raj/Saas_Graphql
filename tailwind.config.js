/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#051DA0",
        "secondary-color":"#",
        "text-color":"#051DA0",
      }
    },
  },
  plugins: [],
}