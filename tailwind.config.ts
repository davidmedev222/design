import type { Config } from 'tailwindcss'

const config: Config = {
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
        marquee: 'marquee 40000ms linear infinite',
        marquee2: 'marquee2 40000ms linear infinite',
        'scale-in': 'scale-in 1000ms linear forwards'
      },
      animationDuration: {
        25000: '25000ms'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
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
  plugins: [require('tailwindcss-animated')]
}
export default config
