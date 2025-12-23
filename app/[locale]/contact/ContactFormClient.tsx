'use client';

import dynamic from 'next/dynamic';

// تحميل نموذج التواصل بشكل كسول داخل Client Component (مسموح هنا)
const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
  loading: () => <div aria-busy="true">Loading...</div>,
});

export default function ContactFormClient() {
  return <ContactForm />;
}
