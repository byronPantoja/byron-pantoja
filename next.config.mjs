/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mockup-salon.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mockup-store-thatsg.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mockup-dashboard-baseline.vercel.app',
      },
    ],
  },
}

export default nextConfig
