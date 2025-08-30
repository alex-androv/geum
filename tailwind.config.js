/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        550: '550',
      },
      fontFamily: {
        fliege: ['Fliege Mono', 'monospace'],
        rockwell: ['Rockwell', 'serif'],
      },
    },
  },
  plugins: [],
}
