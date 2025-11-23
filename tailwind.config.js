/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a13", 
        secondary: "#12121f", 
        accent: "#7b82fe", 
        textGray: "#94a3b8"
      },
       fontFamily: {
        // Optional: Ensure you have a nice font like Inter or Poppins imported
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}