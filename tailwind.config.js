/** @type {import('tailwindcss').Config} */ 

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors:{
    },
    extend: {
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        montser: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({addBase}) => {
      addBase({
        '.scrollbar::-webkit-scrollbar' : {
          display: 'none'
        }
      })
    })],
};


