import type {Config} from 'tailwindcss';

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
        // "primary-blue": {
        //   DEFAULT:" rgba(1, 10, 5, 0.75)",
        //   // 100: "#F5F8FF",
        // },
        // "secondary-orange": "#f79761",
        // "light-white": {
        //   DEFAULT: "rgba(59,60,152,0.03)",
        //   100: "rgba(59,60,152,0.02)",
        // },
        // grey: "#747A88",
      },
      fontWeight: {
        // DEFAULT: 200,
        // header: '37px',
        // subheader: '40px',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
      // backgroundImage: {
      //   'pattern': "url('/pattern.png')",
      //   'hero-bg': "url('/hero-bg.png')"
      // }
    },
  },
  plugins: [],
};
// export default config;
