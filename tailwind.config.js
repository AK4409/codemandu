/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#2d3142",
        ink: "#3d4152",
        brand: {
          from: "#6c63d6",
          to: "#49a6ea",
          DEFAULT: "#6c63d6",
        },
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6c63d6 0%, #49a6ea 100%)",
      },
    },
  },
  plugins: [],
};
