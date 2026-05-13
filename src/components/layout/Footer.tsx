'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Layout');
  const locale = useLocale();

  return (
    <footer className="bg-brand-bg text-brand-text pt-16 pb-8 px-6 font-dm-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-rajdhani font-bold tracking-[0.15em] mb-4 block text-brand-text">
            99 PURITY<span className="text-brand-accent font-light ml-2 text-xl">WHOLESALE</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mt-4">
            {t('footer.disclaimer')}
          </p>
        </div>

        <div>
          <h4 className="font-rajdhani font-semibold text-lg tracking-widest uppercase mb-6 text-brand-text">Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/products" className="hover:text-brand-accent transition-colors">{t('nav.products')}</Link></li>
            <li><Link href="/quality" className="hover:text-brand-accent transition-colors">{t('nav.quality')}</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">{t('nav.services')}</Link></li>
            <li><Link href="/about" className="hover:text-brand-accent transition-colors">{t('nav.about')}</Link></li>
            <li><Link href="/contact" className="hover:text-brand-accent transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani font-semibold text-lg tracking-widest uppercase mb-6 text-brand-text">{t('footer.paymentMethods')}</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-dm-mono">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Bitcoin (BTC)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Zelle
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Bank Transfer
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} 99 Purity Wholesale. {t('footer.rights')}</p>
        <div className="mt-4 md:mt-0 flex items-center space-x-6">
          <Link locale={locale === 'en' ? 'es' : 'en'} href="/" className="hover:text-brand-accent uppercase font-dm-mono tracking-widest border border-gray-700 px-2 py-1 rounded transition-colors">
            {locale === 'en' ? 'Español' : 'English'}
          </Link>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
