/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBeige: "#f8f7f3",
        customHomeButtonColor: "#F1D1FE",
        customBgBlue: "#E4F2FE",
        customHomeButtonHoverColor: "#e0a0fa",
      },
    },
  },
  plugins: [],
};
