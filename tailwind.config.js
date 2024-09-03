import linebackground from "./src/Images/line background.png";
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js",'@tailwindcss/aspect-ratio'],
  theme: {
    extend: {
      colors: {
        // customColor: "#5F8575", // Replace with your hex color code
        headerColor: "#333333", // Replace with your hex color code
        customGreen: "#32C86E", // Replace with your hex color code
        customGrey: "#393E46", // Replace with your hex color code
        customGray2: "#8C8C8C",
        final: "var(--final)",
        "primary-green": "var(--primary-green)",
      },
    },
  },
  plugins: [require("flowbite/plugin"),require('@tailwindcss/aspect-ratio')],
};
