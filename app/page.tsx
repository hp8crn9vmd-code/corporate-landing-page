'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // اكتشاف اللغة المفضلة
    const preferredLang =
      typeof window !== 'undefined'
        ? localStorage.getItem('preferred-language') ||
          (navigator.language.startsWith('ar') ? 'ar' : 'en')
        : 'ar';

    // إعادة التوجيه
    router.replace(`/${preferredLang}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">
          ... جاري التوجيه إلى اللغة المناسبة
          <br />
          Redirecting to appropriate language...
        </p>
      </div>
    </div>
  );
}
