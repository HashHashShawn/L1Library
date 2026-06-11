/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // L1-008: Pure black & white palette
        l1: {
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      fontFamily: {
        // L1 Brand Guidelines: sans-serif + monospace
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#171717',
            a: {
              color: '#000000',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
            'h1, h2, h3, h4': {
              fontFamily: 'IBM Plex Mono, Consolas, monospace',
              fontWeight: '600',
            },
            code: {
              fontFamily: 'IBM Plex Mono, Consolas, monospace',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
