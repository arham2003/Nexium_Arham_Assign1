import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows building even with TypeScript errors (dangerous if not checked separately)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows building even when ESLint errors are present
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
