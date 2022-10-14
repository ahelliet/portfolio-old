/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'api.tsx'],
  images: {
    domains: [''],
  },
}

module.exports = nextConfig
