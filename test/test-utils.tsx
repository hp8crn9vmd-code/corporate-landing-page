import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

// رسائل حقيقية من المشروع (en.json) لمنع MISSING_MESSAGE في الاختبارات
const EN_MESSAGES = {
  "Navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact",
    "companyName": "Digital Solutions",
    "getStarted": "Get Started",
    "menu": "Menu",
    "close": "Close"
  },
  "Contact": {
    "form": {
      "name": "Full Name",
      "namePlaceholder": "Enter your name",
      "email": "Email Address",
      "emailPlaceholder": "name@example.com",
      "subject": "Subject",
      "subjectPlaceholder": "How can we help you?",
      "message": "Message",
      "messagePlaceholder": "Write your message details here...",
      "send": "Send Message",
      "sending": "Sending...",
      "sent": "Message received successfully! We will contact you soon.",
      "error": "An error occurred. Please try again.",
      "suspicious": "Suspicious activity detected."
    }
  },
  "Footer": {
    "rights": "All rights reserved",
    "description": "We provide innovative technical solutions to help companies grow and evolve in the digital age."
  },
  "Home": {
    "heroTitle": "Innovating the Digital Future",
    "heroSubtitle": "Advanced software solutions designed specifically to grow your business and achieve corporate goals.",
    "ctaPrimary": "Contact Us",
    "ctaSecondary": "Our Services"
  }
};

type Props = {
  children: React.ReactNode;
  locale?: string;
  messages?: Record<string, any>;
};

export function IntlTestProvider({
  children,
  locale = 'en',
  messages = EN_MESSAGES
}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
