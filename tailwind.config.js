/** @type {import('tailwindcss').Config} */
// ES Module syntax
export default {
  content: [
    "./index.html",            
    "./src/**/*.{js,jsx}"      
  ],
   darkMode: "class",
   theme: {
    extend: { 
      colors: { accent: '#d946ef' }
    },               
  },
  plugins: [],
};
