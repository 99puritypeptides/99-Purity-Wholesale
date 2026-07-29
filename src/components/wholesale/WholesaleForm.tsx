"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { submitWholesaleForm } from "@/app/actions/formActions";

export default function WholesaleForm() {
  const t = useTranslations("WholesaleApplication");
  const locale = useLocale();
  const isEs = locale === "es";

  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage(null);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitWholesaleForm(null, formData);

    setIsPending(false);
    if (result.success) {
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setErrorMessage(result.error || (isEs ? "Ocurrió un error al enviar el formulario." : "An error occurred while submitting the form."));
    }
  };

  // Get raw items safely
  const businessTypesRaw = t.raw("form.fields.businessTypes");
  const businessTypes = Array.isArray(businessTypesRaw) ? businessTypesRaw : [];

  const volumeTiersRaw = t.raw("form.fields.volumeTiers");
  const volumeTiers = Array.isArray(volumeTiersRaw) ? volumeTiersRaw : [];

  return (
    <div className="reveal-card">
      {isSuccess && (
        <div className="p-6 bg-emerald-50 border border-emerald-200/50 text-emerald-800 rounded-[2rem] flex items-start gap-3.5 mb-6">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider">{isEs ? "¡Solicitud Recibida!" : "Application Received!"}</h4>
            <p className="text-xs text-emerald-700/90 font-medium mt-1 leading-relaxed">
              {isEs 
                ? "Gracias por registrar su interés. Evaluaremos sus credenciales comerciales y le enviaremos la confirmación del portal por correo electrónico." 
                : "Thank you for registering your interest. We will evaluate your business credentials and email you details regarding portal confirmation."}
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="p-6 bg-rose-50 border border-rose-200/50 text-rose-800 rounded-[2rem] flex items-start gap-3.5 mb-6">
          <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-rose-700 font-bold text-xs">!</span>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider">{isEs ? "Error al Enviar" : "Submission Failed"}</h4>
            <p className="text-xs text-rose-700/90 font-medium mt-1 leading-relaxed">{errorMessage}</p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-[#F8F8F6] border border-black/5 rounded-[2.5rem] p-6 md:p-12 shadow-sm space-y-6"
      >
        {/* Attestation disclaimer banner */}
        <div className="bg-[#13a7b7]/5 border border-[#13a7b7]/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-[#0b7f8c] font-absans font-bold text-base uppercase tracking-tight mb-3">
            {t('form.attestation.title')}
          </h3>
          <p className="text-black/60 font-archia font-medium text-xs leading-relaxed mb-6">
            {t('form.attestation.content')}
          </p>
          <label className="flex items-start gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              name="attestation" 
              value="yes"
              required 
              disabled={isPending}
              className="mt-1 w-4 h-4 accent-[#13a7b7] rounded cursor-pointer disabled:opacity-50" 
            />
            <span className="text-black font-archia font-bold text-xs select-none">
              {t('form.attestation.label')}
            </span>
          </label>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.businessName')}
            </label>
            <input 
              type="text" 
              name="businessName" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm disabled:opacity-50" 
              placeholder={t('form.fields.businessNamePlaceholder')} 
            />
          </div>
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.businessType')}
            </label>
            <select 
              name="businessType" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold shadow-sm cursor-pointer disabled:opacity-50"
            >
              <option value="">{t('form.fields.businessTypeDefault')}</option>
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.fullName')}
            </label>
            <input 
              type="text" 
              name="fullName" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm disabled:opacity-50" 
              placeholder={t('form.fields.fullNamePlaceholder')} 
            />
          </div>
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.email')}
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm disabled:opacity-50" 
              placeholder={t('form.fields.emailPlaceholder')} 
            />
          </div>
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.phone')}
            </label>
            <input 
              type="tel" 
              name="phone" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm disabled:opacity-50" 
              placeholder={t('form.fields.phonePlaceholder')} 
            />
          </div>
          <div>
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.state')}
            </label>
            <input 
              type="text" 
              name="state" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm disabled:opacity-50" 
              placeholder={t('form.fields.statePlaceholder')} 
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
              {t('form.fields.volume')}
            </label>
            <select 
              name="monthlyVolume" 
              required 
              disabled={isPending}
              className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold shadow-sm cursor-pointer disabled:opacity-50"
            >
              <option value="">{t('form.fields.volumeDefault')}</option>
              {volumeTiers.map(tier => (
                <option key={tier} value={tier}>{tier}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
            {t('form.fields.products')}
          </label>
          <textarea 
            name="products" 
            required 
            rows={3} 
            disabled={isPending}
            className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm resize-none disabled:opacity-50" 
            placeholder={t('form.fields.productsPlaceholder')} 
          />
        </div>

        <div>
          <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
            {t('form.fields.contactMethod')}
          </label>
          <div className="flex gap-6 mt-1">
            {['WhatsApp', 'Email'].map((m) => (
              <label key={m} className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="radio" 
                  name="contactMethod" 
                  value={m} 
                  defaultChecked={m === 'WhatsApp'}
                  disabled={isPending}
                  className="accent-[#13a7b7] w-4 h-4 cursor-pointer disabled:opacity-50" 
                />
                <span className="text-black/75 font-archia text-xs font-bold">{m}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-black/55 font-dm-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
            {t('form.fields.notes')}
          </label>
          <textarea 
            name="notes" 
            rows={3} 
            disabled={isPending}
            className="w-full bg-white border border-black/5 text-black rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#13a7b7] focus:ring-1 focus:ring-[#13a7b7] transition-all font-archia text-xs font-semibold placeholder:text-black/35 shadow-sm resize-none disabled:opacity-50" 
            placeholder={t('form.fields.notesPlaceholder')} 
          />
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-black hover:bg-black/90 text-white font-bold py-4 rounded-xl font-absans text-[11px] uppercase tracking-widest transition-all shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isPending ? (isEs ? "Enviando..." : "Sending...") : t('form.fields.submit')}
        </button>

        <p className="text-black/45 font-archia font-semibold text-[10px] text-center leading-relaxed max-w-lg mx-auto">
          {t('form.footer')}
        </p>
      </form>
    </div>
  );
}
