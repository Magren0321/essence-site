/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: { //过度
        'height': 'height',
        'width': 'width',
       },
      keyframes:{ //动画
        zoomIn:{
          'from':{opacity:0},
          '50%':{opacity:1}
        }
      },
      animation:{ //动画
        'zoomIn':'zoomIn 7s ease 1'
      },
      screens: { //屏幕宽度
        'sm': {'max':'700px'}
      }
    },
  },
  plugins: [],
}