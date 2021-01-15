module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': 'var(--black)',
      'dark-blue': 'var(--dark-blue)',
      'dark-blue-2': 'var(--dark-blue-2)',
      'opacity': 'var(--white-opacity)',
      'opacity-2': 'var(--white-opacity-2)',
      'green': 'var(--green)',
      'red': 'var(--red)',
    },
    fontSize: {
      'xzs': 'var(--fz-xxs)',
      'xs': 'var(--fz-xs)',
      'sm': 'var(--fz-sm)',
      'base': 'var(--fz-md)',
      'lg': 'var(--fz-lg)',
      'xl': 'var(--fz-xl)',
      'xxl': 'var(--fz-xxl)',
      'heading': 'var(--fz-heading)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
