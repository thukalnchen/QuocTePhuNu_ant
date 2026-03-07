import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float-heart': 'floatHeart 1.5s ease-out forwards',
        'petal-fall': 'petalFall linear infinite',
        'star-pulse': 'starPulse 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 182, 193, 0.4), 0 0 40px rgba(255, 182, 193, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(255, 182, 193, 0.3)' },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(0.3)', opacity: '0' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg) translateX(0)', opacity: '0.8' },
          '25%': { transform: 'translateY(22vh) rotate(90deg) translateX(15px)', opacity: '1' },
          '50%': { transform: 'translateY(50vh) rotate(180deg) translateX(-10px)', opacity: '0.9' },
          '75%': { transform: 'translateY(75vh) rotate(270deg) translateX(20px)', opacity: '0.7' },
          '100%': { transform: 'translateY(105vh) rotate(360deg) translateX(-5px)', opacity: '0' },
        },
        starPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
