// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {
      keyframes: {
        movedown: {
          '0%': { opacity: '1', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        moveline: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        movedown: 'movedown 1s linear forwards',
        moveline: 'moveline 6s linear forwards',
      },
      colors: {
        white: '#fff',
        black: '#000',
      },
      spacing: {
        '50px': '50px',
        '80px': '80px',
        '100px': '100px',
        '340px': '340px',
      },
      borderRadius: {
        '6px': '6px',
      },
      fontSize: {
        '15px': '15px',
        '13px': '13px',
        '40px': '40px',
      },
      boxShadow: {
        default: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
