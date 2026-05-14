import { getTranslations } from 'next-intl/server';
import { CheckCircle2, ShieldCheck, FlaskConical, Users, Truck, Award, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: 'Apply for a Wholesale Account | 99 Purity Peptides — Bulk Research Peptides USA',
    description: 'Apply for a verified wholesale peptide account with 99 Purity Peptides. Access bulk pricing on 50+ research-grade peptides. U.S.-manufactured, COA-verified. For licensed professionals only.',
    robots: 'noindex, follow', // Keep off Google Shopping / product policy triggers
  };
}

export default async function WholesaleApplicationPage({ params }: { params: { locale: string } }) {
  const requirements = [
    'Licensed clinic, pharmacy, distributor, or research institution',
    'U.S.-based business with valid business registration',
    'Minimum initial order: 10 units (1 kit) per product',
    'Agreement to research-use-only terms and conditions',
    'Not for resale to end consumers or the general public',
  ];

  const benefits = [
    { icon: FlaskConical, title: '50+ Research Compounds', desc: 'Full catalog access across GLP-1, growth hormone, healing, nootropic, anti-aging, cosmetic, and ancillary categories.' },
    { icon: ShieldCheck, title: '≥99% Purity Guaranteed', desc: 'Every product independently verified by accredited U.S. laboratories with batch-matched COA documentation.' },
    { icon: Award, title: 'Tiered Wholesale Pricing', desc: 'Volume-based pricing with 4 tiers: Start (1–9 kits) through Tier 3 (40+ kits) with maximum margin at enterprise scale.' },
    { icon: Truck, title: 'Fast U.S. Domestic Shipping', desc: 'Priority fulfillment from our U.S. facility — no international customs delays, no cold-chain risk.' },
    { icon: Users, title: 'Dedicated B2B Support', desc: 'Direct WhatsApp and email access to our B2B team. Typical response within 2 business hours.' },
    { icon: ArrowRight, title: 'Dropship & Private Label', desc: 'Qualifying volume accounts can access our dropshipping program and private label packaging services.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      
      {/* Research Use Banner */}
      <div className="bg-amber-900/30 border-b border-amber-600/20 py-3 px-4 text-center">
        <p className="text-amber-400 font-dm-mono text-xs uppercase tracking-widest">
          ⚠️ All products are for laboratory research use only. Not for human consumption. For licensed professionals only.
        </p>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-bg to-brand-bg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-brand-accent/20">
            B2B Wholesale Account
          </div>
          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-6 text-white tracking-tight leading-tight">
            Apply for Wholesale<br />Peptide Pricing
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans leading-relaxed max-w-3xl mx-auto">
            Join 200+ verified B2B accounts — compounding pharmacies, wellness clinics, licensed distributors, and research facilities — sourcing bulk research-grade peptides from America's most trusted domestic wholesale supplier.
          </p>
        </div>
      </section>

      {/* Account Benefits */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">What You Get as a Verified Wholesale Account</h2>
            <p className="text-gray-400 font-dm-sans">Verified B2B accounts receive full catalog access, tiered pricing, and dedicated support from our U.S.-based team.</p>
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
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">Eligibility Requirements</h2>
              <p className="text-gray-400 font-dm-sans leading-relaxed mb-8">
                99 Purity Peptides is a B2B-only wholesale supplier. To qualify for a wholesale account, buyers must meet the following criteria and agree to our research-use terms.
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
              <h2 className="text-4xl font-rajdhani font-bold text-white mb-6">Pricing Tiers</h2>
              <div className="space-y-4">
                {[
                  { tier: 'Start', kits: '1–9 Kits', desc: 'Entry-level access. Ideal for new clinics and distributors evaluating our catalog.' },
                  { tier: 'Tier 1', kits: '10–19 Kits', desc: 'Growth-level pricing. Consistent reorder with improved per-unit margins.' },
                  { tier: 'Tier 2', kits: '20–39 Kits', desc: 'Established volume. Significant discount with priority fulfillment.' },
                  { tier: 'Tier 3', kits: '40+ Kits', desc: 'Enterprise pricing. Maximum margins for high-volume operations.' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-[#0e131b] rounded-xl border border-white/5 hover:border-brand-accent/20 transition-all">
                    <div className="min-w-[80px]">
                      <div className="text-brand-accent font-dm-mono text-xs uppercase tracking-widest mb-1">{t.tier}</div>
                      <div className="text-white font-rajdhani font-bold">{t.kits}</div>
                    </div>
                    <p className="text-gray-400 font-dm-sans text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 font-dm-sans text-xs mt-4">Current pricing provided upon verified account approval. Prices are not publicly listed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rajdhani font-bold text-white mb-4">Submit Your Wholesale Application</h2>
            <p className="text-gray-400 font-dm-sans">Our B2B team reviews all applications within 1 business day. Fields marked with * are required.</p>
          </div>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="bg-[#0e131b] border border-white/5 rounded-2xl p-10 space-y-6"
          >
            {/* Compliance attestation at top */}
            <div className="bg-amber-900/20 border border-amber-600/20 rounded-xl p-6 mb-8">
              <h3 className="text-amber-400 font-rajdhani font-bold text-lg mb-3">Research Use Attestation</h3>
              <p className="text-amber-400/70 font-dm-sans text-sm leading-relaxed mb-4">
                By submitting this application, I confirm that: (1) I am a licensed professional or authorized representative of a qualified research institution; (2) Products will be used for research and laboratory purposes only; (3) Products will not be used for human consumption, clinical treatment, or resale to end consumers; (4) I accept full responsibility for compliance with all applicable laws.
              </p>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="attestation" required className="mt-1 w-5 h-5 accent-brand-accent" />
                <span className="text-amber-400 font-dm-sans text-sm font-bold">I confirm the above attestation and agree to research-use-only terms. *</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Business Name *</label>
                <input type="text" name="businessName" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder="Your Business Name" />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Business Type *</label>
                <select name="businessType" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans">
                  <option value="">Select Business Type</option>
                  <option>Compounding Pharmacy</option>
                  <option>Wellness Clinic</option>
                  <option>Medical Spa</option>
                  <option>Licensed Distributor</option>
                  <option>Research Institution</option>
                  <option>Functional Medicine Practice</option>
                  <option>Anti-Aging / Longevity Practice</option>
                  <option>Other Licensed Professional</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Full Name *</label>
                <input type="text" name="fullName" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder="Your Full Name" />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Business Email *</label>
                <input type="email" name="email" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder="email@yourbusiness.com" />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">State *</label>
                <input type="text" name="state" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans" placeholder="e.g. Texas" />
              </div>
              <div>
                <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Estimated Monthly Volume *</label>
                <select name="monthlyVolume" required className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans">
                  <option value="">Select Volume Range</option>
                  <option>1–9 kits/month (Start Tier)</option>
                  <option>10–19 kits/month (Tier 1)</option>
                  <option>20–39 kits/month (Tier 2)</option>
                  <option>40+ kits/month (Tier 3)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Primary Products of Interest *</label>
              <textarea name="products" required rows={3} className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans resize-none" placeholder="e.g. Semaglutide, BPC-157, Ipamorelin, TB-500..." />
            </div>

            <div>
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Preferred Contact Method</label>
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
              <label className="block text-gray-400 font-dm-mono text-xs uppercase tracking-widest mb-2">Additional Notes</label>
              <textarea name="notes" rows={3} className="w-full bg-[#161d27] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all font-dm-sans resize-none" placeholder="Any specific requirements, questions, or context about your program..." />
            </div>

            <button type="submit" className="w-full bg-brand-accent text-brand-bg font-bold py-4 rounded-xl font-rajdhani text-lg uppercase tracking-wider hover:bg-[#3EABC0] transition-colors">
              Submit Wholesale Application
            </button>

            <p className="text-gray-600 font-dm-sans text-xs text-center leading-relaxed">
              Application information is kept strictly confidential. Our B2B team will respond within 1 business day with pricing details and account setup information. By submitting, you confirm all products will be used for research and laboratory purposes only by licensed professionals.
            </p>
          </form>
        </div>
      </section>

      {/* Fast-Track CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-400 font-dm-sans mb-6">Need faster turnaround? Skip the form and message us directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20a%20wholesale%20peptide%20account." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors font-rajdhani text-lg uppercase tracking-wider">
              Apply via WhatsApp
            </a>
            <a href="mailto:wholesale@99puritypeptides.com" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-colors border border-white/10 font-rajdhani text-lg uppercase tracking-wider">
              Email Application
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
