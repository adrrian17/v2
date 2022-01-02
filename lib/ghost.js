import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL,
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v3',
});

export async function getRecentPosts() {
  return await api.posts
    .browse({
      limit: '3',
      order: 'published_at DESC',
    })
    .catch((err) => {
      console.error(err);
    });
}
