/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true,
    },
    output: "standalone",
};

module.exports = nextConfig;
