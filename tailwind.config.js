/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gr':'#5c8148',
        'ltgr':'#76a45b',
        '2ltgr':'#8bb650',
        'gra':'#a1c181',
        'ltyl':'#d6ec89',
        '4ltgr':'#b3e093',
      },
      screens:{
        'sz':'1900px',
      },
    },
  },
  variants:{},
  plugins: [],
}