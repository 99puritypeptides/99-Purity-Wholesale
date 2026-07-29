import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Rajdhani, DM_Sans, DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import MainContentWrapper from '@/components/layout/MainContentWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScrollProvider';
import '../globals.css';

const absans = localFont({
  src: '../../../public/fonts/absans.woff2',
  variable: '--font-absans',
  display: 'swap',
});

const goku = localFont({
  src: '../../../public/fonts/goku.woff2',
  variable: '--font-goku',
  display: 'swap',
});

const meshed = localFont({
  src: '../../../public/fonts/meshed.woff2',
  variable: '--font-meshed',
  display: 'swap',
});

const archia = localFont({
  src: '../../../public/fonts/archia.woff2',
  variable: '--font-archia',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

export const viewport = {
  themeColor: '#4FC3D0',
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'),
    title: {
      default: t('homeTitle'),
      template: '%s | 99 Purity Wholesale',
    },
    description: t('homeDesc'),
    keywords: [
      '99 purity peptides',
      'peptides wholesale',
      'research grade peptides',
      'wholesale peptide supplier',
      'US manufactured peptides'
    ],
    icons: {
      icon: '/favicon.ico',
      apple: '/images/99pw-logo.webp',
    },
    openGraph: {
      type: 'website',
      siteName: '99 Purity Wholesale',
      title: t('homeTitle'),
      description: t('homeDesc'),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/og-image.png`,
          width: 1200,
          height: 630,
          alt: '99 Purity Wholesale — Wholesale Peptide Supplier USA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDesc'),
      images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/og-image.png`],
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: '99 Purity Wholesale',
      startupImage: '/images/99pw-logo.webp',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  
    alternates: { canonical: `/${locale === 'en' ? '' : locale}` },
  };
}


import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "99 Purity Wholesale",
    "alternateName": ["99 Purity Wholesale", "99PurityWholesale"],
    "description": "B2B-exclusive wholesale peptide supplier in the United States. U.S.-manufactured, ≥99% purity research-grade peptides independently verified by Freedom Diagnostic for compounding pharmacies, wellness clinics, and licensed distributors.",
    "url": "https://99puritywholesale.com",
    "logo": "https://99puritywholesale.com/images/99pw-logo.webp",
    "sameAs": [
      "https://99puritypeptides.com"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["English", "Spanish"],
        "areaServed": "US"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Wholesale Peptides USA",
      "99 Purity Peptides",
      "Research Grade Peptides Wholesale",
      "GLP-1 Peptides Wholesale",
      "BPC-157 Bulk Supply",
      "Semaglutide Wholesale",
      "Compounding Pharmacy Peptide Supply",
      "Private Label Peptides USA",
      "Peptide Dropshipping Program",
      "HPLC Verified Peptide Purity",
      "Freedom Diagnostic COA Verification",
      "Tirzepatide Bulk Suppy",
      "Research Chemicals Wholesale",
      "Peptide Synthesis USA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wholesale Peptide Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Semaglutide — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Tirzepatide — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "BPC-157 — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "TB-500 — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ipamorelin — Wholesale Bulk Supply" } }
      ]
    }
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${dmSans.className} ${rajdhani.variable} ${dmSans.variable} ${dmMono.variable} ${absans.variable} ${goku.variable} ${meshed.variable} ${archia.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothScrollProvider>
            <CartProvider>
              <Header />
              <MainContentWrapper>
                {children}
              </MainContentWrapper>
              <Footer />
              <FloatingWhatsApp />
              <CartDrawer />
            </CartProvider>
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
