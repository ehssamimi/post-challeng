/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
      "./pages/**/*.{html,js}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        Malachite:'#00C853',
        funGreen:'#00712F',
        Persimmon:'#FE5656',
        MineShift:'#373737',
        Mercury:"rgba(229, 229, 229,0.2)",
        Boulder:'#7B7B7B',
        loginBackground:'#FAFAFA',
        blackLight:"rgba(0, 0, 0, 0.2)"
      },

      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        top: 'top',

        'right-center-16': ' right 16px center ',
        'left-center-16': ' left 16px center ',
      },
      fontsize:{
        '45px': ['45px', '78px'],
      },
      borderRadius: {
        '15px': '15px',
      },
      boxShadow: {

        'submitBtn': '0 5px 10px rgba(0, 200, 83, 0.25)',
        'search': '0 0 10px rgba(0, 0, 0, 0.05)',
        'search-focus': '0 0  10px rgba(0, 148, 255, 0.1)',
        'search-active': ' 0 0 10px rgba(0, 0, 0, 0.1)',
        'category': ' 0 0 30px rgba(0, 0, 0, 0.1)',
        'narrowBtn': '  0 0 10px rgba(0, 200, 83, 0.1)',
        'arrowHover': '0 5px 10px rgba(0, 200, 83, 0.25)',
      },
      dropShadow: {
        'xmd': '0 5px 10px rgba(0, 200, 83, 0.25)',
        'header':'0px 0px 40px rgba(0, 0, 0, 0.05)',
        'search':'0px 0px 10px rgba(0,0,0,0.1)',
        'button': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        "IRANYekanFN": ["IRANYekanFN"],
        "IRANYekan": ["IRANYekan"],
        "IRANSans": ["IRANSans"],
      },
      aria: {
        loading: 'status="loading"',
        disabled: 'status="disabled"',
      },
    },
  },
  plugins: [],
}