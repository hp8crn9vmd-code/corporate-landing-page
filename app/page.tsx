'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // التوجيه القسري للمسار الصحيح مع اسم المستودع
    // هذا يتجاوز أي تعقيدات في توجيه Next.js
    window.location.replace('/corporate-landing-page/ar');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        backgroundColor: '#f5f5f5',
      }}
    >
      <p style={{ color: '#666' }}>
        جاري نقلك إلى الموقع...
        <br />
        Redirecting...
      </p>
    </div>
  );
}
