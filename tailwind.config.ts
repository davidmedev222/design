import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'fluid-8xl': 'min(10vw,90px)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'scale-in': 'scale-in 300ms linear forwards'
      },
      keyframes: {
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.90)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      rotate: {
        24: '24deg'
      }
    }
  },
  plugins: [require('tailwindcss-animated'), require('@tailwindcss/forms')]
}
export default config
