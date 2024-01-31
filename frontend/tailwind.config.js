/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      display: ["responsive", "group-hover"],
      textDecoration: ["responsive", "hover", "focus", "group-hover"],
      colors: {
        ase: {
          "primary-blue": "#006ec7",
          "blue-2": "#005c9e",
          "blue-3": "#003d69",
          "blue-4": "#062d47",
          "secondary-mustard": "#c8b700",
          "tertiary-warmgrey": "#887d75",
          "tertiary-grey": "#dcd9d7",
          "tertiary-grey-light": "#e8e4e1",
          "tertiary-grey-lighter": "#f3f2f1",
        },
      },
    },
  },
  plugins: [],
};
