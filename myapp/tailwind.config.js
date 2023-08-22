/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e8e9ed',
        'secondary': '#babfd1',
        'mild-blue': '#607196',
        'pink': '#ff7b9c',
        'mustard': '#ffc759'
      },
    },
  },
  plugins: [],
}
