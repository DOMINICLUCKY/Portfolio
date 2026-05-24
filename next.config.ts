import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
  turbopack: {
    resolveAlias: {
      "@": "./*",
    },
  },
};

export default nextConfig;
