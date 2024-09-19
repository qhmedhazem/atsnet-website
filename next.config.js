/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    ISSUES_LINK: "https://github.com/qhmedhazem/atsnet-website/issues/new",
  },
};

module.exports = nextConfig;
