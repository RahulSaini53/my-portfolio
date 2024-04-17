/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      borderWidth: {
        'half': 'calc(50% - 1px)', // Adjust the value according to your design needs
      },

    },
  },
  variants: {},
  plugins: [],
}

