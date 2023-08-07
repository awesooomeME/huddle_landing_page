/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      violet: 'hsl(257, 40%, 49%)',
      soft_magenta: 'hsl(300, 69%, 71%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      normal: '400',
      heavy: '700'
    },
    screens: {
      desktop: '1000px'
    }
  },
  plugins: [],
}
