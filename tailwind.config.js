const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {

  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'signature': "url('https://cdn2.bustle.com/nylon/2020/scribble-920a660055.svg')",
      })
    },    
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      'xs': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    letterSpacing: {
      insane: '-.050em',
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.025em',
       wider: '.05em',
      widest: '.1em',
      widest: '.25em',
     },

    backgroundPosition: {
      'top-5': 'right top 1rem',
      'bottom-5': 'right bottom -1rem',
    },
    padding:{
      'min-40': '-50px'
    }     
  },
  variants: {},
  plugins: [],
};