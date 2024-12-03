export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}"],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '50%' },
        },
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

