/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          // css: {
          //   code: {
          //     color: "#333",
          //     "@apply bg-gray-50 text-gray-700": "",
          //   },
          //   "code::before": {
          //     content: '""',
          //   },
          //   "code::after": {
          //     content: '""',
          //   },
          // },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
