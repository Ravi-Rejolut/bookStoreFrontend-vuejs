/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily:{
        sans:['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

