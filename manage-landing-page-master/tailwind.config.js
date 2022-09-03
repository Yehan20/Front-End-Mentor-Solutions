/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px'
        
      },
    },
    extend: {
      colors:{
        'DarkBlue-clr':'hsl(228, 39%, 23%)'
      }
    },
  },
  plugins: [],
}
