import type { NextConfig } from 'next'
const path = require('path')

const nextConfig: NextConfig = {
  images: {
    domains: ['ibb.co'],
    formats: ['image/webp'],
  },

  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
    }
    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Content-Type',
            value: 'font/woff2', // MIME 타입을 woff2로 명확하게 지정
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
