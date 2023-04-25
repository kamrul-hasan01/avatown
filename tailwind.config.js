/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {},
  },
  plugins: [],
};
