import type { NextConfig } from "next";

// Empty for local dev (served at /). In production this is set to
// "/solutions/matchihomeware" so the app works when the Zcube company site
// (Naplan-Portal's Flask service) reverse-proxies that path to this one.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath,
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
