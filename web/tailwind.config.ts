import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0a',
        card: '#171717',
        accent: '#22C55E',
        surface: '#111111',
        muted: '#646464'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(34, 197, 94, 0.18)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};

export default config;
