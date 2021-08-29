module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': ['Heebo,Helvetica Neue,sans-serif']
    },
    extend: {
      colors: {
        'amber': '#FFF100',
        'gray': '#383838',
      },
      keyframes: {
        contentsFadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInTop: {
          'from': { transform: 'translate3d(0, -10%, 0)', opacity: '0' },
          'to': { transform: 'none', opacity: '1' },
        },
        fadeInLeft: {
          'from': { transform: 'translate3d(-10%, 0, 0)', opacity: '0' },
          'to': { transform: 'none', opacity: '1' },
        }
      },
      animation: {
        contentsFadeIn: 'contentsFadeIn 1s ease both',
        fadeInTop: 'fadeInTop 0.5s linear 0s both',
        fadeInLeft: 'fadeInLeft 1.5s ease both'
      }
    }
  },
  variants: {
    extend: {opacity: ['disabled'],cursor: ['disabled']},
  },
  plugins: [require('@tailwindcss/forms')],
}
