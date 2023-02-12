/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.giphy.com"],
    formats: ["image/webp" ],
  },
  basePath: "/cv"
};

module.exports = nextConfig;
