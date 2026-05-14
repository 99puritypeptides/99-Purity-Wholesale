import { notFound } from 'next/navigation';
import { MapPin, Mail, Zap, ShieldAlert, CheckCircle2, Package, ArrowRight, FlaskConical, ShieldCheck, Truck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import locationsData from '@/data/locations.json';
import { getTranslations } from 'next-intl/server';

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
  };
}

export default async function LocationTemplatePage({ params }: { params: { locale: string; slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'LocationDetail' });
  const location = locationsData.find((loc) => loc.slug === params.slug);

  if (!location) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '99 Purity Peptides',
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
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Research Use Banner */}
      <div className="bg-amber-900/20 border-b border-amber-600/20 py-2 px-4 text-center">
        <p className="text-amber-500/80 font-dm-mono text-xs uppercase tracking-widest">
          All products are for laboratory research use only · Not for human consumption · Licensed professionals only
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-accent/8 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-white/30 font-dm-mono text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-brand-accent transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-brand-accent">{location.city}, {location.state}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-brand-accent" />
            <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-wider">
              {location.state} · {location.region} Region
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-rajdhani font-bold mb-8 text-white tracking-tight max-w-5xl leading-tight">
            {location.h1}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl">
            {location.intro}
          </p>

          {/* Quick Trust Badges */}
          <div className="flex flex-wrap gap-4 mt-10">
            {['🇺🇸 U.S. Manufactured', '≥99% Purity', 'Batch COA Verified', 'B2B Only', '2–4 Day Delivery'].map((badge) => (
              <span key={badge} className="bg-white/5 border border-white/10 text-white/60 px-4 py-1.5 rounded-full font-dm-mono text-xs uppercase tracking-wider">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Rich Content */}
            <div className="lg:col-span-8 space-y-12">

              {/* Body Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-rajdhani font-bold text-white">
                  Wholesale Peptide Supply for Licensed Professionals in {location.city}
                </h2>
                <p className="text-gray-300 font-dm-sans leading-relaxed text-lg">{location.bodyP1}</p>
                <p className="text-gray-400 font-dm-sans leading-relaxed">{location.bodyP2}</p>
                <p className="text-gray-400 font-dm-sans leading-relaxed">{location.bodyP3}</p>
              </div>

              {/* Popular Products */}
              <div>
                <h2 className="text-3xl font-rajdhani font-bold text-white mb-4">
                  Top Wholesale Peptides in {location.city}
                </h2>
                <p className="text-gray-400 font-dm-sans mb-8">
                  Based on wholesale procurement data from {location.city}-area licensed facilities, these compounds are among the most actively sourced in this region:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.popularProducts.map((product, idx) => (
                    <div key={idx} className="bg-[#0e131b] border border-white/5 p-5 rounded-xl flex items-center justify-between group hover:border-brand-accent/30 transition-all">
                      <div>
                        <span className="font-rajdhani font-bold text-white text-lg">{product}</span>
                        <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mt-1">Research Grade · ≥99% Purity</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent/50 group-hover:text-brand-accent transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/products" className="inline-flex items-center gap-2 text-brand-accent font-dm-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
                    View Full Wholesale Catalog <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Why Choose Us for This Location */}
              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-8">
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-6">
                  Why {location.city}-Area Professionals Choose 99 Purity Peptides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {location.whyUs.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-dm-sans text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-[#0e131b] border border-white/5 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Truck className="w-8 h-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                      Fast Domestic Fulfillment to {location.state}
                    </h3>
                    <p className="text-gray-400 font-dm-sans text-sm leading-relaxed">
                      Because we ship from within the United States, licensed professionals in {location.city} receive their wholesale peptide orders without international customs delays, package seizure risk, or cold-chain integrity failures during international transit. Orders are processed immediately upon payment confirmation.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Package, label: 'Priority Domestic Shipping', sub: '2–4 Business Days to ' + location.city },
                    { icon: ShieldCheck, label: 'Stable Packaging', sub: 'Lyophilized — No Cold Chain Required' },
                    { icon: CheckCircle2, label: 'Zero Customs Risk', sub: '100% U.S. Domestic Fulfillment' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                      <item.icon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-rajdhani font-bold text-sm">{item.label}</div>
                        <div className="text-gray-500 font-dm-sans text-xs mt-1">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Content: What We Supply */}
              <div>
                <h2 className="text-3xl font-rajdhani font-bold text-white mb-6">
                  Wholesale Peptide Categories Available to {location.city} Buyers
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
                    <div key={i} className="bg-[#0e131b] border border-white/5 rounded-xl p-5 hover:border-brand-accent/20 transition-all">
                      <div className="flex items-start gap-3">
                        <FlaskConical className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white font-rajdhani font-bold text-sm mb-1">{item.cat}</div>
                          <div className="text-gray-500 font-dm-sans text-xs">{item.products}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Note */}
              <div className="bg-yellow-900/10 border border-yellow-700/30 rounded-xl p-6 flex gap-4">
                <ShieldAlert className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-rajdhani font-bold text-yellow-500 text-lg mb-2">Research Compliance Notice</h4>
                  <p className="text-sm text-yellow-500/80 font-dm-sans leading-relaxed">
                    All compounds supplied to {location.city}, {location.state} are exclusively for in vitro laboratory research and academic use by licensed professionals. They are strictly not for human consumption, diagnostic, or therapeutic use. Buyers are responsible for ensuring compliance with all applicable local, state, and federal regulations governing the procurement and handling of research compounds. Products are B2B only — not for resale to the general public.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar CTAs */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 space-y-6">

                {/* Primary CTA Card */}
                <div className="bg-[#0B0F15] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                    Request {location.city} Wholesale Pricing
                  </h3>
                  <p className="text-gray-400 font-dm-sans mb-6 text-sm leading-relaxed">
                    Connect with our B2B sales team serving the {location.state} region to request current wholesale pricing, COA documentation, and tier qualification.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi, I am a licensed professional in ${location.city}, ${location.state} looking for wholesale peptide pricing.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 rounded-xl transition-all font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(79,195,208,0.3)] hover:shadow-[0_0_25px_rgba(79,195,208,0.5)]"
                    >
                      <Zap className="w-5 h-5" /> WhatsApp Sales
                    </a>

                    <div className="relative flex items-center py-1">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-gray-500 font-dm-mono text-xs uppercase">or</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <a
                      href={`mailto:sales@99puritypeptides.com?subject=${encodeURIComponent(`Wholesale Inquiry - ${location.city}, ${location.state}`)}`}
                      className="w-full bg-[#0e131b] border border-white/20 hover:border-brand-accent hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all font-rajdhani text-lg uppercase tracking-wider flex items-center justify-center gap-3"
                    >
                      <Mail className="w-5 h-5" /> Email Inquiry
                    </a>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 text-center">
                    <Link href="/products" className="text-brand-accent hover:text-white font-dm-mono text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      View Full Catalog <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-[#0e131b] border border-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-4">Wholesale Account Details</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'MOQ', value: '10 units per product' },
                      { label: 'Purity', value: '≥99% (COA verified)' },
                      { label: 'Fulfillment', value: '2–4 business days' },
                      { label: 'Payment', value: 'Bitcoin · Zelle · Bank Transfer' },
                      { label: 'Shipping', value: 'U.S. domestic only' },
                      { label: 'Buyers', value: 'Licensed professionals only' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <span className="text-gray-500 font-dm-mono text-xs uppercase tracking-wider">{item.label}</span>
                        <span className="text-white font-dm-sans text-sm text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply CTA */}
                <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-6 text-center">
                  <p className="text-white/60 font-dm-sans text-sm mb-4">New to wholesale? Apply for a verified account.</p>
                  <Link
                    href="/wholesale-application"
                    className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/20 font-bold py-3 px-6 rounded-xl transition-all font-rajdhani uppercase tracking-wider text-sm"
                  >
                    Apply for Wholesale Account <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-20 bg-[#0B0F15] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-rajdhani font-bold text-white mb-8">Other Regions We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locationsData
              .filter((loc) => loc.slug !== params.slug)
              .slice(0, 4)
              .map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group block">
                  <div className="bg-[#0e131b] border border-white/5 rounded-xl p-5 hover:border-brand-accent/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      <span className="text-brand-accent font-dm-mono text-xs uppercase">{loc.state}</span>
                    </div>
                    <div className="text-white font-rajdhani font-bold text-lg group-hover:text-brand-accent transition-colors">{loc.city}</div>
                    <div className="text-gray-500 font-dm-sans text-xs mt-1 flex items-center gap-1">
                      View Hub <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
