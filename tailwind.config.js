/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        0: '#2813e9',
        200: '#5633ed',
        400: '#744df0',
        600: '#8d66f3',
        800: '#a37ff6',
        1000: '#b798f9',
      },
      'surface': {
        0: '#121212',
        200: '#282828',
        400: '#3f3f3f',
        600: '#575757',
        800: '#717171',
        1000: '#8b8b8b',
      },
      'mixed': {
        0: '#1a1525',
        200: '#2f2a3a',
        400: '#46414f',
        600: '#5e5966',
        800: '#76727e',
        1000: '#908d96',
      },


    },
    extend: {},
  },
  plugins: [],
}

