import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import {
  Package, Rocket, MonitorSmartphone, TrendingUp, Tag, Settings,
  CheckCircle2, XCircle, ArrowRight, PhoneCall, ChevronRight,
  ShieldCheck, Award, Zap, BarChart3, Globe, Users, Map, Handshake,
  ClipboardCheck, Truck, FlaskConical, Code, Search
} from 'lucide-react';
import GlobalCTA from '@/components/layout/GlobalCTA';
import FaqSection from '@/components/shared/FaqSection';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import servicesRegistry from '@/data/services-content/index';

const ICON_MAP: Record<string, React.ElementType> = {
  Package, Rocket, MonitorSmartphone, TrendingUp, Tag, Settings,
  ShieldCheck, Award, Zap, BarChart: BarChart3, Globe, Users,
  Map, Handshake, ClipboardCheck, Truck, FlaskConical, Code, Search,
  BarChart3,
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  dropshipping: Package,
  'launch-support': Rocket,
  'website-development': MonitorSmartphone,
  'sales-distribution': TrendingUp,
  'private-label': Tag,
  'fulfillment-consulting': Settings,
};

export async function generateStaticParams() {
  return Object.keys(servicesRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const service = servicesRegistry[params.slug];
  if (!service) return {};
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const url = `${baseUrl}/${params.locale === 'en' ? '' : params.locale + '/'}services/${params.slug}`;
  const ogUrlImage = `${baseUrl}/api/og?title=${encodeURIComponent(service.meta.title)}&desc=${encodeURIComponent(service.meta.description)}&category=Services`;

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url,
      siteName: '99 Purity Wholesale',
      images: [{ url: ogUrlImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta.title,
      description: service.meta.description,
      images: [ogUrlImage],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const service = servicesRegistry[params.slug];
  if (!service) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const localePrefix = params.locale === 'en' ? '' : `${params.locale}/`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.hero.h1,
    description: service.meta.description,
    provider: {
      '@type': 'Organization',
      name: '99 Purity Wholesale',
      url: 'https://99puritywholesale.com',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: service.hero.eyebrow,
    url: `${baseUrl}/${localePrefix}services/${service.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const HeroIcon = SERVICE_ICONS[params.slug] || Package;
  const faqItems = service.faqs.map((f) => ({ q: f.q, a: f.a }));

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Services', item: `${baseUrl}/${localePrefix}services` },
        { name: service.hero.h1, item: `${baseUrl}/${localePrefix}services/${service.slug}` },
      ]} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-44 pb-20 md:pt-56 md:pb-32 bg-[#05080C] text-white">
        {/* Abstract Dark Gradients / Noise */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-[10px] font-dm-mono font-bold uppercase tracking-widest text-white/30 mb-12">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">{service.hero.eyebrow}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-dm-mono font-bold uppercase tracking-widest text-white/70 mb-8 backdrop-blur-sm">
                <HeroIcon className="w-4 h-4 text-white" />
                {service.hero.eyebrow}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-absans font-bold text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-sm">
                {service.hero.h1}
              </h1>
              
              <p className="text-base md:text-xl font-archia text-white/60 leading-relaxed mb-12 max-w-2xl">
                {service.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/18433307365?text=${encodeURIComponent(service.hero.ctaMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-none active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  {service.hero.ctaText}
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/10 text-white/70 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
                >
                  All Services
                </Link>
              </div>
            </div>
            
            {/* Trust Stats Glassmorphism Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent blur-3xl -z-10" />
              {[
                { val: '≥99%', label: 'Purity Standard', icon: Award },
                { val: 'COA', label: 'On Every Order', icon: ClipboardCheck },
                { val: 'U.S.', label: 'Manufactured', icon: Globe },
                { val: 'B2B', label: 'Exclusive Program', icon: ShieldCheck },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col gap-3 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 group cursor-default">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="font-absans text-3xl md:text-4xl font-bold text-white tracking-tighter drop-shadow-sm">{stat.val}</div>
                  <div className="text-[9px] md:text-[10px] font-dm-mono font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="w-10 h-px bg-black/10 mb-6" />
                <h2 className="font-absans text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter leading-tight">
                  {service.intro.heading}
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {service.intro.body.map((paragraph, i) => (
                <p key={i} className="font-archia text-base md:text-lg text-black/65 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-[#F4F6F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <div className="w-10 h-px bg-black/10 mb-6" />
            <h2 className="font-absans text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">
              Key Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => {
              const BenIcon = ICON_MAP[benefit.icon] || ShieldCheck;
              return (
                <div key={i} className="group bg-white border border-black/5 rounded-2xl p-8 hover:border-black/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BenIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-absans text-xl font-bold text-black uppercase tracking-tight mb-3">{benefit.title}</h3>
                  <p className="font-archia text-sm text-black/55 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <div className="w-10 h-px bg-black/10 mb-6" />
            <h2 className="font-absans text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.howItWorks.map((step, i) => (
              <div key={i} className="group flex gap-6 p-8 bg-[#F8F8F6] border border-black/5 rounded-2xl hover:bg-white hover:border-black/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-500">
                <div className="shrink-0 font-dm-mono text-4xl font-bold text-black/10 group-hover:text-black/20 transition-colors leading-none pt-1">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-absans text-lg font-bold text-black uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="font-archia text-sm text-black/55 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-[#F4F6F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <div className="w-10 h-px bg-black/10 mb-6" />
            <h2 className="font-absans text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">
              {service.comparisonTable.heading}
            </h2>
          </div>
          <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-black/[0.03] border-b border-black/5 px-6 py-3">
              <div className="col-span-5 text-[9px] font-dm-mono font-bold uppercase tracking-widest text-black/40">Profile / Use Case</div>
              <div className="col-span-2 text-[9px] font-dm-mono font-bold uppercase tracking-widest text-black/40 text-center">Suitable</div>
              <div className="col-span-5 text-[9px] font-dm-mono font-bold uppercase tracking-widest text-black/40">Why</div>
            </div>
            {service.comparisonTable.rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 gap-4 border-b border-black/5 last:border-b-0 ${i % 2 === 0 ? '' : 'bg-black/[0.01]'}`}>
                <div className="col-span-5 font-archia text-sm font-semibold text-black">{row.businessType}</div>
                <div className="col-span-2 flex items-center justify-center">
                  {row.suitable
                    ? <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    : <XCircle className="w-5 h-5 text-red-400" />}
                </div>
                <div className="col-span-5 font-archia text-sm text-black/50">{row.reason}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TIERS (conditional) ───────────────────────── */}
      {service.pricingSection && (
        <section className="py-24 md:py-32 border-b border-black/5 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-4">
              <div className="w-10 h-px bg-black/10 mb-6" />
              <h2 className="font-absans text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter mb-4">
                {service.pricingSection.heading}
              </h2>
              <p className="font-archia text-base text-black/50 max-w-2xl">{service.pricingSection.subheading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {service.pricingSection.tiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-8 border transition-all duration-300 ${tier.highlight ? 'bg-black text-white border-black/20' : 'bg-[#F8F8F6] border-black/5 hover:border-black/15 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]'}`}>
                  <div className={`text-[9px] font-dm-mono font-bold uppercase tracking-widest mb-3 ${tier.highlight ? 'text-white/40' : 'text-black/30'}`}>Volume</div>
                  <div className={`font-absans text-2xl font-bold uppercase tracking-tighter mb-1 ${tier.highlight ? 'text-white' : 'text-black'}`}>{tier.name}</div>
                  <div className={`font-dm-mono text-xs font-bold mb-5 ${tier.highlight ? 'text-white/50' : 'text-black/40'}`}>{tier.volume}</div>
                  <p className={`font-archia text-sm leading-relaxed ${tier.highlight ? 'text-white/60' : 'text-black/50'}`}>{tier.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-dm-mono font-bold uppercase tracking-widest text-black/30">{service.pricingSection.footer}</p>
          </div>
        </section>
      )}

      {/* ── TECHNICAL DEEP DIVE ───────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-[#0B0E14] text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <div className="w-10 h-px bg-white/10 mb-6" />
            <h2 className="font-absans text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
              {service.technicalDeepDive.heading}
            </h2>
            <p className="font-archia text-base text-white/40 max-w-2xl">{service.technicalDeepDive.subheading}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              {service.technicalDeepDive.body.map((para, i) => (
                <p key={i} className="font-archia text-base text-white/60 leading-relaxed">{para}</p>
              ))}
            </div>
            {service.technicalDeepDive.statsTable && (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-3 border-b border-white/10 bg-white/[0.02]">
                  <span className="text-[9px] font-dm-mono font-bold uppercase tracking-widest text-white/30">Operational Specifications</span>
                </div>
                {service.technicalDeepDive.statsTable.map((row, i) => (
                  <div key={i} className={`flex justify-between gap-4 px-6 py-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <span className="font-archia text-sm text-white/40 shrink-0">{row.label}</span>
                    <span className="font-dm-mono text-xs font-bold text-white text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-[#F8F8F6]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <div className="w-10 h-px bg-black/10 mb-6" />
            <h2 className="font-absans text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter">
              {service.trustSection.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.trustSection.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white border border-black/5 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="font-archia text-sm text-black/65 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────── */}
      <FaqSection
        id={`${service.slug}-faq`}
        eyebrow="(FAQ)"
        title={`${service.hero.h1} — Frequently Asked Questions`}
        subtitle="Comprehensive answers to the most common questions about this service program."
        items={faqItems}
        theme="light"
      />

      {/* ── RELATED SERVICES ─────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-black/5 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <div className="w-10 h-px bg-black/10 mb-6" />
            <h2 className="font-absans text-3xl font-bold text-black uppercase tracking-tighter">Related Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((rel) => {
              const RelIcon = SERVICE_ICONS[rel.slug] || Package;
              return (
                <Link key={rel.slug} href={`/services/${rel.slug}` as any} className="group flex flex-col gap-5 p-8 bg-[#F8F8F6] border border-black/5 rounded-2xl hover:bg-white hover:border-black/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <RelIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-absans text-lg font-bold text-black uppercase tracking-tight mb-2 leading-tight">{rel.title}</h3>
                    <p className="font-archia text-sm text-black/50 leading-relaxed">{rel.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-dm-mono font-bold uppercase tracking-widest text-black/30 group-hover:text-black transition-colors mt-auto">
                    <div className="w-5 h-px bg-black/20 group-hover:w-8 transition-all" />
                    Learn More
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <GlobalCTA
        badge="B2B Services"
        title="Ready to Get Started?"
        subtitle="Contact our B2B team via WhatsApp or email to discuss your requirements. We respond to all qualified inquiries within 1 business day."
        primaryCtaText={service.hero.ctaText}
        primaryCtaHref={`https://wa.me/18433307365?text=${encodeURIComponent(service.hero.ctaMsg)}`}
      />
    </main>
  );
}
