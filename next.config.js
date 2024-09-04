/** @type {import('next').NextConfig} */
require("dotenv").config()

/**
 * @author Marcelo Bracet
 * @author João Vinicius Vitral
 * @date 05/10/2023
*/

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.ctfassets.net", "downloads.ctfassets.net", "res.cloudinary.com", "images.unsplash.com", "images.pexels.com"],
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // cache para arquivos estáticos gerados pelo Next.js
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
}



module.exports = nextConfig;
