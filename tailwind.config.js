/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      lg: {max: '992px'},
      md: {max: '768px'},
      sm: {max: '480px'},
    },
    container: {
      center: true
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        lightOrange: '#FFA542',
        lightGray: '#EAEAEA',
      }
    },
  },
  plugins: [],
}