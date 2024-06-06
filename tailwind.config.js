/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./src/js/script.js'],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        sans:["iranyekan"],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      keyframes: {
        down: {
          '0%': { transform: 'translateY(-200%)' },
        
          '100%': { transform:  'translateY(0)' },
        },
        right: {
          '0%': { transform: 'translateX(200%)' },
        
          '100%': { transform:  'translateX(0)' },
        },
        zoom: {
          '0%': { transform: 'scale(0)' },
        
          '100%': { transform:  'scale(1)' },
        },
      },
      animation: {
        'slide-down': 'down 1.5s linear',
        'slide-right': 'right 1.5s',
        'zoom-out':'zoom 1.5s',
      },
     
    },
  },
  plugins: [],
}