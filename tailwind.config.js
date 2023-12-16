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
      },
      screens: {
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}
