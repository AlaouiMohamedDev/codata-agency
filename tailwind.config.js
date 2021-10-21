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
        'offre':"url('/OffeBack.png')",
        'contact':"url('https://media.istockphoto.com/photos/contact-us-picture-id1049658692?k=20&m=1049658692&s=612x612&w=0&h=z3sXVbzDit8RKnsC0ihEuFub42FqfmbRcP4vWHOKLK4=')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
