/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#DB4444',
        'secondary-light': '#f8cece'
      },
      backgroundImage: {
        'burger-bender': "url('/src/assets/burger-bender.webp')",
        'footer-bender': "url('/src/assets/footer-bender.webp')",
      },
      gridTemplateRows: {
        'catalog-cards': '14rem 9rem 2.5rem 2.5rem',
      },
      gridTemplateColumns: {
        'filters': 'auto auto',
        'catalog-cards': 'repeat(auto-fill, minmax(14rem, auto))',
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
