import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl animate-fade-in">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-slide-up">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-slide-up">
          <Link
            href="/contact"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {t('ctaPrimary')}
          </Link>
          <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            {t('ctaSecondary')} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
