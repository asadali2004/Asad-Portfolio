/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0d1224 0%, #0a0f1e 50%, #051016 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fadeInUp': 'fadeInUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slideIn': 'slideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scaleIn': 'scaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-smooth': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'out-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '600': '600ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(22, 242, 179, 0.3), 0 0 10px rgba(22, 242, 179, 0.2)' 
          },
          '50%': { 
            textShadow: '0 0 10px rgba(22, 242, 179, 0.5), 0 0 20px rgba(22, 242, 179, 0.3)' 
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 30px, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideIn: {
          'from': {
            opacity: '0',
            transform: 'translate3d(-20px, 0, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale3d(0.9, 0.9, 1)',
          },
          'to': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      colors: {
        primary: {
          50: '#f0fdf8',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16f2b3',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      screens: {
        "4k": "1980px",
      },
    },
  },
  plugins: [],
}
