/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#21B3FF',
        customShadow:'#0E77FF26',
        CustomLightBlue:'#16B2FF17',
        CustomDarkBule:'#0E77FF',
        customCurrencyColor:'#0000001C',
        customHeading:'#8990AD'
      }
    },
  },
  plugins: [],
}

