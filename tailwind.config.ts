import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#94509A',
        accent: '#f9a8d4',
        mint: '#14b8a6',
        ink: '#1f2937',
      },
    },
  },
  plugins: [],
};

export default config;
