import { MapPin, ArrowRight, ShieldCheck, Truck, FlaskConical } from 'lucide-react';
import { Link } from '@/i18n/routing';
import locationsData from '@/data/locations.json';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('locationsTitle'),
    description: t('locationsDesc'),
  };
}

export default async function LocationsIndexPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LocationsIndex' });

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            Nationwide Wholesale Supply
          </div>
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tight leading-tight">
            Wholesale Peptide Supplier<br />
            <span className="text-brand-accent">Serving All 50 U.S. States</span>
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl mx-auto">
            99 Purity Wholesale ships U.S.-manufactured, ≥99% purity research-grade peptides to licensed professionals across every state. Explore our dedicated regional hubs for local market information, compliance notes, and direct B2B contact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/30 font-dm-mono text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-accent" /> ≥99% Purity Guaranteed</span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-brand-accent" /> 2–4 Day Domestic Delivery</span>
            <span className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-brand-accent" /> COA on Every Order</span>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">Our Primary Market Hubs</h2>
            <p className="text-gray-400 font-dm-sans max-w-2xl mx-auto">We maintain dedicated wholesale relationships and fast fulfillment for licensed professionals across these high-priority markets. Click any region for local market details, popular compounds, and direct contact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationsData.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group block h-full">
                <div className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MapPin className="w-24 h-24 text-brand-accent" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-accent" />
                        <span className="text-brand-accent font-dm-mono text-sm uppercase tracking-wider">{loc.state}</span>
                      </div>
                      <span className="text-white/20 font-dm-mono text-xs uppercase tracking-wider">{loc.region}</span>
                    </div>

                    <h2 className="text-3xl font-rajdhani font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                      {loc.city}
                    </h2>

                    <p className="text-gray-400 font-dm-sans mb-6 text-sm leading-relaxed line-clamp-3">
                      {loc.intro}
                    </p>

                    {/* Popular Products Preview */}
                    <div className="mb-6">
                      <div className="text-white/30 font-dm-mono text-[10px] uppercase tracking-widest mb-2">Top Local Compounds</div>
                      <div className="flex flex-wrap gap-2">
                        {loc.popularProducts.slice(0, 3).map((p) => (
                          <span key={p} className="bg-white/5 text-white/60 px-2 py-0.5 rounded text-xs font-dm-mono">{p}</span>
                        ))}
                        {loc.popularProducts.length > 3 && (
                          <span className="text-brand-accent/60 text-xs font-dm-mono">+{loc.popularProducts.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex items-center text-white font-bold font-rajdhani uppercase tracking-wider text-sm group-hover:text-brand-accent transition-colors">
                      View Regional Hub <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform text-brand-accent" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All 50 States Banner */}
      <section className="py-20 bg-[#0B0F15] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">
            Don't See Your State? We Ship Everywhere.
          </h2>
          <p className="text-gray-400 font-dm-sans text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            While we maintain dedicated regional hub pages for our highest-volume markets, 99 Purity Wholesale fulfills wholesale peptide orders to licensed professionals in all 50 U.S. states. If your state isn't listed above, contact us directly — same fast domestic fulfillment, same ≥99% purity guarantee, same batch COA documentation on every order.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/18437439007?text=Hi%2C%20I%27m%20interested%20in%20wholesale%20peptide%20pricing%20for%20my%20state."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold py-4 px-8 rounded-xl transition-all font-rajdhani text-lg uppercase tracking-wider"
            >
              Request Pricing for Your State
            </a>
            <Link
              href="/wholesale-application"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/10 font-rajdhani text-lg uppercase tracking-wider"
            >
              Apply for Wholesale Account <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">
                Why Licensed Professionals Across the U.S. Source from 99 Purity Wholesale
              </h2>
              <div className="space-y-5 text-gray-400 font-dm-sans leading-relaxed">
                <p>
                  For compounding pharmacies, wellness clinics, medical spas, and licensed distributors operating across the United States, having a reliable domestic wholesale peptide supplier is a strategic necessity — not just a convenience. International sourcing introduces customs risk, documentation gaps, supply continuity uncertainty, and purity verification challenges that domestic procurement eliminates entirely.
                </p>
                <p>
                  99 Purity Wholesale manufactures all research compounds in the United States. Every batch is synthesized domestically, tested by independent U.S. accredited laboratories, and fulfilled via priority domestic carrier. Your order ships without international transit exposure and arrives with a batch-matched Certificate of Analysis confirming ≥99% purity.
                </p>
                <p>
                  Our tiered wholesale pricing program — from the Start tier for emerging operations to Tier 3 for high-volume compounding and distribution accounts — ensures competitive margins at every scale. Licensed professionals in Texas, Florida, California, New York, and every other state benefit from the same purity guarantee, documentation standards, and fulfillment reliability.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6">What Every U.S. Wholesale Order Includes</h3>
              <div className="space-y-4">
                {[
                  { title: 'Batch-Matched COA Documentation', desc: 'Every shipment includes a Certificate of Analysis tied to the exact production batch you receive — from an independent, named U.S. laboratory.' },
                  { title: '≥99% Purity on Every Compound', desc: 'Our minimum standard, verified by HPLC and Mass Spectrometry. Not a range — a guaranteed threshold on every product in our catalog.' },
                  { title: 'Priority Domestic Shipping', desc: 'Orders ship via priority domestic carrier within 1–2 business days of payment confirmation. 2–4 day delivery to most U.S. states.' },
                  { title: 'B2B Support Access', desc: 'Direct WhatsApp and email access to our sales team. COA requests, pricing inquiries, and order tracking handled within 2 business hours.' },
                  { title: 'No International Customs Risk', desc: 'All fulfillment is U.S. domestic. No border delays, no package seizure risk, no international documentation complexity.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#0e131b] rounded-xl border border-white/5 hover:border-brand-accent/20 transition-all">
                    <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-rajdhani font-bold text-sm">{item.title}</div>
                      <div className="text-gray-500 font-dm-sans text-xs leading-relaxed mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
