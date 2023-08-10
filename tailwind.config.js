/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'url(../assets/bg.jpg)'
      },
      colors: {
        'link-color': '#2563eb',
      },
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
