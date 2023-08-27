/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        clicker_script: ["Clicker Script", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "primary-text": "#67544E",
        "primary-bg": "#b4c5d5",
      },
    },
  },
  plugins: [],
};
