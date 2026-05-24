import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
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
