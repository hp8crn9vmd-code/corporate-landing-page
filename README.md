# Corporate Landing Page

## Overview
A bilingual corporate landing page (Arabic / English) built with Next.js 15 (App Router) and Tailwind CSS v4, designed specifically for static export and deployment on GitHub Pages.

This project focuses on performance, security, and clean architecture while remaining fully compatible with static hosting environments.

---

## Key Features
- Bilingual support (Arabic / English) using next-intl
- Static export compatible with GitHub Pages
- Next.js 15 App Router architecture
- Tailwind CSS v4 styling system
- Client-side contact form using Web3Forms (no backend required)
- Structured Content Security Policy (CSP)
- Performance optimization via lazy-loaded contact form
- CI-ready setup (lint, test, build)

---

## Tech Stack
- Framework: Next.js 15.5.x
- UI Library: React 18
- Styling: Tailwind CSS v4
- Internationalization: next-intl
- Forms: Web3Forms (client-side)
- Linting: ESLint (CLI)
- Deployment: GitHub Pages (Static Export)

---

## Project Structure
app/
└─ [locale]/
├─ layout.tsx
├─ page.tsx
├─ about/
├─ services/
└─ contact/
├─ page.tsx
├─ ContactForm.tsx
└─ ContactFormClient.tsx
components/
messages/
lib/
public/

---

## Environment Variables
The following environment variable is required:
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
Do not commit sensitive values directly into the repository.

---

## Local Development
Install dependencies and start the development server:

npm install
npm run dev

---

## Build and Static Export
Generate a production-ready static build:
npm run build

The static output will be generated in the out/ directory.

---

## GitHub Pages Deployment
- Uses output: 'export' in Next.js configuration
- Automatically applies basePath based on the repository name
- Deployment handled via GitHub Actions

---

## Security Notes
- Content Security Policy (CSP) applied using meta tags for static compatibility
- No API Routes or server-side backend
- Contact form operates entirely on the client side

---

## Performance Notes
- Contact page JavaScript reduced by approximately 40 KB
- Lazy loading applied to the contact form
- First Load JS averages around 107 KB

---

## License
This project is open source.
You may add a LICENSE file if required (MIT recommended).

---

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a clear and descriptive Pull Request
