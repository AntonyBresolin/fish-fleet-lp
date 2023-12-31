/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          highlight: '#6502D4',
          contrast: '#3D0053'
        },
        amber: '#F7BD2E',
        fiels: '#F0F0F7',
      },
      fontFamily: {
        'impact': 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
        'lato': 'Lato, sans-serif',
        body: ['Roboto']
      }
    },
    backgroundImage: {
      'first-page': "url('./assets/image/firstPage.png')",
      'first-page-mobile': "url('./assets/image/tubaraoMobile.png')",
      'second-page': "url('./assets/image/secondPage.png')",
      'second-page-mobile': "url('./assets/image/peperMobile.png')",
      'third-page': "url('./assets/image/thirdPage.png')",
      'third-page-mobile': "url('./assets/image/polvoMobile.png')",
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}