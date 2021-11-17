module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-violet': {
          light: '#9f2aed',
          DEFAULT: "#8027b8",
          dark: '#5e0e93',
        },
        'my-silver': {
          light: '#f6f4f7',
          DEFAULT: "#f5f3f7",
          dark: '#edebf0',
        },
      },
      fontFamily: {
        'body': ['"Vazir"', '"Open Sans"'],
      },
      minWidth: {
        '100': '100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
