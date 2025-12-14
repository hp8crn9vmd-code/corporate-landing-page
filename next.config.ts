import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || 'corporate-landing-page';
const assetPrefix = isProd ? `/${repoName}` : '';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);
