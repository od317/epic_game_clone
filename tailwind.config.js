/** @type {import('tailwindcss').Config} */

const { gray } = require('tailwindcss/colors')
const colors = require("tailwindcss/colors")


module.exports = {
  content: [
    './index.html',
     './src/App.vue',
    './src/assets/base.css',
    './src/**/*.{vue,js}'
  ],
  theme: {
    fontFamily: {
      'ss': ['"Kumbh Sans","sans"'],
    },
    extend: { 

      animation: {
        's1':'s1 .29s  ease-out ',
        's2':'s2 .29s  ease-out',
    },
      keyframes: {
       's1':{
        '0%': {
          'transform':'translateX(0%)',
          'opacity':'100',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateX(-10%)',
          'opacity':'0',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
      's2':{
        '0%': {
          'transform':'translateX(-80%)',
          'opacity':'0',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateX(-100%)',
          'opacity':'100',
           'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
    },

      gridTemplateRows: {
      // Simple 8 row grid
      '8': 'repeat(8, minmax(0, 1fr))',
      // Complex site-specific row configuration
    },
    gridRow: {
      'span-7': 'span 7 / span 7',
    },
    height: {
      '128': '30rem',
    },
      colors:{
        dark1:"#141414",
        dark2:"#262626",
        dark3:"#2e2e2e",
        dark4:'#212121',
        blue1:"#2172eb"

      },
      transitionDuration: {
        '0': '0ms',
        '5000': '6000ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}