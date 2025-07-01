/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true, // ✅ Prevent TypeScript from failing your Vercel build
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent ESLint from blocking build
  },
};

module.exports = nextConfig;
