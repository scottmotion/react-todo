/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      content: {
        'header-mobile-light': "url('/assets/bg-mobile-light.jpg')",
        'header-mobile-dark': "url('/assets/bg-mobile-dark.jpg')",
        'header-desktop-light': "url('/assets/bg-desktop-light.jpg')",
        'header-desktop-dark': "url('/assets/bg-desktop-dark.jpg')",
      },
      colors: {
        // primary
        'bright-blue': 'hsl(220, 98%, 61%)', // active filter text
        'check-bg-start': 'hsl(192, 100%, 67%)', // check bg gradient start
        'check-bg-end': 'hsl(280, 87%, 65%)', // check bg gradient end

        // light mode
        'very-light-gray': 'hsl(0, 0%, 98%)', // body bg
        'very-light-gray-blue': 'hsl(236, 33%, 92%)', // light mode borders
        'light-gray-blue': 'hsl(233, 11%, 84%)', // completed todo text
        'dark-gray-blue': 'hsl(236, 9%, 61%)', // inactive grey text, input placeholder
        'very-dark-gray-blue': 'hsl(235, 19%, 35%)', // todo text

        // dark mode
        'very-dark-blue': 'hsl(235, 21%, 11%)', // body bg
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)', //todo list bg
        'light-gray-blue': 'hsl(234, 39%, 85%)', // todo text
        'light-gray-blue-hover': 'hsl(236, 33%, 92%)', // hover filter text
        'dark-gray-blue': 'hsl(234, 11%, 52%)',
        'very-dark-gray-blue': 'hsl(233, 14%, 35%)', // completed todo text
        'very-dark-gray-blue-2': 'hsl(237, 14%, 26%)', // dark mode borders
      },
      boxShadow: {
        '3xl-light': '0 35px 50px -15px rgba(194, 195, 214, 0.50)',
        '3xl-dark': '0 35px 50px -15px rgba(0, 0, 0, 0.50)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
