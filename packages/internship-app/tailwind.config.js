/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bg: {
          1: "#F7FBFC",
          2: "#E4EDF2",
        },
      },
    },
  },
  plugins: [],
};
