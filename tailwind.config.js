/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },

    container: {
      center: true,
      padding: '20px',
      screens: {
        'sm': '540px',
        'md': '720px',
        'lg': '960px',
        'xl': '1140px',
        '2xl': '1320px'
      }
    },

    colors: {
      'primary': 'var(--color-primary)'
    },

    textColor: {
      'gray': '#444444'
    },

    fontSize: {
      '40': ['40px', { lineHeight: 'normal' }],
      '28': ['28px', { lineHeight: 'normal' }],
      '25': ['25px', { lineHeight: 'normal' }],
      '20': ['20px', { lineHeight: 'normal' }],
      '18': ['18px', { lineHeight: 'normal' }],
      '16': ['16px', { lineHeight: 'normal' }],
      '14': ['14px', { lineHeight: 'normal' }],
      '12': ['12px', { lineHeight: 'normal' }]
    }
  },
  plugins: []
}
