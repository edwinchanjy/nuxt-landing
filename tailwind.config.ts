/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway Flex', 'sans-serif'],
    },
    extend: {
      colors: {
        amber: {
          DEFAULT: '#FBBF24',
          50: '#FEF4D8',
          100: '#FEEEC4',
          200: '#FDE29C',
          300: '#FCD674',
          400: '#FCCB4C',
          500: '#FBBF24',
          600: '#E3A504',
          700: '#AC7D03',
          800: '#755502',
          900: '#3D2D01',
          950: '#221901',
        },
        lavender: {
          DEFAULT: '#B5A6F1',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F0EDFC',
          400: '#D2C9F7',
          500: '#B5A6F1',
          600: '#8D76E9',
          700: '#6445E2',
          800: '#4320CE',
          900: '#33199E',
          950: '#2C1586',
        },
        font: {
          DEFAULT: '#2B2B2B',
          50: '#878787',
          100: '#7D7D7D',
          200: '#686868',
          300: '#545454',
          400: '#3F3F3F',
          500: '#2B2B2B',
          600: '#0F0F0F',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.0s ease-in-out',
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
          '0%': {
            position: 'relative',
            bottom: '-30px',
            opacity: '0.0',
          },
          '100%': {
            position: 'relative',
            bottom: '0px',
            opacity: '1.0',
          },
        },
      },
    },
  },
  plugins: [],
}
