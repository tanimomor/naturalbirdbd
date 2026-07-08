import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/product/turkey", destination: "/turkey", permanent: true },
      { source: "/product/duck", destination: "/chinese-duck", permanent: true },
      { source: "/product/quail", destination: "/quail", permanent: true },
      { source: "/product/francolin", destination: "/titir", permanent: true },
      { source: "/pheasant", destination: "/titir", permanent: true },
    ];
  },
};

export default nextConfig;
