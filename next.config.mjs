const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';
const normalizedBasePath = rawBasePath
  ? rawBasePath.startsWith('/')
    ? rawBasePath.replace(/\/$/, '')
    : `/${rawBasePath.replace(/\/$/, '')}`
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
