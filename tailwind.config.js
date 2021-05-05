module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto']
      },
      colors:{
        'csi-primary':'#4F588C',
        'csi-second':'#75BFBF',
        'csi-blue-gray':'#99A3BF',
        'csi-sky-blue':'#ADD9D9',
        'csi-bg-color':'#E4F2F1',
        'csi-blue-gray-dark':'#7B85A6',
        'csi-nav':'#EBF2F2',
        'perpul':'#9a649e'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
