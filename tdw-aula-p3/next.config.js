/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React
  output: "export", // Isso habilita a exportação estática
  swcMinify: true, // Ativa a minificação usando SWC para melhor performance
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
