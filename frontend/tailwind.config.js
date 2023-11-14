/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu, sans-serif',
      },
      colors: {
        'foto-background': {
          light: '#E7F8FE',
          dark: '#011319',
        },
        'foto-text': {
          light: '#01171E',
          dark: '#E1F7FE',
        },
        'foto-primary': {
          light: '#04698B',
          dark: '#74DAFB',
        },
        'foto-secondary': {
          light: '#D2F3FE',
          dark: '#01222D',
        },
        'foto-accent': {
          light: '#0BBDF9',
          dark: '#06B8F4',
        },
      },
    },
  },
  plugins: [],
};
