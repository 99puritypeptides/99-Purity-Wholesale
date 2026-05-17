'use client';

import { useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for diagnostic purposes
    console.error('Next.js Application Error:', error);
  }, [error]);

  const locale = useLocale() || 'en';

  // Resilient fallback logic in case useTranslations throws (e.g. if the i18n context is broken)
  let t = (key: string) => {
    const fallbacks: Record<string, string> = {
      title: 'Something went wrong',
      description: 'An unexpected error occurred while loading this page.',
      retry: 'Try Again',
      home: 'Back to Home',
    };
    if (locale === 'es') {
      fallbacks.title = 'Algo salió mal';
      fallbacks.description = 'Ocurrió un error inesperado al cargar esta página.';
      fallbacks.retry = 'Intentar de nuevo';
      fallbacks.home = 'Volver al inicio';
    }
    return fallbacks[key] || key;
  };

  try {
    const nextIntlT = useTranslations('ErrorPage');
    t = (key: string) => nextIntlT(key);
  } catch (e) {
    console.warn('Using resilient fallbacks for Error page:', e);
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-[#F8F8F6] text-black">
      <div className="max-w-md w-full border border-black/10 rounded-[2rem] p-8 md:p-12 bg-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative gradient top bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-accent via-teal-500 to-[#3EABC0]" />
        
        {/* Warning Icon */}
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-3xl font-rajdhani font-bold text-black uppercase tracking-wide mb-4">
          {t('title')}
        </h1>
        
        <p className="text-black/60 font-archia text-sm leading-relaxed mb-8 max-w-sm mx-auto font-medium">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex-1 bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold px-6 py-3 rounded-xl transition-all duration-300 font-rajdhani uppercase tracking-wider text-sm shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            {t('retry')}
          </button>
          <Link
            href={`/${locale}`}
            className="flex-1 border border-black/15 hover:border-black/30 hover:bg-black/5 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 font-rajdhani uppercase tracking-wider text-sm text-center active:scale-[0.98]"
          >
            {t('home')}
          </Link>
        </div>
        
        {error.digest && (
          <div className="mt-8 pt-6 border-t border-black/5">
            <span className="text-[10px] font-dm-mono text-black/35 select-all">
              ID: {error.digest}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
