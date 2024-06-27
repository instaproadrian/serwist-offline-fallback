/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/sw.ts",
  swDest: "public/sw.js",
  include: [],
  additionalPrecacheEntries: [
    {
      url: "/~offline",
      revision: "b4c055f1d4cea2e0ab2d83c19a3cba7ebfd834c3"
    }
  ]
});

export default withSerwist(nextConfig);
