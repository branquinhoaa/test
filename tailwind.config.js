module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    fontFamily: {
      base: ['Avenir Next', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xlg: [
        '64px;',
        {
          lineHeight: ' 103.5%',
          fontWeight: '700',
        },
      ],

      lg: [
        '48px',
        {
          lineHeight: '111%',
          fontWeight: '700',
        },
      ],
      md: [
        '36px',
        {
          lineHeight: '135%',
          fontWeight: '700',
        },
      ],
      sm: [
        '24px',
        {
          lineHeight: '111%',
          fontWeight: '700',
        },
      ],
      xsm: [
        '12px',
        {
          lineHeight: '150%',
        },
      ],
    },
    screens: {
      xlg: { max: '1100px' },
      // => @media (max-width: 1023px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '640px' },
      // => @media (max-width: 639px) { ... }

      xsm: { max: '360px' },
      // => @media (max-width: 360px) { ... }
    },
    extend: {
      colors: {
        primary700: '#173C9D',
        primary800: '#112B78',
        secondary900: '#1B527C',
        secondary700: '#00ADD2',
        gray100: '#DBDBDB',
        gray200: '#616161',
        red: '#CB1D36',
      },
    },
  },
  plugins: [],
};
