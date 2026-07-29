import { notFound } from 'next/navigation';
import { MapPin, Mail, Zap, ShieldAlert, CheckCircle2, Package, ArrowRight, FlaskConical, ShieldCheck, Truck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import locationsData from '@/data/locations.json';
import productsData from '@/data/products.json';
import { getTranslations } from 'next-intl/server';
import FaqSection from '@/components/shared/FaqSection';
import GlobalCTA from '@/components/layout/GlobalCTA';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Motion';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const location = locationsData.find((loc) => loc.slug === params.slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDesc,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDesc,
    },
    alternates: { canonical: `/${params.locale === 'en' ? '' : params.locale}/locations/${params.slug}` },
  };
}

export default async function LocationTemplatePage({ params }: { params: { locale: string; slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'LocationDetail' });
  const homeT = await getTranslations({ locale: params.locale, namespace: 'Index' });
  const location = locationsData.find((loc) => loc.slug === params.slug);

  if (!location) notFound();

  const faqItems = homeT.raw('FAQ.items') as any[];

  
  const faqSchema = location.localFaqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.localFaqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '99 Purity Wholesale',
    description: `Wholesale research-grade peptide supplier serving licensed professionals in ${location.city}, ${location.state}.`,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
        containedInPlace: { '@type': 'Country', name: 'United States' },
      },
    },
    knowsAbout: location.localKeywords,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Wholesale Peptides ${location.city}`,
      itemListElement: location.popularProducts.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: `${p} — Wholesale Bulk Supply` },
      })),
    },
  };

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BreadcrumbSchema items={[
        { name: 'Locations', item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale === 'en' ? '' : params.locale + '/'}locations` },
        { name: `${location.city}, ${location.state}`, item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale === 'en' ? '' : params.locale + '/'}locations/${location.slug}` }
      ]} />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-44 pb-20 md:pt-56 md:pb-32 border-b border-black/5 bg-[#F8F8F6]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-black/35 font-dm-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              <Link href="/" className="hover:text-[#13a7b7] transition-colors">{t('home')}</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-[#13a7b7] transition-colors">{t('locations')}</Link>
              <span>/</span>
              <span className="text-[#13a7b7]">{location.city}, {location.state}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#13a7b7]" />
              <span className="text-[#13a7b7] font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                {location.state} · {location.region} {t('regionSuffix')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-absans text-black uppercase tracking-tight max-w-5xl leading-tight mb-8">
              {location.h1}
            </h1>
            <p className="text-base md:text-lg text-black/60 font-archia leading-relaxed max-w-3xl font-medium">
              {location.intro}
            </p>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-10">
              {['🇺🇸 U.S. Manufactured', '≥99% Purity', 'Batch COA Verified', 'B2B Only', '2–4 Day Delivery'].map((badge) => (
                <span key={badge} className="bg-white border border-black/5 text-black/60 px-4 py-2 rounded-full font-dm-mono text-[9px] uppercase tracking-wider font-semibold shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Rich Content */}
            <div className="lg:col-span-8 space-y-16">

              {/* Body Content */}
              <FadeIn className="space-y-6">
                <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight">
                  {t('contactTitle', { city: location.city })}
                </h2>
                <div className="space-y-4 text-black/60 font-archia font-medium leading-relaxed text-sm md:text-base">
                  <p className="text-black/85 font-semibold leading-relaxed">{location.bodyP1}</p>
                  <p>{location.bodyP2}</p>
                  <p>{location.bodyP3}</p>
                  {location.bodyP4 && <p>{location.bodyP4}</p>}
                  {location.bodyP5 && <p>{location.bodyP5}</p>}
                </div>
              </FadeIn>

              {/* Popular Products */}
              <FadeIn className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-absans font-bold text-black uppercase tracking-tight mb-4">
                  {t('topTitle', { city: location.city })}
                </h2>
                <p className="text-black/50 font-archia font-semibold text-sm mb-8">
                  {t('topDesc', { city: location.city })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.popularProducts.map((product, idx) => {
                    const matchedProduct = productsData.find(
                      (p) => p.name.toLowerCase() === product.toLowerCase()
                    );
                    const href = matchedProduct 
                      ? `/products/`
                      : '/products';

                    return (
                      <Link 
                        key={idx} 
                        href={href}
                        className="bg-[#F8F8F6] border border-black/5 p-6 rounded-2xl flex items-center justify-between group hover:border-[#13a7b7]/30 hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div>
                          <span className="font-absans font-bold text-black text-lg uppercase tracking-tight group-hover:text-[#13a7b7] transition-colors">{product}</span>
                          <div className="text-[#13a7b7] font-dm-mono text-[9px] font-bold uppercase tracking-widest mt-1.5">{t('researchGrade')} · {t('puritySuffix')}</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:border-[#13a7b7]/30 transition-colors shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-black/30 group-hover:text-[#13a7b7] transition-colors" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-black/5">
                  <Link href="/products" className="inline-flex items-center gap-2 text-[#13a7b7] font-dm-mono text-xs uppercase tracking-widest hover:text-black transition-colors font-bold">
                    {t('viewCatalog')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>

              {/* Why Choose Us for This Location */}
              <FadeIn className="bg-[#13a7b7]/5 border border-[#13a7b7]/10 rounded-[2.5rem] p-8 md:p-10">
                <h2 className="text-2xl font-absans font-bold text-black uppercase tracking-tight mb-6">
                  {t('whyTitle', { city: location.city })}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.whyUs.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#13a7b7] mt-0.5 flex-shrink-0" />
                      <span className="text-black/75 font-archia text-sm font-semibold leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              
              {/* Institutions Served (GEO Content) */}
              {location.institutionsServed && (
                <FadeIn className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-absans font-bold text-black uppercase tracking-tight border-b border-black/10 pb-4">
                    Institutions Served in {location.city}
                  </h3>
                  <p className="text-black/75 font-archia font-medium leading-relaxed text-sm md:text-base">
                    {location.institutionsServed}
                  </p>
                </FadeIn>
              )}

              {/* Local Logistics (GEO Content) */}
              {location.logisticsDetails && (
                <FadeIn className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-absans font-bold text-black uppercase tracking-tight border-b border-black/10 pb-4">
                    Priority Wholesale Logistics to {location.state}
                  </h3>
                  <p className="text-black/75 font-archia font-medium leading-relaxed text-sm md:text-base">
                    {location.logisticsDetails}
                  </p>
                </FadeIn>
              )}


              {/* Shipping Info */}
              <FadeIn className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F8F6] border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-black/55" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-absans font-bold text-black uppercase tracking-tight mb-2">
                      {t('fastShippingTitle', { state: location.state })}
                    </h3>
                    <p className="text-black/50 font-archia font-semibold text-sm leading-relaxed">
                      {t('fastShippingDesc', { city: location.city })}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Package, label: t('shippingPoints.priority'), sub: t('shippingPoints.prioritySub', { city: location.city }) },
                    { icon: ShieldCheck, label: t('shippingPoints.discreet'), sub: t('shippingPoints.discreetSub') },
                    { icon: CheckCircle2, label: t('shippingPoints.noCustoms'), sub: t('shippingPoints.noCustomsSub') },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col justify-between bg-[#F8F8F6] border border-black/5 rounded-2xl p-5 hover:border-[#13a7b7]/20 transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center mb-4">
                        <item.icon className="w-4 h-4 text-black/55" />
                      </div>
                      <div>
                        <div className="text-black font-absans font-bold text-sm uppercase tracking-wide">{item.label}</div>
                        <div className="text-black/40 font-archia font-semibold text-[10px] leading-relaxed mt-1">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* SEO Content: What We Supply */}
              <FadeIn className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-absans font-bold text-black uppercase tracking-tight">
                  {t('catTitle', { city: location.city })}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { cat: 'GLP-1 & Metabolic Peptides', products: 'Semaglutide, Tirzepatide, Retatrutide, Cagrilintide' },
                    { cat: 'Growth Hormone Peptides', products: 'Ipamorelin, CJC-1295, Sermorelin, Tesamorelin, GHRP-2' },
                    { cat: 'Healing & Recovery', products: 'BPC-157, TB-500, KPV, LL37, B7-33' },
                    { cat: 'Cognitive & Nootropic', products: 'Semax, Selank, Dihexa, DSIP, Adamax' },
                    { cat: 'Anti-Aging & Longevity', products: 'Epithalon, MOTS-c, NAD+, Thymalin, SS-31' },
                    { cat: 'Cosmetic & Aesthetic', products: 'GHK-Cu, Snap-8, AOD9604, 5-AMINO-1MQ' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-black/5 rounded-2xl p-6 hover:border-[#13a7b7]/25 transition-all shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F8F8F6] border border-black/5 flex items-center justify-center flex-shrink-0">
                          <FlaskConical className="w-5 h-5 text-black/55" />
                        </div>
                        <div>
                          <div className="text-black font-absans font-bold text-sm uppercase tracking-wide mb-1.5">{item.cat}</div>
                          <div className="text-black/45 font-archia font-medium text-[11px] leading-relaxed flex flex-wrap gap-x-1 gap-y-0.5">
                            {item.products.split(', ').map((prodName, pIdx, arr) => {
                              const matched = productsData.find(
                                (p) => p.name.toLowerCase() === prodName.toLowerCase()
                              );
                              const href = matched 
                                ? `/products/`
                                : '/products';
                              return (
                                <span key={prodName} className="inline-flex items-center">
                                  <Link href={href} className="hover:text-[#13a7b7] hover:underline transition-colors font-semibold">
                                    {prodName}
                                  </Link>
                                  {pIdx < arr.length - 1 && <span className="text-black/30 ml-0.5">,</span>}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Compliance Note */}
              <FadeIn className="bg-amber-500/5 border border-amber-500/10 rounded-[2rem] p-6 flex gap-4">
                <ShieldAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-absans font-bold text-amber-700 text-sm uppercase tracking-wider mb-1.5">{t('complianceTitle')}</h4>
                  <p className="text-xs text-amber-950/60 font-archia font-semibold leading-relaxed">
                    {t('complianceDesc', { city: location.city, state: location.state })}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Sticky Sidebar CTAs */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-28 md:top-36 space-y-6">

                {/* Primary CTA Card */}
                <div className="bg-[#0D0E10] text-white border border-white/5 rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  <h3 className="text-xl md:text-2xl font-absans font-bold text-white uppercase tracking-tight mb-2">
                    {t('contactTitle', { city: location.city })}
                  </h3>
                  <p className="text-white/40 font-archia font-medium text-xs leading-relaxed mb-8">
                    {t('contactDesc', { state: location.state })}
                  </p>

                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/18433307365?text=${encodeURIComponent(t('whatsappMsg', { city: location.city, state: location.state }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 rounded-xl transition-all font-absans text-[11px] uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-lg"
                    >
                      <Zap className="w-4 h-4 fill-current animate-pulse" /> {t('whatsappCta')}
                    </a>

                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-white/30 font-dm-mono text-[9px] uppercase tracking-widest font-bold">{t('or')}</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <a
                      href={`mailto:wholesale@99puritypeptides.com?subject=${encodeURIComponent(t('emailSubject', { city: location.city, state: location.state }))}`}
                      className="w-full bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all font-absans text-[11px] uppercase tracking-widest flex items-center justify-center gap-2.5"
                    >
                      <Mail className="w-4 h-4" /> {t('emailCta')}
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <Link href="/products" className="text-white hover:text-white/70 font-dm-mono text-[10px] uppercase tracking-widest transition-colors inline-flex items-center gap-2 font-bold">
                      {t('viewCatalog')} <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white border border-black/5 rounded-[2.5rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-base font-absans font-bold text-black uppercase tracking-wider mb-6">{t('accountDetails')}</h4>
                  <div className="space-y-4">
                    {[
                      { label: t('details.moq'), value: t('details.moqVal') },
                      { label: t('details.purity'), value: t('details.purityVal') },
                      { label: t('details.fulfillment'), value: t('details.fulfillmentVal') },
                      { label: t('details.payment'), value: t('details.paymentVal') },
                      { label: t('details.shipping'), value: t('details.shippingVal') },
                      { label: t('details.buyers'), value: t('details.buyersVal') },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
                        <span className="text-black/40 font-dm-mono text-[9px] uppercase tracking-widest font-bold">{item.label}</span>
                        <span className="text-black/85 font-archia font-bold text-xs text-right leading-tight">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply CTA */}
                <div className="bg-[#13a7b7]/5 border border-[#13a7b7]/10 rounded-[2.5rem] p-6 text-center">
                  <p className="text-black/50 font-archia font-semibold text-xs leading-relaxed mb-5">{t('applyMsg')}</p>
                  <Link
                    href="/wholesale-application"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#13a7b7]/10 border border-[#13a7b7]/30 text-[#13a7b7] hover:bg-[#13a7b7]/25 font-bold py-3.5 px-6 rounded-xl transition-all font-absans uppercase tracking-widest text-[10px]"
                  >
                    {t('applyCta')} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-8">{t('otherRegions')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {locationsData
                .filter((loc) => loc.slug !== params.slug)
                .slice(0, 4)
                .map((loc) => (
                  <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group block">
                    <div className="bg-[#F8F8F6] border border-black/5 rounded-2xl p-6 hover:border-[#13a7b7]/30 hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#13a7b7]" />
                        <span className="text-[#13a7b7] font-dm-mono text-[9px] font-bold uppercase tracking-wider">{loc.state}</span>
                      </div>
                      <div className="text-black font-absans font-bold text-xl group-hover:text-[#13a7b7] transition-colors uppercase tracking-tight mb-4">{loc.city}</div>
                      <div className="text-black/40 font-archia font-semibold text-[10px] uppercase tracking-wider flex items-center gap-1">
                        {t('viewHub')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>

      
      {/* FAQ Segment (AEO Content) */}
      {(location.localFaqs && location.localFaqs.length > 0) ? (
        <FaqSection 
          title={`Frequently Asked Questions in ${location.city}`}
          subtitle={`Wholesale peptide procurement information for ${location.state} businesses.`}
          items={location.localFaqs}
          eyebrow="Local FAQ"
        />
      ) : (
        faqItems && faqItems.length > 0 && (
          <FaqSection 
            title={homeT('FAQ.title')}
            subtitle={homeT('FAQ.subtitle')}
            items={faqItems}
            eyebrow="(FAQ)"
          />
        )
      )}
</main>
  );
}
