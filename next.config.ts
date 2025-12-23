import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

// اسم المستودع الخاص بك
const repoName = '/corporate-landing-page';

const config: NextConfig = {
  output: 'export',

  // تعطيل ESLint أثناء build لأننا نشغّل lint عبر `npm run lint` بشكل منفصل (ومستقبلاً عبر CI)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // نستخدم basePath فقط لتجنب تكرار المسارات
  basePath: process.env.NODE_ENV === 'production' ? repoName : '',

  images: {
    unoptimized: true,
  },

  // هذا يساعد GitHub Pages على التعامل مع المسارات
  trailingSlash: true,
};

export default withNextIntl(config);
