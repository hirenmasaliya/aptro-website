/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/external/:path*',
        destination: 'https://aptro-admin.vercel.app/api/:path*',
      },
    ]
  }
};

module.exports = nextConfig;