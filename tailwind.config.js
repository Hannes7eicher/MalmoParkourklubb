/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ["Roboto Mono", 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
};
