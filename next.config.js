/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Example: Add custom alias
    config.resolve.alias["@components"] = require("path").resolve(
      __dirname,
      "src/components"
    );

    // Example: Ignore specific modules in server builds
    if (isServer) {
      config.externals = [...config.externals, "some-module"];
    }

    return config;
  },
};

module.exports = nextConfig;
