

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      // add kiya hai extra error aane par htaa skte hai
      colors: {
        customGray: 'rgb(45, 45, 45)',
      },
      // add wala close 
    },
  },
  plugins: [],
}



