import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/demo/:slug',
        destination: '/demo/:slug/index.html',
      },
    ];
  },
};

export default nextConfig;
