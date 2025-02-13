/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        content: "#10131F",
        secondaryContent: "#506D85",
        customBlue: "#A9D18E",
        customLightBlue: "#E6F4EA",
        customGreen: "#74b14c",
        customBg: "#ECF3FF",
      },
    },
  },
  plugins: [],
};
