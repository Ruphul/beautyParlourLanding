/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(-120px)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        wiggle: '3s wiggle 1s ease-in-out forwards',
        flip: 'flip 0.7s ease-in-out',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/bg1.png')",
        'lipstick': "url('/img/lipstick.png')",
        'haircut': "url('/img/haircut.png')",
      },
    },
  },
  plugins: [],
}