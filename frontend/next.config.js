/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/capsule',
  experimental: {
    optimizePackageImports: ['@gsap/react', 'gsap'],
  },
};

export default nextConfig;
