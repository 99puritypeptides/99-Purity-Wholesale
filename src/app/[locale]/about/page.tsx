"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Mail, ShieldCheck, Search, Users, Activity, Layers, BarChart3, FlaskConical, Globe, Award, CheckCircle2, ArrowRight, Microscope, Star, Truck } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");

  const handleWhatsAppClick = () => {
    const phone = "18437439007";
    const message = "Hi, I have a question about 99 Purity Wholesale wholesale sourcing.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] pb-24">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4FC3D0]/10 via-[#0A0F1C] to-[#0A0F1C]"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-block bg-[#4FC3D0]/10 text-[#4FC3D0] px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-[#4FC3D0]/20">
            America's Trusted Wholesale Peptide Supplier
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-rajdhani tracking-tight leading-tight">
            {t("Hero.title")}
          </h1>
          <p className="text-xl text-[#4FC3D0] font-medium mb-8 max-w-3xl mx-auto">
            {t("Hero.subtitle")}
          </p>
          <p className="text-lg text-slate-400 font-dm-sans max-w-3xl mx-auto leading-relaxed">
            Since our founding, 99 Purity Wholesale has operated on a single principle: licensed professionals and qualified researchers in the United States deserve a domestic peptide supplier they can trust — one that backs every claim with data, every batch with a COA, and every client relationship with genuine partnership.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-rajdhani leading-tight">
                Built in America.<br />Built for Professionals.
              </h2>
              <div className="space-y-6 text-slate-300 font-dm-sans leading-relaxed">
                <p>{t("Story.p1")}</p>
                <p>{t("Story.p2")}</p>
                <p>{t("Story.p3")}</p>
                <p>
                  Our catalog spans over 50 research compounds across 7 categories — from GLP-1 metabolic peptides and growth hormone secretagogues to healing compounds, nootropics, anti-aging peptides, and cosmetic research compounds. Every product is manufactured in our U.S. facility, independently tested, and shipped with a batch-matched Certificate of Analysis.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: FlaskConical, title: 'U.S. Laboratory', desc: 'Synthesized in America — not imported, not repackaged. True domestic manufacturing.' },
                { icon: Award, title: 'Third-Party Tested', desc: 'Every batch independently verified by accredited U.S. laboratories via HPLC & MS.' },
                { icon: ShieldCheck, title: '≥99% Purity', desc: 'Our minimum standard. Not a range, not an estimate — a guaranteed threshold.' },
                { icon: Users, title: 'B2B Partnership', desc: 'We serve clinics, pharmacies, distributors, and researchers — not consumers.' },
                { icon: Globe, title: '50-State Reach', desc: 'Fast domestic fulfillment with no international customs risk or cold-chain failure.' },
                { icon: Star, title: '200+ Clients', desc: 'Growing network of compounding pharmacies, wellness clinics, and distributors.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 hover:border-[#4FC3D0]/30 transition-all">
                  <item.icon className="w-7 h-7 text-[#4FC3D0] mb-4" />
                  <h3 className="text-white font-rajdhani font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 font-dm-sans text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#060B17] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Microscope className="w-12 h-12 text-[#4FC3D0] mx-auto mb-8 opacity-60" />
          <blockquote className="text-3xl md:text-4xl font-rajdhani font-bold text-white leading-tight mb-8">
            "Every vial we ship carries the weight of our reputation — and the trust of the licensed professionals who depend on us for research-grade quality, batch after batch."
          </blockquote>
          <p className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-widest">— The 99 Purity Wholesale Team</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">What We Stand For</span>
            <h2 className="text-4xl font-bold text-center text-white font-rajdhani">{t("Values.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.purity.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.purity.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">We do not ship any product that fails to meet our ≥99% purity threshold. If a batch fails, it does not ship — period. This is not a marketing claim; it is our operating standard, enforced by third-party verification.</p>
            </div>
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.transparency.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.transparency.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">Our COA library is open to every client. Request a batch-specific COA before you order. Review our testing methodology. Ask questions. Transparency is not optional — it is the foundation of every B2B relationship we build.</p>
            </div>
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.partnership.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.partnership.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">From dropshipping infrastructure to private label packaging to business launch consulting — we invest in our clients' growth. When your clinic, pharmacy, or distribution operation grows, we grow with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#060B17] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Process</span>
            <h2 className="text-4xl font-bold text-white font-rajdhani">From Synthesis to Your Facility</h2>
            <p className="text-slate-400 font-dm-sans mt-4 max-w-2xl mx-auto">Every order follows a rigorous quality pipeline before it ships — ensuring what arrives at your facility matches exactly what is documented in our COAs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#4FC3D0]/30 to-transparent"></div>
            {[
              { step: '01', icon: FlaskConical, title: 'U.S. Synthesis', desc: 'Solid-phase peptide synthesis (SPPS) in our domestic facility under strict quality controls.' },
              { step: '02', icon: Microscope, title: 'Third-Party Testing', desc: 'Independent U.S. labs run HPLC and Mass Spectrometry to confirm ≥99% purity on each batch.' },
              { step: '03', icon: Award, title: 'Batch COA Issued', desc: 'A unique Certificate of Analysis is generated and matched to each production lot.' },
              { step: '04', icon: Truck, title: 'Domestic Fulfillment', desc: 'Priority domestic shipping to your facility — no international delays, no customs risk.' },
            ].map((step) => (
              <div key={step.step} className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 text-center relative z-10 hover:border-[#4FC3D0]/30 transition-all">
                <div className="text-[#4FC3D0] font-dm-mono text-xs uppercase tracking-widest mb-4">Step {step.step}</div>
                <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-[#4FC3D0]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-rajdhani">{step.title}</h3>
                <p className="text-slate-400 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Clients</span>
              <h2 className="text-4xl font-bold text-white font-rajdhani mb-8">Who Sources From 99 Purity Wholesale</h2>
              <p className="text-slate-400 font-dm-sans leading-relaxed mb-8">
                We are a B2B-only wholesale supplier. Our clients are licensed professionals and qualified research institutions across the United States who require consistent, verified, research-grade peptide supply at competitive wholesale pricing.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Compounding Pharmacies', desc: 'PCAB-accredited and licensed compounding facilities sourcing bulk peptide APIs.' },
                  { label: 'Wellness Clinics & Medical Spas', desc: 'Licensed clinics incorporating peptide research programs into their services.' },
                  { label: 'Licensed Distributors', desc: 'Regional and national B2B distributors supplying the professional wellness market.' },
                  { label: 'Research Facilities', desc: 'Academic and private research institutions conducting in vitro peptide studies.' },
                  { label: 'Anti-Aging & Longevity Practices', desc: 'Specialized practices focused on longevity and cellular research applications.' },
                ].map((client, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#121B2E] rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#4FC3D0] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold font-rajdhani">{client.label}</div>
                      <div className="text-slate-400 font-dm-sans text-sm">{client.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#121B2E] to-[#0A0F1C] border border-[#4FC3D0]/10 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white font-rajdhani mb-8">Why Professionals Choose Us</h3>
                <div className="space-y-6">
                  {[
                    'Domestic U.S. manufacturing — no import risk',
                    'Batch-matched COAs downloadable before and after purchase',
                    'HPLC and Mass Spectrometry purity verification on every lot',
                    '50+ compounds across 7 research categories',
                    'Tiered wholesale pricing (Start → Tier 3) with volume incentives',
                    'No cold chain required — stable lyophilized formulations',
                    'WhatsApp + Email B2B support with fast response times',
                    'Private label and dropshipping programs available',
                    'Bitcoin, Zelle, and bank transfer accepted',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#4FC3D0] flex-shrink-0"></div>
                      <span className="text-slate-300 font-dm-sans text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-[#060B17] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-rajdhani">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: '50+', label: 'Products in Catalog' },
              { num: '4', label: 'Wholesale Tiers' },
              { num: '≥99%', label: 'Purity Standard' },
              { num: '200+', label: 'B2B Clients' },
              { num: '50', label: 'States Served' },
              { num: '7', label: 'Research Categories' },
            ].map((s) => (
              <div key={s.num} className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center hover:border-[#4FC3D0]/20 transition-all">
                <div className="text-3xl font-bold text-white mb-2 font-rajdhani text-[#4FC3D0]">{s.num}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-dm-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#121B2E] border border-[#4FC3D0]/10 rounded-3xl p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/3">
                <ShieldCheck className="w-12 h-12 text-[#4FC3D0] mb-4" />
                <h2 className="text-3xl font-bold text-white font-rajdhani mb-4">Our Compliance Commitment</h2>
                <p className="text-slate-400 font-dm-sans text-sm leading-relaxed">We operate within a strict framework of professional and regulatory compliance — ensuring every transaction protects both the buyer and the integrity of the research industry.</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Research Use Only', desc: 'All products are sold exclusively for in vitro laboratory research. Not for human consumption, diagnostic, or therapeutic use.' },
                  { title: 'Licensed Buyers Only', desc: 'Purchases are restricted to licensed professionals, researchers, and qualified institutions in accordance with applicable law.' },
                  { title: 'Full Documentation', desc: 'Every shipment includes batch-matched COA documentation suitable for professional procurement records.' },
                  { title: 'Buyer Responsibility', desc: 'Buyers attest to compliance with all local, state, and federal regulations governing research compound handling.' },
                  { title: 'No Consumer Sales', desc: 'We do not sell to the general public. This is a B2B-only wholesale operation with minimum order requirements.' },
                  { title: 'U.S. Domestic Only', desc: 'We ship exclusively within the United States, reducing international regulatory complexity and transit risk.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#0A0F1C] rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#4FC3D0] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold font-rajdhani text-sm">{item.title}</div>
                      <div className="text-slate-500 font-dm-sans text-xs leading-relaxed mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-[#121B2E] to-[#0A0F1C] border border-[#4FC3D0]/20 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(79,195,208,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4FC3D0] to-transparent opacity-50"></div>
            <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani relative z-10">{t("Cta.title")}</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">{t("Cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button onClick={handleWhatsAppClick} className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <MessageCircle className="w-5 h-5" />
                <span>{t("Cta.whatsapp")}</span>
              </button>
              <a href="mailto:wholesale@99puritypeptides.com" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg border border-white/10">
                <Mail className="w-5 h-5" />
                <span>{t("Cta.email")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
