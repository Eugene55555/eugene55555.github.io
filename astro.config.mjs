import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://eugene55555.github.io',
  base: '/',
  integrations: [tailwind()],
  outDir: 'dist',
});
