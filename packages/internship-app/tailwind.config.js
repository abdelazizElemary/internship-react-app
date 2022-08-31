/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      balabizo: "#272D71",
      white: "#FFFFFF",
      "purple-1": "#0316E1",
      "purple-2": "#9314F5",
      "grey-1": "#E4E0E0",
      "grey-2": "#E4EDF2",
      "grey-3": "#F7FBFC",
      "Blue-Grey-07": "#6E757C",
      "Blue-Grey-08": "#4A5056",
      "Blue-Grey-10": "#222529",
    },
    extend: {
      colors: {
        bg: {
          1: "#F7FBFC",
          2: "#E4EDF2",
        },
      },
      height: {
        18: "4.564rem",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      inset: { 405: "405px", 301: "301px" },
    },
  },
  plugins: [],
};
