export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // include JSX files
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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // small lift
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite', // very slow + looping
      },
    },
  },
  plugins: [],
}