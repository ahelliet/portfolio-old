/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'api.tsx'],
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
