import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Enquanto o DNS de rebecaabner.com.br não fica pronto, o site roda em
// https://rafaelabnermmaciel-cmd.github.io/rebecaabner-site
// Quando o domínio funcionar: troque DOMINIO_PRONTO para true.
const DOMINIO_PRONTO = true;

export default defineConfig({
  site: DOMINIO_PRONTO ? 'https://rebecaabner.com.br' : 'https://rafaelabnermmaciel-cmd.github.io',
  base: DOMINIO_PRONTO ? '/' : '/rebecaabner-site',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  image: { responsiveStyles: false },
});
