/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#112106',
        'background': '#fcfefb',
        'primary': '#6fdb2d',
        'secondary': '#aa87ea',
        'accent': '#e461b7',
      },
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        heading: 'Bayon',
        body: 'Bayon',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            transform: "rotate(12deg)",
          },
          to: {
            transform: "rotate(360deg)",
          }
        }
      },
    },
  },
  plugins: [],
}

