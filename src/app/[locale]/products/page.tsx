import { Link } from '@/i18n/routing';
import { AlertTriangle, ChevronRight, FlaskConical, Activity, Brain, ShieldAlert, Sparkles, Syringe, Box } from 'lucide-react';

export default function ProductsPage() {
  const categories = [
    {
      id: 'glp1-metabolic-peptides',
      name: 'GLP-1 / Metabolic',
      icon: Activity,
      description: 'Advanced metabolic research peptides including Semaglutide, Tirzepatide, and Retatrutide.',
    },
    {
      id: 'growth-hormone',
      name: 'Growth Hormone',
      icon: TrendingUpIcon, // Using generic ones
      description: 'GHRP and GHRH peptides for research applications.',
    },
    {
      id: 'healing-recovery-peptides',
      name: 'Healing & Recovery',
      icon: FlaskConical,
      description: 'Tissue repair and recovery compounds including BPC-157 and TB-500.',
    },
    {
      id: 'cognitive-nootropic',
      name: 'Cognitive / Nootropic',
      icon: Brain,
      description: 'Neurological research compounds and cognitive enhancers.',
    },
    {
      id: 'anti-aging-longevity',
      name: 'Anti-Aging & Longevity',
      icon: ShieldAlert, // Using placeholder icon
      description: 'Cellular senescence and longevity research peptides.',
    },
    {
      id: 'cosmetic-aesthetic',
      name: 'Cosmetic & Aesthetic',
      icon: Sparkles,
      description: 'Dermatological and cosmetic research compounds.',
    },
    {
      id: 'ancillaries',
      name: 'Ancillaries',
      icon: Syringe,
      description: 'Reconstitution solutions, supplies, and research ancillaries.',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Research Disclaimer Banner */}
      <div className="bg-yellow-900/20 border-b border-yellow-700/30 text-yellow-500 py-3 px-4 text-center text-sm font-dm-mono flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        ALL PRODUCTS ARE FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            Wholesale Catalog
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans max-w-3xl mx-auto">
            Premium quality research compounds for qualified institutions and independent researchers.
          </p>
        </div>

        {/* MOQ Info Block */}
        <div className="bg-[#0e131b] border border-brand-accent/20 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <Box className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-rajdhani font-bold text-white mb-1">Wholesale Requirements</h3>
              <p className="text-gray-400 font-dm-sans">Minimum Order Quantity (MOQ): 10 units per product.</p>
            </div>
          </div>
          <div>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold px-6 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider inline-flex">
              Contact for Pricing
            </a>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="group block h-full">
              <div className="bg-[#0B0F15] border border-white/5 rounded-xl p-8 hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col">
                <cat.icon className="w-10 h-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {cat.name}
                </h2>
                <p className="text-gray-400 font-dm-sans flex-grow mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center text-brand-accent font-bold font-rajdhani uppercase tracking-wider text-sm mt-auto">
                  View Category <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
