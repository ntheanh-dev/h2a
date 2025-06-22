/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#caf0f8',
          100: '#ade8f4', 
          200: '#90e0ef',
          300: '#48cae4',
          400: '#00b4d8',
          500: '#0096c7',
          600: '#0077b6',
          700: '#023e8a',
          800: '#03045e',
          900: '#03045e',
        },
        // Định nghĩa các màu cơ bản
        blue: {
          50: '#caf0f8',
          100: '#ade8f4',
          200: '#90e0ef', 
          300: '#48cae4',
          400: '#00b4d8',
          500: '#0096c7',
          600: '#0077b6',
          700: '#023e8a',
          800: '#03045e',
          900: '#03045e',
        }
      },
    },
  },
  plugins: [],
} 