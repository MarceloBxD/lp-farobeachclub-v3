// pages/api/videos.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getEntries } from '../../services/useContentfulData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const videos = await getEntries({
      contentType: "homeBanner", 
    });

    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=59');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar os vídeos' });
  }
}
