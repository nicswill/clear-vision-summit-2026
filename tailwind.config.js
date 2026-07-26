/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d4dde8',
          200: '#a9bbcf',
          300: '#7e98b6',
          400: '#4f6f97',
          500: '#2f4f78',
          600: '#1b3a5b',
          700: '#13315c',
          800: '#0c2545',
          900: '#081c36',
        },
        turquoise: {
          50: '#effaf8',
          100: '#d7f1ee',
          200: '#b0e4dd',
          300: '#84d5cb',
          400: '#54c3b6',
          500: '#3aa89c',
          600: '#2d8a80',
          700: '#266e67',
          800: '#225752',
          900: '#1f4844',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f5e9cd',
          200: '#ecd49b',
          300: '#e0bd6a',
          400: '#d4a256',
          500: '#c08c42',
          600: '#a47235',
          700: '#835a2a',
          800: '#6b4a24',
          900: '#593e20',
        },
        sand: {
          50: '#faf6f0',
          100: '#f5ede1',
          200: '#ebe0cc',
          300: '#ddcaab',
          400: '#c9b08a',
          500: '#b59668',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out both',
        'fade-in-up': 'fade-in-up 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
