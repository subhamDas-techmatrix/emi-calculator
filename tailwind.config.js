/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#4CAF50',
      primary_light: '#81C784',
      secondary: '#87CEEB',
      neutral: '#F5F5DC',
      highlight: '#D4AF37',
      text: '#333333',
      text_light: '#666666',
      text_dark: '#000000',
      error: '#FF5252',
      success: '#388E3C',
      disabled: '#E6E6E6',
    },
    extend: {},
  },
  plugins: [],
};
