/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/db"],
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client"],
      },
};

export default nextConfig;
