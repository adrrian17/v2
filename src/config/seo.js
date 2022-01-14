// Code by Brian Lovin
// https://github.com/brianlovin/briOS/blob/main/src/config/seo.ts

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://adrianayala.mx' : '';

export const baseEmail = 'adrian.ayala17@gmail.com';

export const defaultSEO = {
  title: 'Adrian (Sin Acento)',
  description:
    'Hola, me llamo Adrian (Sin Acento) y este es mi blog / portfolio. Soy barista, escritor y programador.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: baseUrl,
    site_name: 'Adrian (Sin Acento)',
    images: [
      {
        url: `${baseUrl}/images/og/header.png`,
        alt: 'Adrian (Sin Acento)',
      },
    ],
  },
  twitter: {
    handle: '@adrrian17',
    site: '@adrrian17',
    cardType: 'summary_large_image',
  },
};

export function extendSEO(options) {
  const images = options.image
    ? [{ url: `${baseUrl}/images/${options.image}` }]
    : defaultSEO.openGraph.images;

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  };
}
