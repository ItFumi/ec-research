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
        'thin_gray': '#D1D5DB'
      },
      boxShadow: {
        'sango': '0 3px 6px rgb(0 0 0 / 18%);',
        'sango_box': '0 0 3px 0 rgb(0 0 0 / 12%), 0 2px 3px 0 rgb(0 0 0 / 22%);'
      },
      width: {
        '1280': '1280px',
        '1024': '1024px',
        '768': '768px'
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
        },
        fadeInBottom: {
          'from': { transform: 'translate3d(0, 10%, 0)', opacity: '0' },
          'to': { transform: 'none', opacity: '1' },
        },
        rotateCategory: {
          'from': { transform: 'rotateZ(12deg)' },
          'to': { transform: 'rotateZ(372deg)' },
        }
      },
      animation: {
        contentsFadeIn: 'contentsFadeIn 1s ease both',
        fadeInTop: 'fadeInTop 0.5s linear 0s both',
        fadeInLeft: 'fadeInLeft 1.5s ease both',
        fadeInBottom: 'fadeInBottom 0.5s linear 0s both',
        rotateCategory: 'rotateCategory 0.5s linear',
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
