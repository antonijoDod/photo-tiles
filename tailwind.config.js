const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        pink: {
          ...colors.pink,
          '300': "#DCB9CB",
          '500': "#F20977"
        },
        black: "#1D0D14",
        white: "#FEF4F9",
        gray: {
          ...colors.gray,
          '700': "#322D2F"
        }
      },
      fontSize: {
        '7xl': '4.75rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
