export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}"],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '50%' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

