/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "upload.wikimedia.org", "via.placeholder.com"],
  },
  env: {
    API_KEY: process.env.API_KEY,
    IMAGE_BASE: process.env.IMAGE_BASE,
    BASE_URL: process.env.BASE_URL,
  },
};
