module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-moon": "#150050",
        "dark-gray": "#121212",
        "figma-blue": "#03506F",
      },
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        merriweather: ["merriweather", "sans-serif"],
      },
      height: {
        "half-screen": "50vh",
        "image-size": "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
