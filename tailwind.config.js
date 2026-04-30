/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        sun: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdc88',
          300: '#ffc84a',
          400: '#ffb520',
          500: '#f99307',
          600: '#dd6d02',
          700: '#b74d06',
          800: '#943c0c',
          900: '#7a320d',
        },
        ocean: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        sand: {
          50: '#fdf8f0',
          100: '#faebd5',
          200: '#f5d5a8',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 181, 32, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 181, 32, 0.8)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: '#ffb520',
          secondary: '#0ea5e9',
          accent: '#f43f5e',
          neutral: '#1a1a2e',
          'base-100': '#0f0f1a',
          'base-200': '#16213e',
          'base-300': '#1a1a2e',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },
    ],
  },
};
