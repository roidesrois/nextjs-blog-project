/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.MINIO_URL,
        port: "",
        pathname: `/${process.env.BUCKET_NAME}/**`,
      },
    ],
  },
};

export default nextConfig;
