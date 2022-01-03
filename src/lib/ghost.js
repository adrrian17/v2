import GhostContentAPI from '@tryghost/content-api';
import GhostAdminAPI from '@tryghost/admin-api';

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL,
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v3',
});

const admin = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_KEY,
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

export async function addMember(email) {
  return await admin.members.add(
    { email },
    { send_email: true, email_type: 'subscribe' }
  );
}
