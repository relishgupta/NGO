/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gr':'#386641',
        'ltgr':'#6a994e',
        'gra':'#a7c957',
        'crm':'#f2e8cf',
        'mrn':'#bc4749',
      },
      screens:{
        'sz':'1900px',
      },
    },
  },
  variants:{},
  plugins: [],
}