/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          dark: "#1F2937", // Dark gray background
          greenAccent: "#10B981", // Green accents
        },
      },
    },
    plugins: [],
  };