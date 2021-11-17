module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myviolet: {
          light: '#9f2aed',
          DEFAULT: "#8027b8",
          dark: '#5e0e93',
        },
      },
      fontFamily: {
        'body': ['"Vazir"', '"Open Sans"'],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
