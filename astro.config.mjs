import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// O endereço vem do próprio GitHub Pages (ver .github/workflows/publicar.yml):
// - com domínio configurado: https://rebecaabner.com.br
// - sem domínio: https://rafaelabnermmaciel-cmd.github.io/rebecaabner-site
// No computador, sem essas variáveis, usa o domínio final.
const site = process.env.SITE_URL || 'https://rebecaabner.com.br';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  image: { responsiveStyles: false },
});
