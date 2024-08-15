/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ["Raleway", 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}

