import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return (
    <div className="py-24 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{t('services')}</h1>
      <p className="text-gray-600 dark:text-gray-300">
        {locale === 'ar' ? 'صفحة خدماتنا (قيد الإنشاء)' : 'Our Services Page (Under Construction)'}
      </p>
    </div>
  );
}
