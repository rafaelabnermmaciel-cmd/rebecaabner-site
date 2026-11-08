# rebecaabner.com.br

Site de Rebeca Abner, designer de interiores em Brasília. Astro (site estático), publicado no GitHub Pages, igual ao Ela me Fez.

## Rodar no computador

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera a pasta dist/

## Onde mexer

| O quê | Onde |
| --- | --- |
| WhatsApp, e-mail, Instagram, LinkedIn | `src/lib/site.ts` |
| Textos e fotos de cada projeto | `src/content/projetos/*.md` |
| Imagens (WebP) | `src/assets/projetos/<projeto>/` |
| Cores e fontes | `src/styles/global.css` |
| Páginas | `src/pages/` |

## Novo projeto (ou liberar o Espaço 32)

1. Coloque as fotos em `src/assets/projetos/<pasta>/` (WebP, de preferência 1600 px ou mais na maior foto).
2. No arquivo `.md` do projeto, preencha `capa`, `galeria` e `plantas`.
3. Troque `publicado: false` para `publicado: true`. Para aparecer na página inicial, `destaque: true`.

O Espaço 32 (CASACOR Brasília 2026) já está em `src/content/projetos/04-espaco-32-casacor.md`, oculto.

O site gera sozinho os tamanhos de imagem, o sitemap, a imagem de compartilhamento e a numeração.

## Publicação

Cada push na `main` roda o GitHub Actions (`.github/workflows/publicar.yml`), que gera o site e publica no GitHub Pages em 1 ou 2 minutos.

O endereço se ajusta sozinho ao que estiver em Settings → Pages:
- **Sem domínio personalizado:** https://rafaelabnermmaciel-cmd.github.io/rebecaabner-site
- **Com `rebecaabner.com.br`:** o site passa a usar o domínio. Depois de mudar essa configuração, rode de novo o "Publicar site" em Actions.

DNS no Registro.br (zona DNS, modo avançado): quatro registros `A` com nome em branco (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) e um `CNAME` `www` apontando para `rafaelabnermmaciel-cmd.github.io`.
