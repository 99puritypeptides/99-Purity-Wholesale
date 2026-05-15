'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { Menu, X, ArrowUpRight, Search, Globe } from 'lucide-react';
import GlobalSearch from '@/components/search/GlobalSearch';
import CartIcon from '@/components/cart/CartIcon';

export default function Header() {
  const t = useTranslations('Layout');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: '/products', label: t('nav.products') },
    { href: '/quality', label: t('nav.quality') },
    { href: '/services', label: t('nav.services') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/locations', label: t('nav.locations') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-[70] flex items-center transition-transform hover:scale-105">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-2xl">
              <Image 
                src="/images/99pw-logo.webp"
                alt="99 Purity Wholesale"
                width={160}
                height={40}
                className="w-auto h-8 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#0A0F16]/60 backdrop-blur-2xl border border-white/10 px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-[12px] font-bold text-white/70 uppercase tracking-widest hover:text-brand-accent transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <div className="w-[1px] h-5 bg-white/10 mx-2"></div>
            
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-[11px] font-bold text-white/50 hover:text-brand-accent transition-colors uppercase tracking-widest group"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline">{t('nav.search') || 'Search'}</span>
            </button>

            <button 
              onClick={handleLanguageSwitch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold transition-all uppercase tracking-widest hover:border-brand-accent/50 group"
            >
              <Globe className="w-3.5 h-3.5 text-white/40 group-hover:text-brand-accent transition-colors" />
              <div className="flex items-center gap-1.5">
                <span className={locale === 'en' ? 'text-brand-accent' : 'text-white/30'}>EN</span>
                <span className="text-white/10 text-[8px]">|</span>
                <span className={locale === 'es' ? 'text-brand-accent' : 'text-white/30'}>ES</span>
              </div>
            </button>
          </nav>

          <div className="flex items-center gap-3 lg:gap-6">
            <CartIcon />
            {/* Search Icon for Mobile/Tablet */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
            >
              <Search className="w-5 h-5" />
            </button>

            <a 
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:flex items-center gap-3 bg-brand-accent text-brand-bg pl-8 pr-4 py-4 rounded-l-full rounded-tr-[2rem] rounded-br-[0.5rem] font-bold text-xs uppercase tracking-widest transition-[padding,background-color,transform,shadow] duration-300 hover:pr-8 group shadow-[0_0_40px_rgba(79,195,208,0.2)]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">{t('whatsapp')}</span>
              <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden relative z-[70] p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl transition-all duration-700 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col justify-center items-center p-12">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-3xl md:text-5xl font-rajdhani font-bold text-white hover:text-brand-accent transition-all tracking-tighter duration-500 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-16 pt-16 border-t border-white/5 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">{t('selectLanguage')}</span>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => locale !== 'en' && router.replace(pathname, { locale: 'en' })}
                  className={`text-xl font-rajdhani font-bold transition-all ${locale === 'en' ? 'text-brand-accent scale-125' : 'text-white/20 hover:text-white'}`}
                >
                  English
                </button>
                <div className="w-[1px] h-4 bg-white/10"></div>
                <button 
                  onClick={() => locale !== 'es' && router.replace(pathname, { locale: 'es' })}
                  className={`text-xl font-rajdhani font-bold transition-all ${locale === 'es' ? 'text-brand-accent scale-125' : 'text-white/20 hover:text-white'}`}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
