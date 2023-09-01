/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'mobile-light': "url('/assets/bg-mobile-light.jpg')",
        'mobile-dark': "url('/assets/bg-mobile-dark.jpg')",
        'desktop-light': "url('/assets/bg-desktop-light.jpg')",
        'desktop-dark': "url('/assets/bg-desktop-dark.jpg')",
      },
      colors: {
        // primary
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-background':
          'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        // light
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-gray-blue': 'hsl(236, 33%, 92%)',
        'light-gray-blue': 'hsl(233, 11%, 84%)',
        'dark-gray-blue': 'hsl(236, 9%, 61%)',
        'very-dark-gray-blue': 'hsl(235, 19%, 35%)',
        // dark
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-gray-blue': 'hsl(234, 39%, 85%)',
        'light-gray-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-gray-blue': 'hsl(234, 11%, 52%)',
        'very-dark-gray-blue': 'hsl(233, 14%, 35%)',
        'very-dark-gray-blue': 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '18px' },
      });
    }),
  ],
  darkMode: 'class',
};
