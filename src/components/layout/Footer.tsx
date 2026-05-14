'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, MapPin, Phone, ArrowUpRight, Globe, Shield } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Layout');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] text-brand-text pt-24 pb-12 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -translate-x-[-20%] translate-y-[20%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <Image 
                src="/images/99pw-logo.webp"
                alt="99 Purity Wholesale"
                width={220}
                height={44}
                className="w-auto h-12 object-contain mb-8"
              />
            </Link>
            <p className="text-brand-text/40 text-sm leading-relaxed max-w-sm mb-10 font-dm-sans">
              {t('footer.disclaimer')}
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all cursor-pointer group">
                <Globe className="w-5 h-5 text-brand-text/60 group-hover:text-brand-accent" />
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-all cursor-pointer group">
                <Shield className="w-5 h-5 text-brand-text/60 group-hover:text-brand-accent" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase mb-8 text-white/90">Navigation</h4>
            <ul className="space-y-4">
              {['products', 'quality', 'services', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item}`} 
                    className="text-brand-text/40 hover:text-brand-accent text-xs uppercase tracking-widest transition-all flex items-center group"
                  >
                    {t(`nav.${item}` as any)}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase mb-8 text-white/90">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="text-brand-text/40 hover:text-brand-accent text-xs uppercase tracking-widest transition-all flex items-center group">
                  {t('nav.blog' as any)}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-brand-text/40 hover:text-brand-accent text-xs uppercase tracking-widest transition-all flex items-center group">
                  {t('nav.locations' as any)}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/wholesale-application" className="text-brand-text/40 hover:text-brand-accent text-xs uppercase tracking-widest transition-all flex items-center group">
                  Apply Wholesale
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase mb-8 text-white/90">HQ Operations</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-brand-accent/10 p-2.5 rounded-lg mt-1 group-hover:bg-brand-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-text/30 uppercase tracking-widest mb-1">Inquiries</span>
                  <a href="mailto:sales@99purity.com" className="text-brand-text/60 hover:text-white transition-colors font-dm-mono text-sm">sales@99purity.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-brand-accent/10 p-2.5 rounded-lg mt-1 group-hover:bg-brand-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-text/30 uppercase tracking-widest mb-1">Operations</span>
                  <a href="tel:+15551234567" className="text-brand-text/60 hover:text-white transition-colors font-dm-mono text-sm">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-brand-accent/10 p-2.5 rounded-lg mt-1 group-hover:bg-brand-accent/20 transition-colors">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-text/30 uppercase tracking-widest mb-1">Global Logistics</span>
                  <span className="text-brand-text/60 font-dm-mono text-sm">San Diego, CA, USA</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Payments & Compliance */}
          <div className="lg:col-span-3">
            <h4 className="font-rajdhani font-bold text-sm tracking-[0.2em] uppercase mb-8 text-white/90">Trade & Settlement</h4>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <p className="text-[10px] text-brand-text/30 uppercase tracking-widest mb-4">Accepted Methods</p>
              <div className="flex flex-wrap gap-2">
                {['Bitcoin (BTC)', 'Zelle', 'Bank Transfer', 'USDT'].map((method) => (
                  <span key={method} className="px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-brand-text/60 border border-white/5">
                    {method}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[10px] text-brand-text/20 leading-relaxed italic">
                  * All research compounds are for laboratory use only. Not for human consumption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-dm-mono uppercase tracking-[0.2em] text-brand-text/30">
            <span>&copy; {currentYear} 99 Purity Wholesale</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
            <span>{t('footer.rights')}</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <Link href="/privacy" className="text-brand-text/30 hover:text-brand-accent transition-colors">Privacy</Link>
              <Link href="/terms" className="text-brand-text/30 hover:text-brand-accent transition-colors">Terms</Link>
            </div>
            
            <div className="flex items-center bg-[#1A222C] rounded-full p-1 border border-white/5">
              <Link 
                locale="en" 
                href="/"
                className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all duration-300 ${
                  locale === 'en' ? 'bg-brand-accent text-brand-bg shadow-lg' : 'text-brand-text/40 hover:text-brand-text'
                }`}
              >
                EN
              </Link>
              <Link 
                locale="es" 
                href="/"
                className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all duration-300 ${
                  locale === 'es' ? 'bg-brand-accent text-brand-bg shadow-lg' : 'text-brand-text/40 hover:text-brand-text'
                }`}
              >
                ES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
