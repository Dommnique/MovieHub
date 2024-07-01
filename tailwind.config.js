module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        midScreen: {'min': '300px', 'max': '1240px'}
      },
      colors: {
        darkModebg: "#071952"
      }
    },
  },
  plugins: [],
}
