// next.config.ts
const nextConfig = {
  output: 'export',  // Tells Next.js to export static files
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Prevent image optimization errors during static export
  },
};

export default nextConfig;
