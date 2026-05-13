"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Mail, ShieldCheck, Search, Users, Activity, Layers, BarChart3 } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");

  const handleWhatsAppClick = () => {
    const phone = "18005550199"; // Placeholder
    const message = "Hi, I have a question about 99 Purity Peptides.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero & Brand Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rajdhani tracking-tight">
            {t("Hero.title")}
          </h1>
          <p className="text-xl text-[#4FC3D0] font-medium mb-12">
            {t("Hero.subtitle")}
          </p>
          
          <div className="text-lg text-slate-300 leading-relaxed space-y-6 text-left bg-[#121B2E] p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl">
            <p>{t("Story.p1")}</p>
            <p>{t("Story.p2")}</p>
            <p>{t("Story.p3")}</p>
          </div>
        </div>

        {/* Core Values (3-Column) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12 font-rajdhani">{t("Values.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Purity */}
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.purity.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("Values.purity.desc")}</p>
            </div>

            {/* Transparency */}
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.transparency.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("Values.transparency.desc")}</p>
            </div>

            {/* Partnership */}
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.partnership.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("Values.partnership.desc")}</p>
            </div>

          </div>
        </div>

        {/* By the Numbers Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center">
            <Activity className="w-8 h-8 text-[#4FC3D0] mx-auto mb-3 opacity-80" />
            <div className="text-4xl font-bold text-white mb-2 font-rajdhani">50+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">{t("Stats.products")}</div>
          </div>
          <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center">
            <Layers className="w-8 h-8 text-[#4FC3D0] mx-auto mb-3 opacity-80" />
            <div className="text-4xl font-bold text-white mb-2 font-rajdhani">4</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">{t("Stats.tiers")}</div>
          </div>
          <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center">
            <ShieldCheck className="w-8 h-8 text-[#4FC3D0] mx-auto mb-3 opacity-80" />
            <div className="text-4xl font-bold text-white mb-2 font-rajdhani">≥99%</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">{t("Stats.purity")}</div>
          </div>
          <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center">
            <BarChart3 className="w-8 h-8 text-[#4FC3D0] mx-auto mb-3 opacity-80" />
            <div className="text-4xl font-bold text-white mb-2 font-rajdhani">200+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">{t("Stats.clients")}</div>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="bg-gradient-to-br from-[#121B2E] to-[#0A0F1C] border border-[#4FC3D0]/20 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(79,195,208,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4FC3D0] to-transparent opacity-50"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani relative z-10">{t("Cta.title")}</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            {t("Cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("Cta.whatsapp")}</span>
            </button>
            <a
              href="mailto:wholesale@99puritypeptides.com"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg border border-white/10"
            >
              <Mail className="w-5 h-5" />
              <span>{t("Cta.email")}</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
