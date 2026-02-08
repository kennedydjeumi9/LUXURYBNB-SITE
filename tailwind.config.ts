import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gold: {
          50: '#FFF9E6',
          100: '#FFF1BF',
          200: '#FFE680',
          300: '#FFD94D',
          400: '#F5C242',
          500: '#D4AF37',
          600: '#B8952E',
          700: '#8F7424',
          800: '#6B571B',
          900: '#4A3D13'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem'
        }
      }
    }
  },
  plugins: [],
} satisfies Config
