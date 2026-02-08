/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ssl.cdn-redfin.com' },
      { protocol: 'https', hostname: 'www.redfin.com' },
      { protocol: 'https', hostname: 'redfin-photos.global.ssl.fastly.net' }
    ]
  }
}

export default nextConfig
