module.exports = {
  purge: {
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}',
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
