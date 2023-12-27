/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3abf47',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#03cc00',
      'background': '#3f3cbb',
      'light-1': '#ae00ff',
      'light-2': '#1DB954',
      'light-3': '#1DB954',
      'dark-1': '#1f1e1e',
      'dark-2': '#0f766e',
      'dark-3': '#053a5f',
      'text-1': '#fffff',
      'text-2': '#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
}
