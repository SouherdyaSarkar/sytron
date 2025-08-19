/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // make sure JSX files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        caprasimo: ['Caprasimo', 'serif'],
        inriaSans: ['"Inria Sans"', 'sans-serif'],
        inriaSerif: ['"Inria Serif"', 'serif'],
        instrument: ['"Instrument Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        zenDots: ['"Zen Dots"', 'cursive'],
      },
    },
  },
  plugins: [],
}

