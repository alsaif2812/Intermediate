/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "erpnext.com",
      },
    ],
  },
};

module.exports = nextConfig;
