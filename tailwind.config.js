/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'url(../assets/bg.jpg)',
        'header': 'url(../assets/bg-header.png)'
      },

      colors: {
        'link-color': '#2563eb',
        'hover-link': '#03428a'
      },
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
