/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      width: {
        '5p': '5%',
      },
      height:{
        '3p':'65px',
      },
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: '#5B21B6',
          dark:'#1f2029',
        },
        secondary: {
          light: '#FDE68A',
          DEFAULT: '#FCD34D',
          dark: '#FBBF24',
        },
        borderRadius: {
          '10px': '10px',
        },
        customColor1: '#292b2f',
        customblue: '#5661b6',
        customgreen: '#2a94c2',
      },
      screens: {
        xs: { min: '300px', max: '452px' },
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

    },
  },
  plugins: [],
}

