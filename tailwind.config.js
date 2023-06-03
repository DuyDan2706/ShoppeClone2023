/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      backgroundImage: () => ({
        'login-background':
          "linear-gradient(rgba(0,0,0, 0), rgba(0,0,0, 0)), url('https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD.png?alt=media&token=19abeb45-42d5-4bd4-9ae5-3316c36293bf&_gl=1*ivotd4*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTc1MDI2My4zOC4xLjE2ODU3NTAzNDkuMC4wLjA.')",
        // 'user-background':
        //   "linear-gradient(rgba(0,0,0, 0), rgba(0,0,0, 0)), url('https://vshare.amazingtech.vn/static/media/bg-body.85ea3fd6814234db8af1.jpg')",
      }),
     
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config,theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
   ],
}