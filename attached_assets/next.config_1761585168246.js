// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'], // Add any other image domains you need
  },
  // Add any other Next.js config options here
};

module.exports = nextConfig;