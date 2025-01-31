'use client'; // Mark this as a Client Component

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import "./globals.css";
import { ReactNode } from 'react';
import { useLanguage } from '@/components/translations';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Redirect from "/" to "/en"
  useEffect(() => {
    if (pathname === '/') {
      router.replace('/en');
    }
  }, [pathname, router]);

  const lang = useLanguage(); // Get the current language

  return (
    <html lang={lang}>
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}