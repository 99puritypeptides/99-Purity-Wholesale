'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('Layout');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSwitch = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    // Use the localized router to handle the switch
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-[#121822] text-brand-text py-2 px-4 text-xs sm:text-sm font-medium flex justify-between items-center border-b border-gray-800">
        <div className="flex gap-4">
          <button onClick={handleLanguageSwitch} className="hover:text-brand-accent font-dm-mono uppercase tracking-widest transition-colors">
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
        <div className="hidden md:block text-center font-rajdhani font-semibold tracking-[0.2em] uppercase text-brand-accent">
          {t('announcement')}
        </div>
        <div className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span className="font-dm-mono">+1 (555) 123-4567</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="border-b border-gray-800 py-5 px-6 flex justify-between items-center bg-brand-bg">
        <Link href="/" className="text-2xl md:text-3xl font-rajdhani font-bold tracking-[0.15em] text-brand-text">
          99 PURITY<span className="text-brand-accent font-light ml-2 text-xl">WHOLESALE</span>
        </Link>

        <div className="hidden lg:flex gap-8 text-sm font-dm-sans font-medium text-brand-text uppercase tracking-widest">
          <Link href="/products" className="hover:text-brand-accent transition-colors">{t('nav.products')}</Link>
          <Link href="/quality" className="hover:text-brand-accent transition-colors">{t('nav.quality')}</Link>
          <Link href="/services" className="hover:text-brand-accent transition-colors">{t('nav.services')}</Link>
          <Link href="/about" className="hover:text-brand-accent transition-colors">{t('nav.about')}</Link>
          <Link href="/contact" className="hover:text-brand-accent transition-colors">{t('nav.contact')}</Link>
        </div>

        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-bg px-5 py-2.5 rounded shadow-sm font-dm-sans text-xs md:text-sm uppercase tracking-wider font-semibold flex items-center gap-2 transition-all hover:bg-opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span className="hidden sm:inline">{t('whatsapp')}</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </nav>
    </header>
  );
}
