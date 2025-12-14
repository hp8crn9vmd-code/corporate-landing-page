import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

// تحديد اسم المستودع (يجب أن يطابق اسم مستودعك في GitHub)
const repoName = '/corporate-landing-page';

const config: NextConfig = {
  output: 'export',
  
  // إعدادات المسارات الخاصة بـ GitHub Pages
  // في وضع الإنتاج (Production)، نضيف اسم المستودع كبادئة
  basePath: process.env.NODE_ENV === 'production' ? repoName : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? repoName : '',
  
  // مهم جداً للصور في الوضع الثابت
  images: {
    unoptimized: true,
  },
  
  // تحسين التوجيه في الصفحات الثابتة
  trailingSlash: true,
};

export default withNextIntl(config);
