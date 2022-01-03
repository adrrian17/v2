import { addMember } from '~/lib/ghost';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);

    try {
      const member = await addMember(req.body);
      res.status(200).json(member);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json({ error: 'Only POST requests' });
  }
}
