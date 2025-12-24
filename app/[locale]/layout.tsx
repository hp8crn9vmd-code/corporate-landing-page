import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
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
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // التحقق من اللغة
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // تفعيل الوضع الثابت لهذه اللغة
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${locale === 'ar' ? cairo.variable : inter.variable}`}
    >
      <body className={`min-h-screen flex flex-col ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
