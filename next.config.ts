import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Tawny-web",
  images: {
    unoptimized: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
