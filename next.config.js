/** @type {import('next').NextConfig} */

const nextConfig = {
  eactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serce-sprava-strapi.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
