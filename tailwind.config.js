/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#2a206a',
      secondary: '#00e4a1',
      red: '#E11D48',
      blue: '#05C1FF',
      green: '#6aa84f',
      gray: '#cacaca',
      lightgray: '#f4f4f4',
      white: '#fff',
      black: '#2f2f2f'
    }
  },
  plugins: [],
}

