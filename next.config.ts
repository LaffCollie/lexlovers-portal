import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the 'output: standalone' line
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;