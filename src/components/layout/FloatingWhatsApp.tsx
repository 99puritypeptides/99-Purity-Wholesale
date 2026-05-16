'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MessageSquare, X, Send, ShieldCheck, CheckCheck, Landmark, Globe, Microscope, HelpCircle, Truck, FileText, UserPlus, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingWhatsApp() {
  const t = useTranslations('Layout');
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const phoneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Show tooltip after a short delay to attract attention
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);

    const handleClickOutside = (event: MouseEvent) => {
      if (phoneContainerRef.current && !phoneContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const messageOptions = [
    { 
      label: t('whatsapp.messageOptions.catalog.label'), 
      text: t('whatsapp.messageOptions.catalog.text'),
      desc: t('whatsapp.messageOptions.catalog.desc'),
      icon: FileText
    },
    { 
      label: t('whatsapp.messageOptions.partnership.label'), 
      text: t('whatsapp.messageOptions.partnership.text'),
      desc: t('whatsapp.messageOptions.partnership.desc'),
      icon: UserPlus
    },
    { 
      label: t('whatsapp.messageOptions.coa.label'), 
      text: t('whatsapp.messageOptions.coa.text'),
      desc: t('whatsapp.messageOptions.coa.desc'),
      icon: Microscope
    },
    { 
      label: t('whatsapp.messageOptions.synthesis.label'), 
      text: t('whatsapp.messageOptions.synthesis.text'),
      desc: t('whatsapp.messageOptions.synthesis.desc'),
      icon: Landmark
    },
    { 
      label: t('whatsapp.messageOptions.distribution.label'), 
      text: t('whatsapp.messageOptions.distribution.text'),
      desc: t('whatsapp.messageOptions.distribution.desc'),
      icon: Globe
    },
    { 
      label: t('whatsapp.messageOptions.status.label'), 
      text: t('whatsapp.messageOptions.status.text'),
      desc: t('whatsapp.messageOptions.status.desc'),
      icon: Truck
    },
    { 
      label: t('whatsapp.messageOptions.qa.label'), 
      text: t('whatsapp.messageOptions.qa.text'),
      desc: t('whatsapp.messageOptions.qa.desc'),
      icon: ShieldCheck
    },
    { 
      label: t('whatsapp.messageOptions.technical.label'), 
      text: t('whatsapp.messageOptions.technical.text'),
      desc: t('whatsapp.messageOptions.technical.desc'),
      icon: HelpCircle
    },
  ];

  const handleWhatsAppOpen = (message: string) => {
    const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '18437439007').replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100]" ref={phoneContainerRef}>
      
      {/* --- ATTRACTIVE TOOLTIP --- */}
      <div 
        className={`absolute bottom-[calc(100%+16px)] right-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          showTooltip && !isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
      >
        <div className="relative bg-black text-white px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10 whitespace-nowrap flex items-center gap-3 group">
          <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#F1FF85] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">{t('whatsapp.tooltipTitle')}</span>
            <span className="text-[9px] font-medium text-white/40">{t('whatsapp.tooltipDesc')}</span>
          </div>
          {/* Close Tooltip Button */}
          <button 
            onClick={() => setShowTooltip(false)}
            className="ml-2 p-1 hover:bg-white/5 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
          >
            <X className="w-3 h-3 text-white/20" />
          </button>
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-black border-r border-b border-white/10 rotate-45" />
        </div>
      </div>

      {/* --- PREMIUM IPHONE PRO MOCKUP --- */}
      <div 
        className={`absolute bottom-[calc(100%+24px)] right-0 transition-all duration-700 ease-[cubic-bezier(0.17,0.84,0.44,1)] origin-bottom-right ${
          isOpen ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-20 scale-50 rotate-6 pointer-events-none'
        }`}
      >
        <div className="w-[340px] h-[640px] bg-white rounded-[3.5rem] border-[12px] border-[#0A0A0A] shadow-[0_60px_120px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-[100] flex items-center justify-end px-3">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <div className="absolute inset-0 pointer-events-none z-50 bg-gradient-to-tr from-transparent via-black/[0.01] to-transparent" />
          <div className="pt-12 px-10 flex justify-between items-center text-[11px] font-bold text-black/40 relative z-40">
             <span>9:41</span>
             <div className="flex gap-2 items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <div className="w-5 h-2.5 border border-black/20 rounded-sm relative">
                  <div className="absolute inset-y-0 left-0 bg-black w-3/4 rounded-sm" />
                </div>
             </div>
          </div>
          <div className="px-8 py-8 border-b border-black/[0.05] flex items-center gap-5 bg-gradient-to-b from-gray-50 to-white relative z-40">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-md overflow-hidden p-2">
                <Image src="/images/99pw-logo.webp" alt="99 Purity Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-black tracking-tight uppercase">{t('whatsapp.mockupTitle')}</h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] font-bold text-black/30 uppercase tracking-[0.2em]">{t('whatsapp.mockupSubtitle')}</span>
                <CheckCheck className="w-3 h-3 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 custom-scrollbar relative z-40 bg-white">
            <div className="mb-8">
               <div className="bg-gray-50 rounded-2xl p-5 border border-black/[0.03]">
                  <p className="text-[12px] leading-relaxed text-black/60 font-medium">{t('whatsapp.mockupWelcome')}</p>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {messageOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWhatsAppOpen(opt.text)}
                  className="w-full group bg-white border border-black/[0.05] rounded-2xl p-5 text-left transition-all hover:bg-black hover:border-black hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-black/40 group-hover:bg-white/10 group-hover:text-white transition-all"><opt.icon className="w-5 h-5" /></div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-bold text-black group-hover:text-white transition-colors uppercase tracking-tight">{opt.label}</span>
                      <span className="text-[9px] text-black/30 group-hover:text-white/40 font-bold uppercase tracking-widest">{opt.desc}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="h-10" />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full z-[100]" />
        </div>
      </div>

      {/* --- TRIGGER BUTTON --- */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        className={`group relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 shadow-[0_20px_80px_rgba(0,0,0,0.4)] border-2 ${
          isOpen ? 'bg-black text-white border-black rotate-180 scale-110' : 'bg-white text-black border-black/5 hover:scale-110 hover:border-black/30'
        }`}
        aria-label="Connect with Concierge"
      >
        <div className={`absolute inset-0 bg-black/5 blur-2xl rounded-full transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100 animate-pulse'}`} />
        {isOpen ? (
          <X className="w-8 h-8 relative z-10" />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
             <MessageSquare className="w-8 h-8 mb-0.5" />
             <span className="text-[7px] font-bold uppercase tracking-[0.3em] opacity-40">Direct</span>
          </div>
        )}
      </button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 0px; }
        .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
