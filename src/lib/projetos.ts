import { getCollection } from 'astro:content';

// Só projetos com publicado: true chegam ao site.
export async function projetosPublicados() {
  const todos = await getCollection('projetos', ({ data }) => data.publicado);
  return todos.sort((a, b) => a.data.numero - b.data.numero);
}

export const dois = (n: number) => String(n).padStart(2, '0');
