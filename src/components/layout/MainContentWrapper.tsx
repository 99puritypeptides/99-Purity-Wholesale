'use client';

import { usePathname } from '@/i18n/routing';
import React from 'react';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '';

  return (
    <main className={`flex-grow ${isHomePage ? '' : 'pt-24 md:pt-32'}`}>
      {children}
    </main>
  );
}
