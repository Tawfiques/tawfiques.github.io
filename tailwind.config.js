/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valorantDark: '#0f0f1b',
        valorantRed: '#FF4655',
        valorantText: '#E6E8E8',
      },
      fontFamily: {
        valorant: ['VALORANT', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}

