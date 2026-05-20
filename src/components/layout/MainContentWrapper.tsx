'use client';

import { usePathname } from '@/i18n/routing';
import React from 'react';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '';
  const isResearchPage = pathname.includes('/research');

  return (
    <main className={`flex-grow ${(isHomePage || isResearchPage) ? '' : 'pt-24 md:pt-32'}`}>
      {children}
    </main>
  );
}
