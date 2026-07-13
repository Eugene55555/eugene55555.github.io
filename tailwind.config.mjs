/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // screwfast palette
        blue: {
          DEFAULT: '#155dfc',
          dark: '#0f4ad1',
        },
        orange: {
          DEFAULT: '#ff512f',
          dark: '#e8401f',
        },
        yellow: '#f09819',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
