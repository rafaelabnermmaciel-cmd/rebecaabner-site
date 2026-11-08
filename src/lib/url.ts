// Monta links internos respeitando o "base" do astro.config.mjs
// (necessário enquanto o site roda em rafaelabnermmaciel-cmd.github.io/rebecaabner-site).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (caminho: string) => (BASE + caminho) || '/';
