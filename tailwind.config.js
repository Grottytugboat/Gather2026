/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gather-green': '#10b981',
        'gather-green-dark': '#059669',
        'gather-green-light': '#34d399',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0 0 rgba(0, 0, 0, 1)',
        'brutal-lg': '12px 12px 0 0 rgba(0, 0, 0, 1)',
        'brutal-xl': '16px 16px 0 0 rgba(0, 0, 0, 1)',
        'brutal-dark': '8px 8px 0 0 rgba(255, 255, 255, 1)',
        'brutal-lg-dark': '12px 12px 0 0 rgba(255, 255, 255, 1)',
        'brutal-xl-dark': '16px 16px 0 0 rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}
