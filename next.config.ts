import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/cgc-platform",
  assetPrefix: "/cgc-platform/",
};

export default nextConfig;
