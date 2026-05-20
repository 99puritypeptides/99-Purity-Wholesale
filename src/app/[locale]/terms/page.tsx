'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import LegalLayout, { LegalSection } from '@/components/legal/LegalLayout';

export default function TermsOfServicePage() {
  const t = useTranslations('Legal');

  const sections: LegalSection[] = [
    {
      id: 'research-only',
      title: '1. Laboratory Research Use Only',
      content: (
        <>
          <p className="text-red-600 font-bold border-l-2 border-red-600 pl-4 py-1 bg-red-600/5 rounded-r-xl">
            CRITICAL SAFETY WARNING: All products supplied by 99 Purity Wholesale are strictly for laboratory research and in vitro chemical testing. They are NOT intended for human consumption, clinical diagnostic trials, or therapeutic applications.
          </p>
          <p>
            By purchasing from this site, you certify that you are qualified under applicable federal and state guidelines to handle chemical research reagents.
          </p>
        </>
      )
    },
    {
      id: 'eligibility',
      title: '2. Buyer Verification & Qualifications',
      content: (
        <>
          <p>
            We supply chemical compounds exclusively to registered entities, including compounding pharmacies, clinical trial laboratories, wellness institutions, and certified researchers.
          </p>
          <p>
            We reserve the right to request proof of licensing, EIN certification, or laboratory credentials prior to shipping any order. Orders placed by unqualified individuals will be cancelled immediately.
          </p>
        </>
      )
    },
    {
      id: 'restrictions',
      title: '3. Use & Redistribution Restrictions',
      content: (
        <>
          <p>
            Buyers agree not to repackage, misbrand, or redistribute our products for any household, clinical, or diagnostic purpose. Any resale of these compounds must fully disclose their Research Use Only (RUO) legal classification.
          </p>
        </>
      )
    },
    {
      id: 'liability',
      title: '4. Limitation of Liability',
      content: (
        <>
          <p>
            In no event shall 99 Purity Wholesale, its laboratories, or partners be liable for any special, incidental, or consequential damages resulting from the handling, storage, or experimental application of our research compounds.
          </p>
          <p>
            The buyer assumes full responsibility for complying with occupational safety guidelines, hazardous substance handling protocols, and disposal regulations.
          </p>
        </>
      )
    },
    {
      id: 'patents',
      title: '5. Intellectual Property & Patents',
      content: (
        <>
          <p>
            The sale of chemical compounds on this platform does not grant license or authorization for their use in violation of active chemical synthesis patents. Compliance with intellectual property rights is the sole responsibility of the researcher.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalLayout
      title={t('Terms.title') || "Terms of Service"}
      badge="B2B Supply Terms"
      lastUpdated="Last Updated: May 2026"
      sections={sections}
    />
  );
}
