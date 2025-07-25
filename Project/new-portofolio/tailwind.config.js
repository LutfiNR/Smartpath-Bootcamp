/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#987D9A',
        'secondary': '#FEFBD8',
      },
      textColor:{
        'primary': '#987D9A',
        'secondary': '#FEFBD8',
      },
      boxShadow:{
        'primary-sm' : '4px 4px 0px 0px rgba(152,125,154,0.4)',
        'primary-lg' : '8px 8px 0px 0px rgba(152,125,154,0.4)'
      },
      fontFamily:{
        "pixel" : "Pixelify Sans, sans-serif"
      }
    },
  },
  plugins: [],
}

