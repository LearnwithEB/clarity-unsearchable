/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/clarity-unsearchable',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
