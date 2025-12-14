import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = useTranslations('Navigation');

  return (
    <div className="py-24 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{t('about')}</h1>
      <p className="text-gray-600 dark:text-gray-300">
        {locale === 'ar' ? 'صفحة تعريفية عن الشركة (قيد الإنشاء)' : 'Company About Page (Under Construction)'}
      </p>
    </div>
  );
}
