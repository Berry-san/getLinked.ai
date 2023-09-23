/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
        darkPink: '#D434FE',
        pink: '#FF26B9',
      },
      fontFamily: {
        sans: ['Clash Display', 'system-ui'],
        montSerrat: ['Montserrat', 'system-ui'],
        mono: ['Unica One', 'system-ui'],
      },
    },
  },
  plugins: [],
}
