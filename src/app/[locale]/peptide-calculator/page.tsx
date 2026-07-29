import { getTranslations } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import CalculatorClient from '@/components/calculator/CalculatorClient';
import CalculatorContent from '@/components/calculator/CalculatorContent';
import CalculatorFaq from '@/components/calculator/CalculatorFaq';
import { FlaskConical } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const url = `${baseUrl}/${locale}/peptide-calculator`;

  const ogTitle = t('calculatorTitle');
  const ogDesc = t('calculatorDesc');
  const ogUrlImage = `${baseUrl}/api/og?title=${encodeURIComponent('Peptide Reconstitution Calculator')}&desc=${encodeURIComponent(ogDesc)}&category=Research%20Tools`;

  return {
    metadataBase: new URL(baseUrl),
    title: ogTitle,
    description: ogDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: url,
      siteName: '99 Purity Wholesale',
      images: [
        {
          url: ogUrlImage,
          width: 1200,
          height: 630,
          alt: '99 Purity Wholesale Peptide Reconstitution Calculator',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDesc,
      images: [ogUrlImage],
    },
    robots: 'index, follow',
  };
}

export default async function CalculatorPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Calculator' });
  const messages = await getMessages({ locale: params.locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <main className="min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
        {/* Light Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-52 pb-12 md:pt-64 md:pb-16 border-b border-black/5 bg-[#F8F8F6]">
          <div className="reveal-grid container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex bg-black/5 border border-black/5 px-5 py-2 rounded-full text-[10px] font-bold font-dm-sans uppercase tracking-widest text-black/60 mb-6 items-center gap-2">
                <FlaskConical className="w-3.5 h-3.5" />
                {t('title')}
              </div>
              
              <h1 className="reveal-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-absans text-black uppercase tracking-tight leading-none mb-6 break-words w-full">
                {t('title')}
              </h1>
              
              <p className="reveal-text text-base md:text-lg lg:text-xl font-archia font-semibold text-black/75 leading-relaxed max-w-4xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            {/* Calculator Interactive Body - Premium Reveal Card */}
            <div className="reveal-card">
              <CalculatorClient />
            </div>

            {/* Pillar SEO Content */}
            <CalculatorContent />
          </div>
        </section>
        
        {/* Real-World FAQs (Global Component handles its own container) */}
        <CalculatorFaq />
      </main>
    </NextIntlClientProvider>
  );
}
