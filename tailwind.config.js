/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#A2BFFE',
        'custom-white': '#E3E4ED'
      },
    },
  },
  plugins: [],
}