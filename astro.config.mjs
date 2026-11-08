import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rebecaabner.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  image: { responsiveStyles: false },
});
