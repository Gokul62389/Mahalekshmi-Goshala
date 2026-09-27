/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'Noto Sans Malayalam', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'Noto Sans Malayalam', 'system-ui', 'sans-serif'],
        malayalam: ['Noto Sans Malayalam', 'sans-serif'],
      },
      colors: {
        earth: {
          50: '#FAF8F5',
          100: '#F4F0E8',
          200: '#E7DFD3',
          300: '#D5C8B8',
          400: '#B5A28F',
          500: '#8E7B6A',
          600: '#6E5D4E',
          700: '#524539',
          800: '#382F27',
          900: '#1B1815',
          950: '#0E0C0A',
        },
        forest: {
          50: '#F3F6F4',
          100: '#E4ECE7',
          200: '#C9D9CF',
          500: '#4D6B5A',
          700: '#2A3D33',
          800: '#1E2C24',
          900: '#141D18',
          950: '#0C120E',
        },
        brand: {
          // Master brand guideline colors directly from mahalekshmisilks.com
          red: '#E42528',             // Master primary red
          crimson: '#C21B1E',         // Deep luxury red
          darkRed: '#981316',         // Velvet dark red
          gold: '#D4AF37',            // Master rich gold
          lightGold: '#E6C665',       // Pale gold
          darkCharcoal: '#111927',    // Master brand typography charcoal
          navyDark: '#0C1017',        // Master deep backdrop
          cardDark: '#161B24',        // Master card backdrop
          warmWhite: '#FAF8F5',       // Silk off-white
        }
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
