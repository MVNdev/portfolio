/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#4a9d9c",

          "secondary": "#0D6E6E",

          "accent": "#afffff",

          "neutral": "#354656",

          "base-100": "#0D1F2D",

          "info": "#ffe0c8",

          "success": "#319d00",

          "warning": "#ffac4e",

          "error": "#FF3D3D",
        },
        light: {

          "primary": "#4a9d9c",

          "secondary": "#2a8180",

          "accent": "#afffff",

          "neutral": "#f5f5f5",

          "base-100": "#ffffff",

          "info": "#ffe0c8",

          "success": "#319d00",

          "warning": "#ffac4e",

          "error": "#FF3D3D",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

