import fs from 'node:fs';
import path from 'node:path';

function stripTrailingSlash(v) {
  return v.endsWith('/') ? v.slice(0, -1) : v;
}

function ensureLeadingSlash(v) {
  if (!v) return '';
  return v.startsWith('/') ? v : `/${v}`;
}

function normalizeBasePath(v) {
  if (!v) return '';
  v = ensureLeadingSlash(v);
  v = stripTrailingSlash(v);
  return v === '/' ? '' : v;
}

const repoName = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';
const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? repoName);

const siteUrlRaw = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const siteUrl = stripTrailingSlash(siteUrlRaw);

const routes = [
  '/', // root (non-localized)
  '/en/',
  '/en/about/',
  '/en/services/',
  '/en/contact/',
  '/ar/',
  '/ar/about/',
  '/ar/services/',
  '/ar/contact/',
];

const toAbs = (p) => {
  const clean = p.startsWith('/') ? p : `/${p}`;
  return `${siteUrl}${basePath}${clean}`;
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${toAbs(r)}</loc></url>`).join('\n')}
</urlset>
`;

const publicDir = path.join(process.cwd(), 'public');
fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

const robots = `User-agent: *
Allow: /
Sitemap: ${toAbs('/sitemap.xml')}
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');

console.log('✅ sitemap.xml + robots.txt generated');
console.log('✅ basePath:', basePath || '(none)');
console.log('✅ siteUrl:', siteUrl);
