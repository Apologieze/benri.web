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
    },
  },
  plugins: [],
}
