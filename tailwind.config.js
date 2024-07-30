/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Light Colors
        light: {
          primary: '#8F39A9',
          secondary: '#344563',
        },
        // Dark Colors
        dark: {
          primary: '#A951C4',
          secondary: '#5774A6',
        },
        // Functional Colors
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
        // Black Shades
        black: {
          1: '#000000',
          2: '#1D1D1D',
          3: '#282828',
        },
        // White
        white: '#FFFFFF',
        // Gray Shades
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}