'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// مخطط التحقق Zod Schema 
const createContactSchema = (t: any) => z.object({
  name: z.string().min(2, t('name') + ' ' + t('error')), // تخصيص رسائل الخطأ
  email: z.string().email(t('email') + ' ' + t('error')),
  subject: z.string().min(5, t('subject') + ' ' + t('error')),
  message: z.string().min(10, t('message') + ' ' + t('error')),
  // حقل الحماية من السبام (يجب أن يكون false دائماً)
  botcheck: z.boolean().refine(val => !val, {
    message: t('suspicious')
  })
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export default function ContactForm() {
  const t = useTranslations('Contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // تهيئة النموذج
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(t)),
    defaultValues: {
      botcheck: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      // إضافة البيانات الأساسية
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      // إعدادات Web3Forms 
      formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_KEY_HERE');
      formData.append('from_name', 'Corporate Site Contact');
      formData.append('subject', `New Contact: ${data.subject}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(t('sent'));
        reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('error'));
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Honeypot Field - Hidden */}
        <div className="honeypot-field">
          <input
            type="checkbox"
            {...register('botcheck')}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {t('name')} *
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder={t('namePlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {t('email')} *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder={t('emailPlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {t('subject')} *
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            placeholder={t('subjectPlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {t('message')} *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            placeholder={t('messagePlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none text-gray-900 dark:text-white"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                {t('sending')}
              </>
            ) : (
              <>
                <Send size={20} />
                {t('send')}
              </>
            )}
          </button>
        </div>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div className={`p-4 rounded-lg flex items-center gap-3 ${
            submitStatus === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
          }`}>
            {submitStatus === 'success' ? <CheckCircle className="shrink-0" /> : <AlertCircle className="shrink-0" />}
            <span>{submitMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
}
