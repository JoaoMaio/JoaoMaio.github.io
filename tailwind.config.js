/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Add this line for app directory
  ],
  theme: {
    extend: {
      colors: {
        "Gblack": "#2b5876",
        "Gpurple": "#4e4376",

        "cssColor": "#32a7dd",
        "htmlColor": "#e44d26",
        "angularColor": "#de3036",
        "aspnetColor": "#592c8d",
        "dockerColor": "#0db7ed",
        "drupalColor": "#0274ba",
        "phpColor": "#7378af",
      },
    },
  },
  plugins: [],
};
