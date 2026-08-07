import { getTranslations } from 'next-intl/server';
import { Book } from 'lucide-react';
import FaqSection from '@/components/shared/FaqSection';
import GlobalCTA from '@/components/layout/GlobalCTA';
import { FadeIn } from '@/components/shared/Motion';
import GlossaryClient, { GlossaryTerm, ValueBox } from '@/components/glossary/GlossaryClient';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Glossary' });
  return {
    title: t('Hero.title'),
    description: t('Hero.subtitle'),
  
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/glossary' : `/${locale}/glossary`}`,
      languages: { 'en-US': '/glossary', es: '/es/glossary', 'x-default': '/glossary' },
    },
  };
}

export default async function GlossaryPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Glossary' });
  const indexT = await getTranslations({ locale, namespace: 'Index' });

  // Load and map terms dictionary into a list
  const termsRaw = await t.raw('Terms');
  const terms: GlossaryTerm[] = Object.keys(termsRaw).map((key) => ({
    key,
    title: termsRaw[key].title,
    definition: termsRaw[key].definition,
  }));

  // Load value boxes
  const valueBoxes: ValueBox[] = await t.raw('ValueBoxes');

  // Safely parse title structure
  const rawTitle = t('Hero.title');
  const titleParts = rawTitle.includes('&') ? rawTitle.split('&') : [rawTitle, ''];

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${locale === 'en' ? '' : locale + '/'}glossary`,
    'name': rawTitle,
    'hasDefinedTerm': terms.map(term => ({
      '@type': 'DefinedTerm',
      'name': term.title,
      'description': term.definition
    }))
  };

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-44 pb-20 md:pt-56 md:pb-32 border-b border-black/5 bg-[#F8F8F6]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#13a7b7]/10 border border-[#13a7b7]/15 text-[#0b7f8c] rounded-full text-[10px] font-dm-mono font-bold uppercase tracking-widest mb-6">
              <Book className="w-3.5 h-3.5 text-[#0b7f8c]" />
              {t('Hero.badge')}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-absans font-bold text-black uppercase tracking-tighter leading-[0.95] mb-6">
              {titleParts[0]}
              {titleParts[1] && (
                <>
                  <br />
                  <span className="text-[#13a7b7]">& {titleParts[1]}</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-black/60 font-archia font-medium leading-relaxed max-w-2xl mx-auto">
              {t('Hero.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Glossary Interactive Client: search, filters, cards grid, values boxes */}
      <GlossaryClient terms={terms} valueBoxes={valueBoxes} />

      {/* FAQ Section */}
      <FaqSection
        id="glossary-faq"
        eyebrow="(FAQ)"
        title={indexT('FAQ.title')}
        subtitle={indexT('FAQ.subtitle')}
        items={indexT.raw('FAQ.items') as any[]}
        theme="light"
      />

      {/* Global B2B Call-To-Action Segment */}
      <GlobalCTA
        badge="Science & Research"
        title={t('Cta.title')}
        subtitle={t('Cta.subtitle')}
        primaryCtaText={t('Cta.button')}
        primaryCtaHref="/products"
      />

    </main>
  );
}
