/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {      colors: {
        mosh: '#0EA5A4', // custom accent
      },
},
  },
  plugins: [],
}

