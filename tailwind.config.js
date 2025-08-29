/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['var(--font-caveat)', 'cursive'],
      },
      colors: {
        'navy-blue': '#000080',
        'gold': '#FFD700',
      },
    },
  },
  plugins: [],
}

