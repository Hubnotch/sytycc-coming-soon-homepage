/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgBack': "url('./assets/bgcomingsoon.jpg')",
        'bgCarousel': "url('./assets/coming-soon.jpeg')",
      }
    },
  },
  plugins: [],
}