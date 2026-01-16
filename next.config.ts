import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/local-opendata-abu" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/local-opendata-abu/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
