/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /* ── Custom color palette ── */
      colors: {
        blue: {
          400: '#4d8aff',
          500: '#1a6bff',
          600: '#0055e6',
          700: '#0041b3',
          neon: '#3d7fff',
        },
      },

      /* ── Custom fonts ── */
      fontFamily: {
        syne:  ['Syne', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
        sans:  ['Instrument Sans', 'sans-serif'],
      },

      /* ── Custom animations ── */
      animation: {
        'float-slow':   'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite reverse',
        'float':        'float 1.5s ease-in-out infinite',
        'blink':        'blink 0.9s step-end infinite',
        'pulse-ring':   'pulse-ring 1.5s ease-out infinite',
        'fade-up':      'fadeUp 0.6s ease both',
        'spin':         'spin 0.7s linear infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      /* ── Spacing / sizing ── */
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
};
