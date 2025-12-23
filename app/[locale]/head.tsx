export default function Head() {
  return (
    <>
      {/* منع اقتراح الترجمة في المتصفح قدر الإمكان */}
      <meta name="google" content="notranslate" />
      <meta name="googlebot" content="notranslate" />

      {/* بعض المتصفحات/الإضافات تعتمد على هذا */}
      <meta httpEquiv="Content-Language" content="ar,en" />

      {/* تحسين التوافق مع اتجاه اللغة */}
      <meta name="color-scheme" content="light dark" />
    </>
  );
}
