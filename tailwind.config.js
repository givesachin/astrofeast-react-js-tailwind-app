/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'Staatliches': ['Staatliches'],
      },
      colors: {
        'blue': '#2C488E',
        'green': '#BDC695',
        'yellow': '#F4A73F',
        'gray-100': '#F9FAFB',
        'gray-300': '#F5F7FB',
        'gray-600': '#838282',
        'gray-900': '#070123',
      },
      screens: {
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    },
    plugins: [],
  }
}