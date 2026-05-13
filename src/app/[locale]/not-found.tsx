import {useTranslations} from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const locale = useLocale();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-rajdhani font-bold text-brand-accent mb-4">404</h1>
      <h2 className="text-2xl font-rajdhani font-bold text-white mb-4">{t('title')}</h2>
      <p className="text-gray-400 font-dm-sans mb-8 max-w-md">
        {t('description')}
      </p>
      <Link 
        href={`/${locale}`}
        className="bg-brand-accent hover:bg-[#3EABC0] text-[#090C11] font-bold px-8 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
