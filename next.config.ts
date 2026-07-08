import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/product/turkey", destination: "/turkey", permanent: true },
      { source: "/product/duck", destination: "/chinese-duck", permanent: true },
      { source: "/product/quail", destination: "/quail", permanent: true },
      { source: "/product/francolin", destination: "/pheasant", permanent: true },
    ];
  },
};

export default nextConfig;
