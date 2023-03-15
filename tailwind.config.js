/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {    colors: {
      'havelock-blue': {
        '50': '#f1f7fd',
        '100': '#dfedfa',
        '200': '#c6dff7',
        '300': '#9fccf1',
        '400': '#71afe9',
        '500': '#458adf',
        '600': '#3b76d5',
        '700': '#3262c3',
        '800': '#2e519f',
        '900': '#2a467e',
    },

    }},

  },
  plugins: [],
}
