/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.giphy.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
