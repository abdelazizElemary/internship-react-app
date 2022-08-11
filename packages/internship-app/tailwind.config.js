/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // fontFamily: "General Sans",
    container: {
      center: true,
    },
    extend: {
      colors: {
        text: "#222529",
        blue: "#0316E1",
        darkblue: "#272D71",
        bluegrey: "#222529",
        bg: {
          1: "#F7FBFC",
          2: "#E4EDF2",
        },
      },
    },
  },
  plugins: [],
};
