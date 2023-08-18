/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins'],
      },
      colors: {
        'main': '#53AFE2',
        'main-dark': '#309CD6',
        'main-light': '#83C9EE',
        'off-black': '#121212',
        'off-gray': '#0D0D0D',
        'off-white': '#FAFAFA',
        'off-white-darker': '#DFDFDF',
      }
    },
  },
  plugins: [],
}

