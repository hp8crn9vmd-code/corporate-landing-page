import { writeFileSync, mkdirSync } from 'node:fs';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? repoName) || '';
const bp = basePath === '/' ? '' : basePath;
const withBP = (p) => `${bp}${p}`;

const routes = [
  '/',
  '/en/',
  '/en/about/',
  '/en/services/',
  '/en/contact/',
  '/ar/',
  '/ar/about/',
  '/ar/services/',
  '/ar/contact/',
].map(withBP);

mkdirSync('public', { recursive: true });

writeFileSync(
  'public/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}${withBP('/sitemap.xml')}\n`,
  'utf8',
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${siteUrl}${r}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync('public/sitemap.xml', xml, 'utf8');

console.log('✅ sitemap.xml + robots.txt generated with basePath:', bp || '(none)');
console.log('✅ siteUrl:', siteUrl);
