/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },

      colors: {
        'map-water': '#030917',
        'map-land': '#141e43',

        'status-go': '#E8A300', // Go for launch
        'status-tbd': '#FEFEFF20', // TBD
        'status-success': '#4caf50', // Success
        'status-failure': '#FF0602', // Failure
        'status-hold': '#E8A300', // Hold
        'status-in-flight': '#01FFD8', // In flight

        'status-go-radial-gradient': 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(42, 100%, 45%, .8) 100%)'
      },
    },
  },
  plugins: [],
};
