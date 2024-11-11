/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'scrollbar-track': '#f1f1f1',
        'scrollbar-thumb': '#888',
        'scrollbar-thumb-hover': '#555',
      },
      scrollbar: {
        thin: {
          '::-webkit-scrollbar': 'width: 8px',
          '::-webkit-scrollbar-track': 'background: #f1f1f1',
          '::-webkit-scrollbar-thumb': 'background: #888',
          '::-webkit-scrollbar-thumb:hover': 'background: #555',
        },
      },
    },
    fontFamily: {
      jetmono: ['JetBrains Mono', 'monospace'],
      inter: ['Inter', 'sans-serif'],
    },
    keyframes: {
      bounce: {
        '0%, 100%': {transform: 'translateY(0)'},
        '50%': {transform: 'translateY(-6px)'},
      },
      bounce2: {
        '0%, 100%': {transform: 'translateY(0)'},
        '50%': {transform: 'translateY(-3px)'},
      },
    },
    animation: {
      bounce: 'bounce 0.5s infinite',
      bounce2: 'bounce2 0.5s infinite',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({addComponents}) {
      addComponents({
        '.scrollbar-thin': {
          '::-webkit-scrollbar': 'width: 8px',
          '::-webkit-scrollbar-track': 'background: #f1f1f1',
          '::-webkit-scrollbar-thumb': 'background: #888',
          '::-webkit-scrollbar-thumb:hover': 'background: #555',
        },
      });
    },
  ],
};
