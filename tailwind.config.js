/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       'kaiba-grey': {
          '50': '#f8f8f8',
          '100': '#f0f0f0',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#aeaeae',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
          '950': '#282828',
       },'kaiba-blue': {
    '50': '#f6f7f9',
    '100': '#e9edf2',
    '200': '#d3dfe8',
    '300': '#aec8db',
    '400': '#86afd0',
    '500': '#6293cb',
    '600': '#4c7bc2',
    '700': '#4069b5',
    '800': '#355497',
    '900': '#2d487c',
    '950': '#142343',
},

       'kaiba-red': {
          '50': '#fcf3f8',
          '100': '#fae9f4',
          '200': '#f6d4e9',
          '300': '#f1b0d7',
          '400': '#e680bb',
          '500': '#db59a0',
          '600': '#c83a81',
          '700': '#ad2967',
          '800': '#8f2556',
          '900': '#631d3d',
          '950': '#480f29',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
