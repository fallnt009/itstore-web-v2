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
