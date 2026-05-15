"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Mail, ShieldCheck, Search, Users, Activity, Layers, BarChart3, FlaskConical, Globe, Award, CheckCircle2, ArrowRight, Microscope, Star, Truck } from "lucide-react";

const iconMap: Record<string, any> = {
  FlaskConical,
  Award,
  ShieldCheck,
  Users,
  Globe,
  Star,
  Microscope,
  Truck
};

export default function AboutPage() {
  const t = useTranslations("About");

  const handleWhatsAppClick = () => {
    const phone = "18437439007";
    const message = t("Cta.msg");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] pb-24">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4FC3D0]/10 via-[#0A0F1C] to-[#0A0F1C]"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-block bg-[#4FC3D0]/10 text-[#4FC3D0] px-4 py-1.5 rounded-full font-dm-mono text-sm mb-6 border border-[#4FC3D0]/20">
            {t("Hero.badge")}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-rajdhani tracking-tight leading-tight">
            {t("Hero.title")}
          </h1>
          <p className="text-xl text-[#4FC3D0] font-medium mb-8 max-w-3xl mx-auto">
            {t("Hero.subtitle")}
          </p>
          <p className="text-lg text-slate-400 font-dm-sans max-w-3xl mx-auto leading-relaxed">
            {t("Hero.p1")}
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t("Story.badge")}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-rajdhani leading-tight">
                {t("Story.title")}
              </h2>
              <div className="space-y-6 text-slate-300 font-dm-sans leading-relaxed">
                <p>{t("Story.p1")}</p>
                <p>{t("Story.p2")}</p>
                <p>{t("Story.p3")}</p>
                <p>{t("Story.p4")}</p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {(t.raw("Story.features") as any[]).map((item, i) => {
                const icons = [FlaskConical, Award, ShieldCheck, Users, Globe, Star];
                const Icon = icons[i] || Star;
                return (
                  <div key={i} className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 hover:border-[#4FC3D0]/30 transition-all">
                    <Icon className="w-7 h-7 text-[#4FC3D0] mb-4" />
                    <h3 className="text-white font-rajdhani font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-dm-sans text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#060B17] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Microscope className="w-12 h-12 text-[#4FC3D0] mx-auto mb-8 opacity-60" />
          <blockquote className="text-3xl md:text-4xl font-rajdhani font-bold text-white leading-tight mb-8">
            "{t("Mission.quote")}"
          </blockquote>
          <p className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-widest">— {t("Mission.author")}</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t("Values.badge")}</span>
            <h2 className="text-4xl font-bold text-center text-white font-rajdhani">{t("Values.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.purity.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.purity.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">{t("Values.purity.longDesc")}</p>
            </div>
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.transparency.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.transparency.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">{t("Values.transparency.longDesc")}</p>
            </div>
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-[#4FC3D0]/30 transition-all">
              <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#4FC3D0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">{t("Values.partnership.title")}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{t("Values.partnership.desc")}</p>
              <p className="text-slate-500 font-dm-sans text-sm leading-relaxed">{t("Values.partnership.longDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#060B17] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t("Process.badge")}</span>
            <h2 className="text-4xl font-bold text-white font-rajdhani">{t("Process.title")}</h2>
            <p className="text-slate-400 font-dm-sans mt-4 max-w-2xl mx-auto">{t("Process.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#4FC3D0]/30 to-transparent"></div>
            {(t.raw("Process.steps") as any[]).map((step, i) => {
              const icons = [FlaskConical, Microscope, Award, Truck];
              const Icon = icons[i] || Truck;
              return (
                <div key={i} className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 text-center relative z-10 hover:border-[#4FC3D0]/30 transition-all">
                  <div className="text-[#4FC3D0] font-dm-mono text-xs uppercase tracking-widest mb-4">Step 0{i+1}</div>
                  <div className="w-14 h-14 bg-[#4FC3D0]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#4FC3D0]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-rajdhani">{step.title}</h3>
                  <p className="text-slate-400 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#4FC3D0] font-dm-mono text-sm uppercase tracking-[0.3em] mb-4 block">{t("Clients.badge")}</span>
              <h2 className="text-4xl font-bold text-white font-rajdhani mb-8">{t("Clients.title")}</h2>
              <p className="text-slate-400 font-dm-sans leading-relaxed mb-8">
                {t("Clients.subtitle")}
              </p>
              <div className="space-y-4">
                {(t.raw("Clients.items") as any[]).map((client, i) => (
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
                <h3 className="text-2xl font-bold text-white font-rajdhani mb-8">{t("Clients.whyTitle")}</h3>
                <div className="space-y-6">
                  {(t.raw("Clients.whyPoints") as string[]).map((point, i) => (
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
            <h2 className="text-4xl font-bold text-white font-rajdhani">{t("Stats.title")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(t.raw("Stats.items") as any[]).map((s, i) => (
              <div key={i} className="bg-[#121B2E] border border-white/5 rounded-2xl p-6 text-center hover:border-[#4FC3D0]/20 transition-all">
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
                <h2 className="text-3xl font-bold text-white font-rajdhani mb-4">{t("Compliance.title")}</h2>
                <p className="text-slate-400 font-dm-sans text-sm leading-relaxed">{t("Compliance.desc")}</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t.raw("Compliance.items") as any[]).map((item, i) => (
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
