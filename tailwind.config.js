/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
   ["./src/**/*.{html,js}"]
  
  ,
  theme: {
 
    extend: {
      colors:{
        primary: {"50":"#141c42","100":"#0c1024", "200":"#1f2d70"}

      }    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
