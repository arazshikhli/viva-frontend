/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
'./pages/**/*.{js,jsx,ts,tsx}',
'./components/**/*{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    padding:{
      big:'50px',
      small:'20px'
    },
    screens:{
      sm:'480px',
      md:'868px',
      lg:'1028px',
      xl:'1440px'
    }
  },
  plugins: [],
}

