import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1a6b3c',
          light: '#e8f5ee',
          mid: '#2d8f54',
        },
        bg: {
          DEFAULT: '#ffffff',
          2: '#f8f8f7',
          3: '#f2f2f0',
        },
        text: {
          DEFAULT: '#0d0d0c',
          2: '#5c5c58',
          3: '#9b9b97',
        },
        border: {
          DEFAULT: '#e5e5e2',
          2: '#d1d1cd',
        },
        beige: {
          DEFAULT: '#f5f0e8',
          2: '#ede5d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '100': '100px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.04)',
        elevated: '0 4px 24px rgba(0,0,0,.10), 0 1px 4px rgba(0,0,0,.06)',
      },
      borderRadius: {
        'btn': '8px',
        'btn-lg': '9px',
        'card': '12px',
        'card-lg': '16px',
        '20': '20px',
      },
      letterSpacing: {
        tightest: '-.03em',
        tighter: '-.02em',
        tight: '-.01em',
        wide: '.01em',
        wider: '.02em',
        widest: '.06em',
        uppercase: '.08em',
      },
    },
  },
  plugins: [],
};

export default config;
