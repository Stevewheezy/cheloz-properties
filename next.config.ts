import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enable styled-components SSR
  },
  experimental: {
    optimizeCss: true, // ✅ Example of a valid experimental property
  },
};

export default nextConfig;
