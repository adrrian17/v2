import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL,
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v3',
});

export async function getPosts(limit = 6) {
  return await api.posts
    .browse({
      limit,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(slug) {
  return await api.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
