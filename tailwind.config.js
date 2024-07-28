/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#171821',
        'light-green': '#29BD91',
        'medium-green':'#1F6153',
        'i-green':'#1E3F3B',


        'my-blue': '#1E3A8A',
        'my-red': '#EF4444',
        'my-yellow': '#F59E0B',
        'my-gray': '#6B7280',
        'my-dark': '#111827',
        'my-light': '#F3F4F6',
      },
      backgroundImage: {
        'gradient-left-right': 'linear-gradient(to left, #1A232F, #29BD91)',
      },

    },
  },
  plugins: [],
}
