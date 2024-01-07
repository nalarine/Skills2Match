/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#0E64B4",
      green: "#9EDBA2",
      "light-blue": "#C5DFF8",
      "light-green": "#CAF0C7",
      "light-green-500": "B8E6B3",
      "dirty-white": "#FFF8F3",
      white: "#ffffff",
      gray: "#696D63",
      "gray-50": "#B1B1B1",
      yellow: "#FFF40A",
      "light-yellow": "#F7F1AB",
      "dark-yellow": "#E8A01A",
    },
    extend: {},
  },
  plugins: [],
};
