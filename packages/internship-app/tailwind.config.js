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
                    3: "#E4E0E0",
                    4: "#F7FAFC",
                    8: "#4A5056",
                },
                white: {
                    1: "#FFFFFFCC",
                    2: "#FFFFFF",
                },
                bb: {
                    1: "#DFEBF2",
                    2: "#272D71",
                },
                pp: {
                    1: "#0316E1",
                    2: "#9314F5",
                },
                accent: {
                    1: "#0316E1",
                },
            },
        },
    },
    plugins: [],
};