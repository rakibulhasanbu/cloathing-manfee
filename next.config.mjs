/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.manfarebd.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "manfarebd.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
