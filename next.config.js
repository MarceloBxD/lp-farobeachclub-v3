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
}



module.exports = nextConfig;
