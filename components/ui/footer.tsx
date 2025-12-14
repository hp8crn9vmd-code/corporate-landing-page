'use client';

import { useTranslations } from 'next-intl';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} <span className="font-semibold text-primary-600 dark:text-primary-400">Digital Solutions</span>. {t('rights')}.
            </p>
          </div>
          <div className="text-center md:text-end">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
