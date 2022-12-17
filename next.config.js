/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    // http://localhost:3000/(http://placeimg.com/640/480/technic)
  images: {
    formats: ['image/avif', 'image/webp',],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'challenge.webjar.ir',
        port: '',
        pathname: '/images/**',
      },
        {
        protocol: 'http',
        hostname: 'placeimg.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig
