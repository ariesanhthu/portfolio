/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D0FFA4', // Powdered Lime
        secondary: '#E8A0FF', // Violet
        accent: '#83E7FF', // Sunny Skies 
        blue: '#006EE9', // Blue Raspberry
        dark: '#000020', // Night Skies Darker
        darker: '#000010', // Deeper Night
        light: '#ffffff', // Pure white for brighter text
        'dark-card': '#010540', // Slightly lighter than dark
        'dark-accent': '#006EE9', // Blue Raspberry
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Orbitron"', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(208, 255, 164, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(208, 255, 164, 0.8), 0 0 30px rgba(232, 160, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(208, 255, 164, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 164, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}