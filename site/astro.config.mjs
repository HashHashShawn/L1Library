import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://l1library.com',
  integrations: [mdx(), tailwind(), sitemap()],
  adapter: vercel(),
  content: {
    collections: {
      chains: {
        schema: './src/content/config.ts',
      },
      concepts: {
        schema: './src/content/config.ts',
      },
    },
  },
});
