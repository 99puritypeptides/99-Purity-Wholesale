"use client";

import { useTranslations } from "next-intl";

export default function DisclaimerPage() {
  const t = useTranslations("Legal");

  // Assume content is an array of strings in our JSON
  const contentKeys = [0, 1, 2, 3, 4];

  return (
    <main className="min-h-screen bg-[#0A0F1C] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#121B2E] border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-rajdhani border-b border-white/10 pb-6">
            {t("Disclaimer.title")}
          </h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            {contentKeys.map((key) => (
              <p key={key}>{t(`Disclaimer.content.${key}`)}</p>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <p className="text-amber-200 text-sm font-medium">
              Important: This website is strictly business-to-business (B2B). We do not serve individual retail customers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
