/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    
  ],
  assetsInclude:["**/*.JPG"],
  theme: {
    extend: {},
    fontFamily: {
      "fira" : ['Fira Sans Condensed', "sans-serif"],
      "libre": ['Libre Franklin', "sans-serif"],
      "monts": ['Montserrat'," sans-serif"]
    },
    colors: {
      "olive": "#232F27",
      "sage": "#A4B091",
      "darkcho": "#1D0D0C",
      "lightcho": "#938274",
      "ivory": "#F9FBF2",
    },
    backgroundImage: {
      "header": "url('/src/assets/IMG_2419.JPG')",
    },
    dropShadow: {
      '4xl': [
        '5px 5px rgba(29, 13, 12, 0.75)',
      ],
      '5xl': [
        '-10px 10px 2px rgba(29, 13, 12, 0.75)',
      ]
    }
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

