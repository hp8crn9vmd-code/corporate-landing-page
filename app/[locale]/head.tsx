// CSP مُنظم وقابل للتطوير — المرحلة الأولى (بدون كسر التوافق)
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.web3forms.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "connect-src 'self' https://api.web3forms.com",
].join("; ");

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Content Security Policy (Static-safe) */}
      <meta httpEquiv="Content-Security-Policy" content={CSP} />
    </>
  );
}
