/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgprimary: "#100F14",
        bgsecondary: "#22231E",
        primary: "#9CBE5D",
        secondary: "#CEBB5B",
        foreground: "#EDEDD5",
      },
      screens: {
        pc: "1440px"
      },
      boxShadow: {
        "girl": "inset 0 0 40px 60px #100F14",
        "girl-lg": "inset 0 0 30px 79px #100F14"
      }
    },
  },
  plugins: [],
}
