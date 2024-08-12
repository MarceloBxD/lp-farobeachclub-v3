/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://farobeachclub.com.br/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"],
}
