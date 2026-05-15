import { getTranslations } from 'next-intl/server';
import { CheckCircle2, ShieldCheck, FlaskConical, Users, Truck, Award, ArrowRight, Zap } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'WholesaleApplication' });
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    robots: 'noindex, follow',
  };
}

export default async function WholesaleApplicationPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'WholesaleApplication' });

  const requirements = t.raw('eligibility.items') as string[];

  const benefits = [
    { icon: FlaskConical, title: t('benefitsSection.items.catalog.title'), desc: t('benefitsSection.items.catalog.desc') },
    { icon: ShieldCheck, title: t('benefitsSection.items.purity.title'), desc: t('benefitsSection.items.purity.desc') },
    { icon: Award, title: t('benefitsSection.items.pricing.title'), desc: t('benefitsSection.items.pricing.desc') },
    { icon: Truck, title: t('benefitsSection.items.shipping.title'), desc: t('benefitsSection.items.shipping.desc') },
    { icon: Users, title: t('benefitsSection.items.support.title'), desc: t('benefitsSection.items.support.desc') },
    { icon: ArrowRight, title: t('benefitsSection.items.services.title'), desc: t('benefitsSection.items.services.desc') },
  ];

  const pricingTiers = [
    { tier: t('pricing.tiers.start.name'), kits: t('pricing.tiers.start.kits'), desc: t('pricing.tiers.start.desc') },
    { tier: t('pricing.tiers.tier1.name'), kits: t('pricing.tiers.tier1.kits'), desc: t('pricing.tiers.tier1.desc') },
    { tier: t('pricing.tiers.tier2.name'), kits: t('pricing.tiers.tier2.kits'), desc: t('pricing.tiers.tier2.desc') },
    { tier: t('pricing.tiers.tier3.name'), kits: t('pricing.tiers.tier3.kits'), desc: t('pricing.tiers.tier3.desc') },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      
      {/* Research Use Banner */}
      <div className="bg-amber-900/30 border-b border-amber-600/20 py-3 px-4 text-center">
        <p className="text-amber-400 font-dm-mono text-xs uppercase tracking-widest">
          {t('banner')}
        </p>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tight leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Account Benefits */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">{t('benefitsSection.title')}</h2>
            <p className="text-gray-400 font-dm-sans">{t('benefitsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#0e131b] border border-white/5 rounded-xl p-8 hover:border-brand-accent/30 transition-all">
                <b.icon className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-rajdhani font-bold text-white mb-3">{b.title}</h3>
                <p className="text-gray-400 font-dm-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-24 bg-[#0B0F15] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">{t('eligibility.title')}</h2>
              <p className="text-gray-400 font-dm-sans leading-relaxed mb-8">
                {t('eligibility.description')}
              </p>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#0e131b] rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 font-dm-sans text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">{t('pricing.title')}</h2>
              <div className="space-y-4">
                {pricingTiers.map((tier, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-[#0e131b] rounded-xl border border-white/5 hover:border-brand-accent/20 transition-all">
                    <div className="min-w-[80px]">
                      <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">{tier.tier}</div>
                      <div className="text-white font-rajdhani font-bold">{tier.kits}</div>
                    </div>
                    <p className="text-gray-400 font-dm-sans text-sm leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 font-dm-sans text-xs mt-4">{t('pricing.footer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">{t('form.title')}</h2>
            <p className="text-gray-400 font-dm-sans">{t('form.subtitle')}</p>
          </div>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="bg-[#0e131b] border border-white/5 rounded-2xl p-10 space-y-6"
          >
            {/* Compliance attestation at top */}
            <div className="bg-amber-900/20 border border-amber-600/20 rounded-xl p-6 mb-8">
              <h3 className="text-amber-400 font-rajdhani font-bold text-lg mb-3">{t('form.attestation.title')}</h3>
              <p className="text-amber-400/70 font-dm-sans text-sm leading-relaxed mb-4">
                {t('form.attestation.content')}
              </p>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="attestation" required className="mt-1 w-5 h-5 accent-brand-accent" />
                <span className="text-amber-400 font-dm-sans text-sm font-bold">{t('form.attestation.label')}</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.businessName')}</label>
                <input type="text" name="businessName" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder={t('form.fields.businessNamePlaceholder')} />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.businessType')}</label>
                <select name="businessType" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans">
                  <option value="">{t('form.fields.businessTypeDefault')}</option>
                  {(t.raw('form.fields.businessTypes') as string[]).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.fullName')}</label>
                <input type="text" name="fullName" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder={t('form.fields.fullNamePlaceholder')} />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.email')}</label>
                <input type="email" name="email" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder={t('form.fields.emailPlaceholder')} />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.state')}</label>
                <input type="text" name="state" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder={t('form.fields.statePlaceholder')} />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.volume')}</label>
                <select name="monthlyVolume" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans">
                  <option value="">{t('form.fields.volumeDefault')}</option>
                  {(t.raw('form.fields.volumeTiers') as string[]).map(tier => (
                    <option key={tier} value={tier}>{tier}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.products')}</label>
              <textarea name="products" required rows={3} className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans resize-none" placeholder={t('form.fields.productsPlaceholder')} />
            </div>

            <div>
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.contactMethod')}</label>
              <div className="flex gap-4">
                {['WhatsApp', 'Email'].map((m) => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value={m} className="accent-brand-accent" />
                    <span className="text-gray-300 font-dm-sans text-sm">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">{t('form.fields.notes')}</label>
              <textarea name="notes" rows={3} className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans resize-none" placeholder={t('form.fields.notesPlaceholder')} />
            </div>

            <button type="submit" className="w-full bg-brand-accent text-brand-bg font-bold py-4 rounded-xl font-rajdhani text-lg uppercase tracking-wider hover:bg-[#3EABC0] transition-colors">
              {t('form.fields.submit')}
            </button>

            <p className="text-gray-600 font-dm-sans text-xs text-center leading-relaxed">
              {t('form.footer')}
            </p>
          </form>
        </div>
      </section>

      {/* Fast-Track CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-400 font-dm-sans mb-6">{t('fastTrack.text')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/18437439007?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20a%20wholesale%20peptide%20account." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors font-rajdhani text-lg uppercase tracking-wider">
              {t('fastTrack.whatsapp')}
            </a>
            <a href="mailto:wholesale@99puritypeptides.com" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-colors border border-white/10 font-rajdhani text-lg uppercase tracking-wider">
              {t('fastTrack.email')}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
