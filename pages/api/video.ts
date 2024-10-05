import { NextApiRequest, NextApiResponse } from 'next';
import { cloudinary } from "@/services/useCloudinary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const video = cloudinary.video_url('events_video');
  const videoHttps = video.replace('http:', 'https:');

  // Definir o cache para 6 meses
  res.setHeader('Cache-Control', 'max-age=31536000, s-maxage=31536000, stale-while-revalidate=60'); 
  res.status(200).json({ videoUrl: videoHttps });
}
