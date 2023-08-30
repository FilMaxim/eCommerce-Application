/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        colors: {
          'primary': '#000000',
          'secondary': '#DB4444'
        }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
