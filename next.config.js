/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jumpit.co.kr',
      },
    ],
  },
};

module.exports = nextConfig;
