import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

// basePath for GitHub Pages: /<repoName> (optional)
const repoName = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? repoName;

// اسم المستودع الخاص بك
const config: NextConfig = {
  output: 'export',

  // تعطيل ESLint أثناء build لأننا نشغّل lint عبر `npm run lint` بشكل منفصل (ومستقبلاً عبر CI)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // نستخدم basePath فقط لتجنب تكرار المسارات
  basePath: process.env.NODE_ENV === 'production' ? (basePath || '') : '',

  images: {
    unoptimized: true,
  },

  // هذا يساعد GitHub Pages على التعامل مع المسارات
  trailingSlash: true,
};

export default withNextIntl(config);
