/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        solid: "3px 3px 0px rgba(0, 0, 0, 1)",
      },
      colors: {
        base: {
          100: "#F0F0F1",
          500: "#C8C8C8",
        },
        mango: {
          500: "#FEC800",
        },
        tang: {
          500: "#E2442F",
        },
        grass: {
          500: "#11A265",
        },
      },
    },
  },
  plugins: [],
};
