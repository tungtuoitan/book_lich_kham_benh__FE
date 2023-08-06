/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/*.{html,js,css}",

],
  theme: {
    extend: {
      
      spacing: {
        '350': '350px',
        'c72':'72px',
        'c30':'30px',

        'c24':'24px',

        'c18':'18px',
        'c14': '14px',
        'c12':'12px',
        'c10':'10px',

        'c7':'7px',
        'c6':'6px',
        'c5':'5px',
        'c4':'4px',

        '3':'3px',
        'c2':'2px',
        'c1':'1px',
        'c-3':'-3px',


      },
      screens: {
        '5': '550px',
        '7': '745px',
        '9': '950px',
        '11': '1130px',
      },
      colors:{
        'gray7':'#717171',
        'gray-B0':'#B0B0B0',
        'gray-EA':'#EAEAEA',
        'gray-unknown': '#BEB5AA'

      },
      fontSize:{
        '12':'12px',
        'c10': '10px',
        'c15': '15px',
        'c14': '14px',


      }

      
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

