/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // For reusable components
  ],
  theme: {
    extend: {
      colors: {
        "Gblack": "#2b5876",
        "Gpurple": "#4e4376",
      },
    },
  },
  plugins: [],
};
