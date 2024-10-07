/** @type {import('next').NextConfig} */

const path = require("path");

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
    FACEBOOK_LINK: "https://www.facebook.com/groups/3302741273312091/about",
    LINKEDIN_LINK: "https://linkedin.com/school/atsnee",
    INSTAGRAM_LINK: "https://www.instagram.com/atsnee_school",
    EMAIL: "mail:contact@atsnee.org",
    TELEPHONE: "tel:+201221681400",
  },
};

module.exports = nextConfig;
