import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

import en from '../messages/en.json';
import ar from '../messages/ar.json';

type Props = {
  children: React.ReactNode;
  locale?: 'en' | 'ar';
};

/**
 * Test-only provider for components that call `useTranslations`.
 * Keeps tests independent of Next.js runtime.
 */
export function IntlTestProvider({ children, locale = 'en' }: Props) {
  const messages = locale === 'ar' ? (ar as any) : (en as any);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
