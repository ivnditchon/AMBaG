/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: '',
  theme: {
    extend: {
      colors: {
        'green': '#009865',
        'darkGreen': '#01452e',
        'lightGreen': '#00ffd4',
        'softGreen': '#52b788',
        'softGray': '#dee2e6',
        'gray': '#343a40',
        'darkGray': '#212529',
        'lightGray': '#f8f9fa',
        'darkBlue': '#0a007e',
        'black': '#000000',
        'softBlack': '#161717'
      },
      fontFamily: {
        'primary': 'Poppins'
      },
      screens: {
        // => @media (min-width: 400px) 
        'xs': '400px',
        // => @media (min-width: 640px) 
        'sm': '640px',
        // => @media (min-width: 768px)
        'md': '768px',
        // => @media (min-width: 1024px)
        'lg': '1024px',
        // => @media (min-width: 1280px) 
        'xl': '1280px',
        // => @media (min-width: 1536px)
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

