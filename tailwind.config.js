/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '2xl': '1400px',
        mxs: '480px',
        xs: '320px',
      },
      spacing: {
        4.5: '18px',
      },

      colors: {
        neutral: {
          dark_blue: 'hsl(209, 23%, 22%)',
          very_dark_blue: 'hsl(207, 26%, 17%)',
          ligh_very_dark_blue: 'hsl(200, 15%, 8%)',
          dark_gray: 'hsl(0, 0%, 52%)',
          very_light_gray: ' hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
