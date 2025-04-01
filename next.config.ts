import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enable styled-components SSR
  },
  experimental: {
    optimizeCss: false, // ❌ Disabled to prevent build issues with Turbopack
    appDir: true, // ✅ Ensure App Router compatibility
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
    };
    return config;
  },
};

export default nextConfig;