/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-50': '#bbc3f7',
        'blue-800': '#2c5282',
        'red-600': '#e53e3e',
        'red-500': '#f56565',
      },
    },
  },
  plugins: [],
}
