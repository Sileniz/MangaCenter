import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_PROJECT_API: process.env.NEXT_PUBLIC_PROJECT_API,
  },
};

export default nextConfig;
