import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Rajdhani, DM_Sans, DM_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import MainContentWrapper from '@/components/layout/MainContentWrapper';
import '../globals.css';

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
      'wholesale peptides USA',
      'bulk peptide supplier United States',
      'research grade peptides wholesale',
      'wholesale peptide supplier',
      'US manufactured peptides',
      'bulk semaglutide wholesale',
      'wholesale BPC-157',
      'compounding pharmacy peptides',
      'peptide dropshipping program',
      'private label peptides USA',
      'bulk GLP-1 peptides',
      'wholesale tirzepatide',
      'peptide supplier for wellness clinic',
      '99 purity wholesale',
      'COA verified peptides wholesale',
    ],
    icons: {
      icon: '/images/99pw-logo.webp',
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
    themeColor: '#4FC3D0',
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
    "alternateName": "99 Purity Wholesale",
    "description": "America's trusted wholesale peptide supplier. U.S.-manufactured, ≥99% purity research-grade peptides for compounding pharmacies, wellness clinics, and licensed distributors.",
    "url": "https://99puritypeptides.com",
    "logo": "https://99puritypeptides.com/images/99pw-logo.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["English", "Spanish"],
        "areaServed": "US",
        "contactOption": "TollFree"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Wholesale Peptides USA",
      "Research Grade Peptides",
      "GLP-1 Peptides Wholesale",
      "BPC-157 Bulk Supply",
      "Semaglutide Wholesale",
      "Compounding Pharmacy Peptides",
      "Private Label Peptides",
      "Peptide Dropshipping"
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${dmSans.className} ${rajdhani.variable} ${dmSans.variable} ${dmMono.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CartProvider>
            <Header />
            <MainContentWrapper>
              {children}
            </MainContentWrapper>
            <Footer />
            <FloatingWhatsApp />
            <CartDrawer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

