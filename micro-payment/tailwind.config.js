module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#056b7e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
