/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    extend: {
      colors: {
        "fp-blue-900": "#337AB7",
        "fp-blue-100": "#D6EEFF",
      },
    },
  },
  plugins: [],
};
