'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/lib/i18n/routing';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // تبديل اللغة وحفظ التفضيل
  const switchLocale = (newLocale: string) => {
    // حفظ التفضيل في localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLocale);
    }
    // التوجيه للغة الجديدة
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* الشعار */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {t('companyName')}
            </Link>
          </div>

          {/* روابط سطح المكتب */}
          <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">
              {t('home')}
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">
              {t('about')}
            </Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">
              {t('services')}
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">
              {t('contact')}
            </Link>

            {/* زر تبديل اللغة */}
            <button
              onClick={() => switchLocale(locale === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            >
              <Globe size={18} />
              <span>{locale === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            
            <Link 
              href="/contact" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 focus:outline-none"
              aria-label={isOpen ? t('close') : t('menu')}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800">
              {t('home')}
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800">
              {t('about')}
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800">
              {t('services')}
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800">
              {t('contact')}
            </Link>
            
            <button
              onClick={() => {
                switchLocale(locale === 'ar' ? 'en' : 'ar');
                setIsOpen(false);
              }}
              className="w-full text-start flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Globe size={18} />
              <span>{locale === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
