"use client";

import { useTranslations } from "next-intl";

export default function TermsOfServicePage() {
  const t = useTranslations("Legal");

  return (
    <main className="min-h-screen bg-[#0A0F1C] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-rajdhani border-b border-white/10 pb-6">
            {t("Terms.title")}
          </h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>{t("Terms.content")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
