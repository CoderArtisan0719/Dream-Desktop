// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     ppr: true,
//   },
//   rewrites: async () => {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "/api/:path*",
//       },
//     ];
//   },
//   images: {
//     domains: [
//       "tokens.1inch.io",
//       "tokens-data.1inch.io",
//       "s2.coinmarketcap.com",
//       "assets.coingecko.com",
//       "raw.githubusercontent.com",
//       "tokens.debridge.finance",
//       "basescan.org",
//       "etherscan.io",
//       "statics.solscan.io",
//     ], // Add both domains
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  images: {
    domains: ["nyxia.ai"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows images from any domain
      },
    ],
  },
};

export default nextConfig;
