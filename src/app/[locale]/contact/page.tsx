"use client";

import { useTranslations, useLocale } from "next-intl";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import FaqSection from "@/components/shared/FaqSection";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isEs = locale === "es";

  const faqItems = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
  const faqs = faqItems.map((id) => ({
    q: t(`FAQ.items.${id}.q`),
    a: t(`FAQ.items.${id}.a`),
  }));

  const handleWhatsAppClick = () => {
    const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "18437439007").replace(/\D/g, '');
    const message = isEs
      ? "Hola, me gustaría conocer sus precios y niveles mayoristas. Mi negocio es "
      : "Hi, I'd like to learn about your wholesale pricing and tiers. My business is a ";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#101827] -mt-24 md:-mt-32 selection:bg-[#13a7b7]/20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-52 pb-24 md:pt-64 md:pb-32 border-b border-black/5 bg-[#F8F8F6]">
        {/* Grain Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div>
            <div className="inline-block bg-black/5 border border-black/5 px-5 py-2 rounded-full text-[10px] font-bold font-dm-sans uppercase tracking-widest text-black/60 mb-6">
              {isEs ? "Soporte de Adquisición" : "Procurement Assistance"}
            </div>
            <h1 className="reveal-text text-4xl sm:text-6xl md:text-7xl font-bold font-absans text-black uppercase tracking-tight leading-none mb-6 break-words w-full">
              {t("Hero.title")}
            </h1>
            <p className="reveal-text text-lg md:text-xl font-archia font-semibold text-black/75 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("Hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-24 bg-[#F8F8F6] relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="reveal-grid grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* WhatsApp Procurement Card */}
              <div className="reveal-card bg-white border border-emerald-500/20 rounded-[2rem] p-8 shadow-[0_22px_70px_rgba(16,185,129,0.03)] hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black font-absans uppercase leading-none">
                      {isEs ? "WhatsApp Directo" : "Direct WhatsApp"}
                    </h3>
                    <p className="text-black/55 font-archia text-xs font-medium mt-1">
                      {t("Methods.whatsapp.title")}
                    </p>
                  </div>
                </div>
                <p className="text-black/65 font-archia text-sm mb-6 leading-relaxed font-medium">
                  {t("Methods.whatsapp.description")}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center space-x-2 text-xs font-archia tracking-wider uppercase shadow-[0_10px_30px_rgba(37,211,102,0.2)] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t("Methods.whatsapp.cta")}</span>
                </button>
              </div>

              {/* Email Procurement Card */}
              <div className="reveal-card bg-white border border-black/5 rounded-[2rem] p-8 shadow-[0_22px_70px_rgba(19,32,52,0.04)] hover:border-black/15 transition-all duration-300 mt-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-black/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black font-absans uppercase leading-none">
                      {isEs ? "Correo Electrónico" : "Email Sourcing"}
                    </h3>
                    <p className="text-black/55 font-archia text-xs font-medium mt-1">
                      {t("Methods.email.title")}
                    </p>
                  </div>
                </div>
                <p className="text-black/65 font-archia text-sm mb-6 leading-relaxed font-medium">
                  {t("Methods.email.description")}
                </p>
                <a
                  href="mailto:wholesale@99puritypeptides.com"
                  className="w-full bg-black/5 hover:bg-black/10 text-black border border-black/10 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center space-x-2 text-xs font-archia tracking-wider uppercase"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t("Methods.email.cta")}</span>
                </a>
              </div>

              {/* checklist Card */}
              <div className="reveal-card bg-white border border-black/5 rounded-[2rem] p-8 shadow-[0_22px_70px_rgba(19,32,52,0.04)] mt-8">
                <h3 className="text-lg font-bold text-black mb-6 font-absans uppercase">
                  {t("Methods.checklist.title")}
                </h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#13a7b7] mt-0.5 shrink-0" />
                      <span className="text-black/75 font-archia text-sm font-medium">
                        {t(`Methods.checklist.items.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Account Request Form */}
            <div className="reveal-card lg:col-span-7 bg-white border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-[0_22px_70px_rgba(19,32,52,0.05)]">
              <div>
                <div className="mb-10">
                  <h2 className="reveal-text text-2xl font-bold text-black mb-2 font-absans uppercase">
                    {t("Form.title")}
                  </h2>
                  <p className="reveal-text text-black/50 font-archia text-sm font-medium">
                    {t("Form.subtitle")}
                  </p>
                </div>

                <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.businessName")}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black placeholder-slate-400 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.businessType")}
                      </label>
                      <div className="relative">
                        <select
                          name="businessType"
                          required
                          className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all appearance-none font-archia text-sm font-medium cursor-pointer"
                        >
                          <option value="" disabled selected>
                            {isEs ? "Seleccionar..." : "Select..."}
                          </option>
                          <option value="clinic">
                            {isEs ? "Clínica de Bienestar" : "Wellness Clinic"}
                          </option>
                          <option value="pharmacy">
                            {isEs ? "Farmacia de Compuestos" : "Compounding Pharmacy"}
                          </option>
                          <option value="distributor">
                            {isEs ? "Distribuidor" : "Distributor"}
                          </option>
                          <option value="research">
                            {isEs ? "Centro de Investigación" : "Research Facility"}
                          </option>
                          <option value="other">
                            {isEs ? "Otro" : "Other"}
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black placeholder-slate-400 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black placeholder-slate-400 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.state")}
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black placeholder-slate-400 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                        {t("Form.fields.volume")}
                      </label>
                      <div className="relative">
                        <select
                          name="volume"
                          required
                          className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all appearance-none font-archia text-sm font-medium cursor-pointer"
                        >
                          <option value="" disabled selected>
                            {isEs ? "Seleccionar..." : "Select..."}
                          </option>
                          <option value="under50">
                            {isEs ? "Menos de 50 viales/mes" : "Under 50 vials/mo"}
                          </option>
                          <option value="50-200">
                            {isEs ? "50 - 200 viales/mes" : "50 - 200 vials/mo"}
                          </option>
                          <option value="200-500">
                            {isEs ? "200 - 500 viales/mes" : "200 - 500 vials/mo"}
                          </option>
                          <option value="500+">
                            {isEs ? "Más de 500 viales/mes" : "500+ vials/mo"}
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                      {t("Form.fields.products")}
                    </label>
                    <textarea
                      name="products"
                      rows={3}
                      required
                      placeholder="e.g. BPC-157, Semaglutide, Tirzepatide..."
                      className="w-full bg-[#F8F8F6] border border-black/5 rounded-xl px-4 py-3.5 text-black placeholder-slate-400 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all resize-none font-archia text-sm font-medium"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest">
                      {t("Form.fields.contactMethod")}
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          defaultChecked
                          className="text-[#13a7b7] focus:ring-[#13a7b7] bg-[#F8F8F6] border-black/10"
                        />
                        <span className="text-black/70 font-archia text-sm font-medium">WhatsApp</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          className="text-[#13a7b7] focus:ring-[#13a7b7] bg-[#F8F8F6] border-black/10"
                        />
                        <span className="text-black/70 font-archia text-sm font-medium">Email</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-black/85 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] font-archia tracking-wider uppercase text-xs mt-4 cursor-pointer"
                  >
                    {t("Form.fields.submit")}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title={t("FAQ.title")}
        items={faqs}
        theme="white"
      />
    </main>
  );
}
