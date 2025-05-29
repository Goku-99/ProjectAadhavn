/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C1A88A',
        'secondary-white': '#FFFFFF',
        'secondary-black': '#000000',
        accent: '#8B7355',
        neutral: '#F5F5F5',
      },
      fontFamily: {
        dancing: ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
};
