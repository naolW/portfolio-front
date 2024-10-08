/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue1: "#141520",
        darkBlue2: "#063970",
        cyan1: "#96FCFF",
        lightGreen1: "#06B800",
        lightBlue1: "#1F85DE",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        // rotate: "rotate 15s linear infinite",
        // fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        // rotate: {
        //   "0%": { transform: "rotate(-360deg)" },
        //   "100%": { transform: "rotate(360deg)" },
        // },
        // fadeIn: {
        //   "0%": { opacity: 0 },
        //   "100%": { opacity: 1 },
        // },
      },
    },
  },
  plugins: [],
};
