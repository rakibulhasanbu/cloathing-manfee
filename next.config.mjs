/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.manfarebd.com",
        pathname: "/glamtouch/media/**",
      },
    ],
  },
};

export default nextConfig;
