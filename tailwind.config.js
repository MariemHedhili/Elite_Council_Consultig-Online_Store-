/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
   },
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
      },
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-in-out',
        fadeOut: 'fadeOut 400ms ease-in-out',
      },
    },
  },
  plugins: [],
}

