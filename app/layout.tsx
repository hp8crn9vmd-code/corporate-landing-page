import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  title: {
    default: 'NovaTech Solutions',
    template: '%s | NovaTech Solutions',
  },
  description:
    'Virtual technology solutions company delivering cloud, AI, cybersecurity, and DevOps services.',
  openGraph: {
    title: 'NovaTech Solutions',
    description: 'Cloud • AI • Cybersecurity • DevOps',
    type: 'website',
    images: ['/og/og.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaTech Solutions',
    description: 'Cloud • AI • Cybersecurity • DevOps',
    images: ['/og/og.svg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
