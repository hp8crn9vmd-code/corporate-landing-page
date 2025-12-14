import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SecureHead from '@/components/security/SecureHead';

// تصحيح المسار: العودة خطوة واحدة فقط لأن الملفين داخل مجلد app
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'حلول رقمية - Digital Solutions',
  description: 'شركة متخصصة في الحلول الرقمية والتقنية المبتكرة',
};

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${locale === 'ar' ? cairo.variable : inter.variable}`}
    >
      <SecureHead locale={locale} />
      <body className={`min-h-screen flex flex-col ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
