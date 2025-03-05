import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "", // Leave empty unless a specific port is used
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "", // Leave empty unless a specific port is used
      },
    ],
  },
};

export default nextConfig;
