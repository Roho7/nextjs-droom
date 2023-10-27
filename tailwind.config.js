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
