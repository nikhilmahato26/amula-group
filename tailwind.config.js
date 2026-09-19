/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF0',
          100: '#FAF5D6',
          200: '#F5E7A3',
          300: '#EED66F',
          400: '#E7C33D',
          500: '#D4AF37', // Brand Core Gold
          600: '#B89222',
          700: '#927016',
          800: '#6C5011',
          900: '#47330B',
          accent: '#F3C623',
          light: '#FBF4DB',
          dark: '#996515',
        },
        dark: {
          950: '#070707',
          900: '#0F0F10',
          850: '#151516',
          800: '#1C1C1E',
          700: '#2A2A2D',
          600: '#3D3D42',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8F8F5',
          alt: '#F3F2EB',
          border: '#E8E6DD',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 10px 30px -4px rgba(212, 175, 55, 0.35)',
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        'premium-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(212, 175, 55, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3C623 0%, #D4AF37 50%, #B89222 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(243, 198, 35, 0.12) 0%, rgba(212, 175, 55, 0.06) 100%)',
        'dark-gradient': 'linear-gradient(180deg, #151516 0%, #0B0B0B 100%)',
      }
    },
  },
  plugins: [],
}
