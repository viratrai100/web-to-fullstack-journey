/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // hardcore domains
    domains: ['image.pixels.com'],
    // remote patterns more prefferd way
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "*.google.com",
      }
    ],
  },
};

export default nextConfig;
