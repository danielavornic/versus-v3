/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['var(--font-unbounded)'],
        okta: ['var(--font-okta)'],
      },
      colors: {
        'alm-white': '#E0E4EA',
        white: '#FAFAFA',
        tiktok: '#FF0050',
        instagram: '#E1306C',
        facebook: '#1877F2',
        youtube: '#CD201F',
        black: '#050505',
        gray: '#1E2124',
      },
      backgroundImage: {
        subscribeGradient:
          'conic-gradient(from 172deg at 50% -121.43%, #FFF 8.468311205506325deg, #FFF 46.63547158241272deg, #FFF 134.68545198440552deg, #FFF 204.3533420562744deg, #70D086 321.3072896003723deg)',
      },
      screens: {
        '1.5xl': '1400px',
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}
