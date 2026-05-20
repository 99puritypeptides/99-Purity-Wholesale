'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { ArrowUpRight, Globe, ShieldCheck, Mail, FlaskConical, LayoutGrid } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Layout');
  const locale = useLocale();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t('footer.labTitle'),
      links: [
        { label: t('nav.products'), href: '/products' },
        { label: t('footer.categories'), href: '/products#categories' },
        { label: t('nav.quality'), href: '/quality' },
        { label: t('nav.blog'), href: '/blog' },
      ]
    },
    {
      title: t('footer.supportTitle'),
      links: [
        { label: t('nav.services'), href: '/services' },
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.contact'), href: '/contact' },
        { label: t('footer.glossary'), href: '/glossary' },
      ]
    },
    {
      title: t('footer.instTitle'),
      links: [
        { label: t('footer.wholesaleApp'), href: '/wholesale-application' },
        { label: t('footer.fulfillment'), href: '/services#fulfillment' },
        { label: t('footer.partnerProgram'), href: '/services#partners' },
        { label: t('footer.locations'), href: '/locations' },
      ]
    },
    {
      title: t('footer.legalTitle'),
      links: [
        { label: t('footer.privacy'), href: '/privacy' },
        { label: t('footer.terms'), href: '/terms' },
        { label: t('footer.refundPolicy'), href: '/refund-policy' },
        { label: t('footer.complianceTitle'), href: '/compliance' },
      ]
    }
  ];

  return (
    <footer className="relative z-20 bg-white pt-6 md:pt-10 pb-20 md:pb-10 px-4 md:px-6 overflow-hidden font-archia print:hidden">
      <div className="max-w-[1800px] mx-auto bg-[#000000] rounded-[3rem] md:rounded-[5rem] p-8 pb-32 md:p-20 md:pb-40 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)]">

        {/* Large Branding Background Text - Refined Institutional Style */}
        <div className="absolute top-[15%] md:top-[10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.04] select-none">
          <h2 className="text-[15vw] font-absans font-bold leading-none text-white whitespace-nowrap uppercase tracking-tighter">
            99 PURITY
          </h2>
        </div>

        {/* Top Section: Logo & Description */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/99pw-logo.webp"
                alt="99 Purity Wholesale"
                width={400}
                height={100}
                className="w-auto h-20 md:h-28 object-contain"
                priority
              />
            </Link>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            {[Globe, ShieldCheck, FlaskConical, Mail, LayoutGrid].map((Icon, i) => (
              <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-xs md:text-sm font-bold uppercase tracking-widest transition-colors flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Minimalist Peptides Disclaimer */}
        <div className="relative z-10 py-10 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 mb-2 font-absans">
            {t('footer.disclaimer')}
          </p>
          <p className="text-[10px] md:text-[11px] leading-relaxed text-white/30 uppercase tracking-widest font-medium">
            {t('footer.disclaimerContent')}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Locale */}
        <div className="relative z-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 mb-12 md:mb-0">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 text-center md:text-left">
            <span>{t('footer.copyright', { year: currentYear })}</span>
          </div>

          <div className="flex items-center gap-4 bg-white/15 rounded-full p-2 border border-white/20 shadow-xl backdrop-blur-md">
            <div className="pl-3">
              <Globe className="w-4 h-4 text-white/50" />
            </div>
            <div className="flex items-center gap-1">
              <Link
                locale="en"
                href={pathname}
                className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all ${locale === 'en' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/40 hover:text-white'
                  }`}
              >
                EN
              </Link>
              <Link
                locale="es"
                href={pathname}
                className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all ${locale === 'es' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/40 hover:text-white'
                  }`}
              >
                ES
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Action Buttons (Symmetrical Side-by-Side Overlap) */}
        <div className="md:hidden absolute bottom-0 left-4 right-4 translate-y-1/2 flex items-end gap-3">
          {/* Back to Top - Bottom Left */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#1A1A1A] border border-white/10 text-white w-[25%] pt-4 pb-12 rounded-t-[1.5rem] flex flex-col items-center justify-start shadow-2xl active:scale-95 transition-all"
          >
            <ArrowUpRight className="w-3.5 h-3.5 -rotate-45 mb-1" />
            <span className="text-[6px] font-bold tracking-widest uppercase opacity-40">Top</span>
          </button>
          
          {/* Start Now - Bottom Right */}
          <Link 
            href="/wholesale-application"
            className="bg-[#F1FF85] text-black flex-1 pt-6 pb-12 rounded-t-[1.5rem] flex flex-col items-center justify-start shadow-xl active:scale-95 transition-all"
          >
            <span className="text-sm font-absans font-bold tracking-tighter uppercase">{t('footer.startNow')}</span>
          </Link>
        </div>

        {/* Desktop Absolute Buttons (Hidden on Mobile) */}
        <div className="hidden md:block">
          {/* Back to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute bottom-0 right-[280px] translate-y-1/2 bg-[#1A1A1A] border border-white/10 text-white px-8 pt-8 pb-16 rounded-t-[2.5rem] flex flex-col items-center justify-start group hover:bg-white hover:text-black hover:pb-24 transition-all duration-500 shadow-2xl z-20"
          >
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase mb-1 opacity-40 group-hover:text-black/40 transition-colors">{t('footer.welcome')}</span>
            <span className="text-base font-absans font-bold tracking-tighter leading-none mb-3">{t('footer.backToTop')}</span>
            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:translate-y-[-4px] transition-transform duration-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>
          </button>

          {/* Start Now */}
          <Link 
            href="/wholesale-application"
            className="absolute bottom-0 right-8 translate-y-1/2 bg-[#F1FF85] text-black px-12 pt-8 pb-16 rounded-t-[2.5rem] flex flex-col items-center justify-start group hover:pb-24 transition-all duration-500 shadow-[0_-20px_60px_rgba(241,255,133,0.15)]"
          >
            <span className="text-3xl font-absans font-bold tracking-tighter leading-none mb-2">{t('footer.startNow')}</span>
            <ArrowUpRight className="w-8 h-8 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      {/* Belk Digital Credit Section - Bottom Margin Area */}
      <div className="max-w-[1800px] mx-auto mt-16 md:mt-16 flex flex-col md:flex-row justify-between items-center px-8 md:px-20 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-black/50">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
          <span className="whitespace-nowrap">{t('footer.creditLab')}</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span className="whitespace-nowrap text-black/30">{t('footer.creditUSA')}</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-center md:text-right">
          <span className="opacity-40">{t('footer.creditBy')}</span>
          <a
            href="https://belkdigital.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 hover:text-[#d72f45] transition-colors border-b border-black/10 hover:border-[#d72f45] pb-0.5"
          >
            Belk Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
