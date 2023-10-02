/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jumpit.co.kr',
      },
      // 인터뷰 목록 조회할 때 개발 서버 데이터를 참조하는 경우가 있음
      {
        protocol: 'https',
        hostname: 'cdn-dev.jumpit.co.kr',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/position',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
