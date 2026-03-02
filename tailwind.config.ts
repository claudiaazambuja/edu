import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#be185d',
        accent: '#f472b6',
        mint: '#14b8a6',
        ink: '#1f2937',
      },
    },
  },
  plugins: [],
};

export default config;
