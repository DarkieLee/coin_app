/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Arial, Helvetica, sans-serif'
    },
    boxShadow: {
      'xs': '1px 1px 8px 1px #888888'
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
    },
    keyframes: {
      bounce: {
        '0%, 100%': {transform: 'translateY(0)'},
        '50%': {transform: 'translateY(-15px)'}
      }
    },
    animation: {
      bounce: 'bounce 2s infinite'
    },
    screens: {
      'sm': {'max': '500px'},
      'md': {'max': '800px'}
    }
  },
  plugins: [],
}

