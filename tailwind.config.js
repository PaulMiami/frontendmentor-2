const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        lighterGrayishCyan: "hsl(180, 81%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
