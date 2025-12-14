import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

// اسم المستودع الخاص بك
const repoName = '/corporate-landing-page';

const config: NextConfig = {
  output: 'export',
  
  // نستخدم basePath فقط لتجنب تكرار المسارات
  basePath: process.env.NODE_ENV === 'production' ? repoName : '',
  
  images: {
    unoptimized: true,
  },
  
  // هذا يساعد GitHub Pages على التعامل مع المسارات
  trailingSlash: true,
};

export default withNextIntl(config);
