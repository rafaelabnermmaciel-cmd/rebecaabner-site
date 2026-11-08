# rebecaabner.com.br

Site de Rebeca Abner, designer de interiores em Brasília. Astro (site estático), publicado na Vercel.

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
