import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      numero: z.number(),                       // ordem no site: 01, 02, 03...
      publicado: z.boolean().default(true),     // false = existe no código, mas não aparece no site
      destaque: z.boolean().default(false),     // aparece na página inicial
      status: z.enum(['Construído', 'Acadêmico', 'Em andamento']),
      categoria: z.enum(['Residencial', 'Comercial', 'Mostra']),
      local: z.string().optional(),
      ano: z.number().optional(),
      area: z.string().optional(),
      cliente: z.string().optional(),
      equipe: z.string().optional(),
      resumo: z.string(),                       // uma frase, usada nos cards e no compartilhamento
      citacao: z.string().optional(),           // frase curta em itálico na abertura
      capa: image().optional(),
      miniatura: image().optional(),            // imagem do card, se for diferente da capa
      galeria: z.array(z.object({ src: image(), legenda: z.string().optional(), largura: z.enum(['cheia', 'meia']).default('meia') })).default([]),
      plantas: z.array(z.object({ src: image(), legenda: z.string() })).default([]),
      creditos: z.string().optional(),
    }),
});

export const collections = { projetos };
