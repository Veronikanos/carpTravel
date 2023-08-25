// import type {Config} from 'tailwindcss';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-color': '#0F1812',
        'light-color': '#FFFFFF',
        'light-transparent': 'rgba(255, 255, 255, 0.20)'
      },
    },
  },
  plugins: [],
};
