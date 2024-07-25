/** @type {import('next').NextConfig} */

// ?NExt js framework configuratioin is here
//* env will declare in this file

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
