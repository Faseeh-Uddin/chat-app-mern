/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#1476ff',
        'secondary': '#f3f5ff',
        'light': '#e8eaed',
        'dark-gray': '#333435',
        'light-gray': '#515253'
      }
    },
  },
  plugins: [],
}

