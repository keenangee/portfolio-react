/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#F2CFFF",
        light: "#ce83ff",
        primary: "#CE4BFF",
        dark: "#A27AC4",
        darkest: "#201a44",
      },
    },
  },
  plugins: [],
};
