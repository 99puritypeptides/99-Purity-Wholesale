import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Rajdhani, DM_Sans, DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import MainContentWrapper from '@/components/layout/MainContentWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScrollProvider';
import Script from 'next/script';
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const ogTitle = t('homeTitle');
  const ogDesc = t('homeDesc');
  const ogUrlImage = `${baseUrl}/api/og?title=${encodeURIComponent('99 Purity Wholesale')}&desc=${encodeURIComponent(ogDesc)}&category=Wholesale%20Supplier`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: ogTitle,
      template: '%s | 99 Purity Wholesale',
    },
    description: ogDesc,
    authors: [{ name: '99 Purity Wholesale', url: baseUrl }],
    creator: '99 Purity Wholesale',
    publisher: '99 Purity Wholesale',
    keywords: [
      '99 purity peptides',
      'peptides wholesale',
      'research grade peptides',
      'wholesale peptide supplier',
      'US manufactured peptides'
    ],
    icons: {
      apple: [
        { url: '/images/99pw-logo.webp', sizes: '180x180', type: 'image/webp' },
      ],
    },
    openGraph: {
      type: 'website',
      siteName: '99 Purity Wholesale',
      title: ogTitle,
      description: ogDesc,
      images: [
        {
          url: ogUrlImage,
          width: 1200,
          height: 630,
          alt: '99 Purity Wholesale — Wholesale Peptide Supplier USA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDesc,
      images: [ogUrlImage],
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
  
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: { 'en-US': '/', es: '/es', 'x-default': '/' },
    },
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
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semaglutide — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tirzepatide — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BPC-157 — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TB-500 — Wholesale Bulk Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ipamorelin — Wholesale Bulk Supply" } }
      ]
    }
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-C9PFGXE8NT';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" />
        <script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
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
