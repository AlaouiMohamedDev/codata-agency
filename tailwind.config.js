module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'commerce': "url('/vitrine-2.png')",
        'vitrine':"url('/bg-commerce2.png')",
        'gestion':"url('/gestion-pic.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
