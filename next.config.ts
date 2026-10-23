import type { NextConfig } from "next";
import { BASE_PATH } from "./site-paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
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
