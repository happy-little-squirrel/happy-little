/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        montser: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
