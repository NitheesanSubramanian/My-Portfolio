/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080808',
          surface: '#111111',
          card: '#151515',
          cardHover: '#1c1c1c',
          border: '#27272a',
          text: '#ffffff',
          muted: '#a1a1aa',
        },
        accent: {
          blue: '#3b82f6',
          electric: '#00d2ff',
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))' },
          'to': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
