'use client';

import React from 'react';
import LegalLayout, { LegalSection } from '@/components/legal/LegalLayout';

export default function CompliancePage() {
  const sections: LegalSection[] = [
    {
      id: 'ruo-guidelines',
      title: '1. Research Use Only (RUO) Legal Framework',
      content: (
        <>
          <p>
            All products synthesized and distributed by 99 Purity Wholesale are strictly classified under the federal Research Use Only (RUO) exemption. Under applicable FDA regulations, these materials are designated solely for laboratory in vitro scientific studies.
          </p>
          <p>
            These compounds are not intended for diagnostics, food additives, drugs, cosmetics, or household applications. We do not provide instructions, dosages, or clinical use guidelines, as any clinical application is prohibited.
          </p>
        </>
      )
    },
    {
      id: 'hplc-validation',
      title: '2. Batch-Matched HPLC & MS Verification',
      content: (
        <>
          <p>
            Our core quality compliance relies on comprehensive chemical validation. Every batch of compounds undergoes High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS) analysis at an independent third-party facility.
          </p>
          <p>
            Batch-matched chromatograms are available digitally on every order, certifying chemical identity, purity, and concentration levels (&ge;99%).
          </p>
        </>
      )
    },
    {
      id: 'safety-sds',
      title: '3. SDS & Chemical Hazard Control',
      content: (
        <>
          <p>
            All research chemicals are shipped with corresponding Safety Data Sheets (SDS). Researchers must ensure their laboratories are equipped with appropriate ventilation, personal protective equipment (PPE), and disposal containers in accordance with OSHA standards.
          </p>
        </>
      )
    },
    {
      id: 'facility-standards',
      title: '4. Synthesis Standards & Cleanrooms',
      content: (
        <>
          <p>
            Our chemical synthesis takes place inside certified laboratory environments utilizing state-of-the-art solid-phase peptide synthesis (SPPS) equipment. We enforce sterile lyophilization and nitrogen-sealing workflows to prevent peptide degradation or atmospheric contamination.
          </p>
        </>
      )
    },
    {
      id: 'verification-audits',
      title: '5. Institutional Account Verification',
      content: (
        <>
          <p>
            To prevent diversion and ensure safety, we audit all wholesale account applications. We verify state professional licenses, EIN business credentials, and physical facility addresses prior to dispatch.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalLayout
      title="Compliance & Regulatory Standards"
      badge="Safety & Compliance Regulation"
      lastUpdated="Last Updated: May 2026"
      sections={sections}
    />
  );
}
