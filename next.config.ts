import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps the real app screenshot sharp; 75 is the Next.js default.
    qualities: [75, 90]
  }
};

export default nextConfig;
