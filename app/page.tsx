import { redirect } from 'next/navigation';

export default function RootPage() {
  // توجيه فوري للغة العربية عند فتح الموقع
  redirect('/ar');
}
