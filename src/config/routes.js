// Code by Brian Lovin
// https://github.com/brianlovin/briOS/blob/main/src/config/routes.ts

import { defaultSEO, extendSEO } from './seo';

const routes = {
  home: {
    label: 'Inicio',
    path: '/',
    seo: defaultSEO,
  },
  archive: {
    label: 'Archivo',
    path: '/archivo',
    seo: extendSEO({
      title: 'Archivo',
      description: 'Todos los posts en orden cronológico.',
      url: 'archivo',
    }),
  },
  comics: {
    label: 'Cómics',
    path: '/comics',
    seo: extendSEO({
      title: 'Cómics',
      description: 'Todos los cómics que he escrito y publicado.',
      url: 'comics',
    }),
  },
  tools: {
    label: 'Herramientas',
    path: '/herramientas',
    seo: extendSEO({
      title: 'Herramientas',
      description: 'Las apps y servicios que uso en el día a día.',
      url: 'herramientas',
    }),
  },
  scripts: {
    label: 'Guiones',
    path: '/guiones',
    seo: extendSEO({
      title: 'Guiones',
      description: 'Algunos de los guiones de cómic que he escrito.',
      url: 'guiones',
    }),
  },
};

export default routes;
