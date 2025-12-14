export default function SecureHead({ locale }: { locale: string }) {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* سياسات أمان المحتوى (CSP) للمواقع الثابتة
        ملاحظة: في الإنتاج الفعلي، يفضل توليد التجزئة (Hashes) للنصوص البرمجية
      */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.web3forms.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com;" 
      />
    </head>
  );
}
