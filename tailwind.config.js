/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customPeach: "#E7816B",
        customLightPeach: "#FFAD9B",
        customBlack:"#1D1C1E",
        customDarkGrey: "#333136",
        customLightGrey:"#F1F3F5"
      },
      fontSize: {
        heading: "3rem",
        subHeading: "2.5rem",
        lightHeading: "1.25rem",
        bodyText:"1rem"
      },
      letterSpacing: {
        headerSpacing1: 2,
        headerSpacing2:5
      }
    }
  },
  plugins: [],
}
