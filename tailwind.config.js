/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
