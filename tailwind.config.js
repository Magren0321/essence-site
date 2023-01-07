/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        zoomIn:{
          'from':{opacity:0},
          '50%':{opacity:1}
        }
      },
      animation:{
        'zoomIn':'zoomIn 7s ease 1'
      },
      screens: {
        'sm': {'max':'700px'}
      }
    },
  },
  plugins: [],
}