/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
       
        jakarta_light: ['Jakarta-Light'],
        jakarta_regular: ['Jakarta-Regular'],
        jakarta_medium: ['Jakarta-Medium'],
        jakarta_bold: ['Jakarta-Bold'],
      },
    },
  },
  plugins: [],
}

