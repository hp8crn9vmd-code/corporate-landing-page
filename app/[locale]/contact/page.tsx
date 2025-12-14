import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactForm from './ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  setRequestLocale(locale);
  
  const t = await getTranslations({locale, namespace: 'Contact'});

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          {t('form.send')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('form.sent').replace('!', '.')}
        </p>
      </div>
      
      <ContactForm />
    </div>
  );
}
