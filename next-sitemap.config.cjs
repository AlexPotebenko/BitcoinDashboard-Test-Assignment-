/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // Change to your real domain
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
};
