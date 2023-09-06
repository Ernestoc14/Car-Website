/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio']
  },
  typescritp: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
