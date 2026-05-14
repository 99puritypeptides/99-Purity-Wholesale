"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { MessageCircle, Mail, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const [openFaq, setOpenFaq] = useState<string | null>("q1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqItems = ["q1", "q2", "q3", "q4", "q5", "q6"];

  const handleWhatsAppClick = () => {
    const phone = "18005550199"; // Placeholder
    const message = "Hi, I'd like to learn about your wholesale pricing and tiers. My business is a ";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rajdhani tracking-tight">
            {t("Hero.title")}
          </h1>
          <p className="text-xl text-slate-300">
            {t("Hero.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-[#121B2E] border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{t("Methods.whatsapp.title")}</h3>
                  <p className="text-slate-400">{t("Methods.whatsapp.description")}</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t("Methods.whatsapp.cta")}</span>
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#4FC3D0]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{t("Methods.email.title")}</h3>
                  <p className="text-slate-400">{t("Methods.email.description")}</p>
                </div>
              </div>
              <a
                href="mailto:wholesale@99puritypeptides.com"
                className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg border border-white/10"
              >
                <Mail className="w-5 h-5" />
                <span>{t("Methods.email.cta")}</span>
              </a>
            </div>

            {/* Checklist */}
            <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-rajdhani">{t("Methods.checklist.title")}</h3>
              <ul className="space-y-4">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4FC3D0] mt-0.5 shrink-0" />
                    <span className="text-slate-300">{t(`Methods.checklist.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 font-rajdhani">{t("Form.title")}</h2>
              <p className="text-slate-400">{t("Form.subtitle")}</p>
            </div>

            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t("Form.fields.businessName")}</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4FC3D0] focus:ring-1 focus:ring-[#4FC3D0] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t("Form.fields.businessType")}</label>
                  <select
                    name="businessType"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4FC3D0] focus:ring-1 focus:ring-[#4FC3D0] transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select...</option>
                    <option value="clinic">Wellness Clinic</option>
                    <option value="pharmacy">Compounding Pharmacy</option>
                    <option value="distributor">Distributor</option>
                    <option value="research">Research Facility</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t("Form.fields.state")}</label>
                  <input
                    type="text"
                    name="state"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4FC3D0] focus:ring-1 focus:ring-[#4FC3D0] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t("Form.fields.volume")}</label>
                  <select
                    name="volume"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4FC3D0] focus:ring-1 focus:ring-[#4FC3D0] transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select...</option>
                    <option value="under50">Under 50 vials/mo</option>
                    <option value="50-200">50 - 200 vials/mo</option>
                    <option value="200-500">200 - 500 vials/mo</option>
                    <option value="500+">500+ vials/mo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t("Form.fields.products")}</label>
                <textarea
                  name="products"
                  rows={3}
                  required
                  placeholder="e.g. BPC-157, Semaglutide, Tirzepatide..."
                  className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4FC3D0] focus:ring-1 focus:ring-[#4FC3D0] transition-all resize-none"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t("Form.fields.contactMethod")}</label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="whatsapp" defaultChecked className="text-[#4FC3D0] focus:ring-[#4FC3D0] bg-[#0A0F1C] border-white/10" />
                    <span className="text-slate-300">WhatsApp</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="email" className="text-[#4FC3D0] focus:ring-[#4FC3D0] bg-[#0A0F1C] border-white/10" />
                    <span className="text-slate-300">Email</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4FC3D0] hover:bg-[#3db2c0] text-[#0A0F1C] font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(79,195,208,0.2)] hover:shadow-[0_0_30px_rgba(79,195,208,0.4)] mt-4"
              >
                {t("Form.fields.submit")}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani">{t("FAQ.title")}</h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((id) => (
              <div 
                key={id}
                className="bg-[#121B2E] border border-white/5 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-white">{t(`FAQ.items.${id}.q`)}</span>
                  {openFaq === id ? (
                    <ChevronUp className="w-5 h-5 text-[#4FC3D0] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === id ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed">
                    {t(`FAQ.items.${id}.a`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
