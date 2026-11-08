// Dados de contato e textos fixos. Mude aqui e o site inteiro acompanha.
export const SITE = {
  nome: 'Rebeca Abner',
  titulo: 'Designer de Interiores',
  cidade: 'Brasília',
  url: 'https://rebecaabner.com.br',
  descricao:
    'Rebeca Abner, designer de interiores em Brasília. Projetos residenciais e comerciais que unem funcionalidade, estética e bem-estar.',
  whatsapp: '5561993169696',
  whatsappExibicao: '+55 61 99316-9696',
  whatsappMensagem: 'Olá, Rebeca! Vim pelo seu site e gostaria de conversar sobre um projeto.',
  email: 'rebecaabner@gmail.com',
  instagram: 'becabner',
  linkedin: 'rebecaabner',
};

export const waLink = (msg = SITE.whatsappMensagem) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
