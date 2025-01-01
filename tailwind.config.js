/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#dddee0",
        "gray-medium": "#93949e",
        "dark-blue": "#0a0a23",
        "dark-gray": "#313146",
        "bright-blue": "#3E64FF",
      },
      fontFamily: {
        "open-sans-condensed": ['"Open Sans Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
