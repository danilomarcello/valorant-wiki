/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'pop' : ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["autumn"],
  },
}
