"use client";

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Motion';

interface FaqItem {
  q: string;
  a: string;
  link?: string;
  linkText?: string;
}

interface FaqSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FaqItem[];
  theme?: 'light' | 'dark' | 'white';
}

function renderAnswer(text: string, isLight: boolean) {
  const segments = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return segments.map((segment, i) => {
    const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      const isExternal = href.startsWith('http');
      return (
        <a
          key={i}
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`underline underline-offset-2 decoration-current/40 hover:decoration-current transition-all ${isLight ? 'text-black/75' : 'text-white/75'}`}
        >
          {label}
        </a>
      );
    }
    return <React.Fragment key={i}>{segment}</React.Fragment>;
  });
}

export default function FaqSection({
  id = 'faq',
  eyebrow = '(FAQ)',
  title,
  subtitle,
  items = [],
  theme = 'light'
}: FaqSectionProps) {
  if (!items || items.length === 0) return null;

  const isLight = theme === 'light' || theme === 'white';

  // Theme-specific CSS classes
  const sectionBg = theme === 'white' ? 'bg-white text-black' : (isLight ? 'bg-[#F8F8F6] text-black' : 'bg-[#090C11] text-white');
  const borderCol = isLight ? 'border-black/10' : 'border-white/10';
  const borderCardCol = isLight ? 'border-black/5 bg-white' : 'border-white/5 bg-white/[0.02]';
  const textMuted = isLight ? 'text-black/40' : 'text-white/40';
  const textMutedDesc = isLight ? 'text-black/60' : 'text-white/60';
  const textMutedContent = isLight ? 'text-black/50' : 'text-white/50';
  const textPrimary = isLight ? 'text-black' : 'text-white';
  const textAccent = isLight ? 'group-open:text-brand-accent' : 'group-open:text-brand-accent';
  const starLineColor = isLight ? 'black' : '#4FC3D0';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <section className={`relative z-10 py-24 md:py-32 overflow-hidden transition-colors duration-300 ${sectionBg}`} id={id}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Subtle Grain Background in dark mode */}
      {!isLight && (
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      )}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* FAQ Header Bar */}
        <div className={`flex justify-between items-center border-b pb-4 mb-12 ${borderCol}`}>
          <span className="text-[10px] md:text-[11px] font-dm-mono font-bold uppercase tracking-[0.3em] opacity-80">
            {eyebrow}
          </span>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] ${isLight ? 'border-black/10 text-black/60' : 'border-white/10 text-white/60'}`}>
            {items.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Title and Subtitle Block */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <div className="lg:w-1/2">
            <h2 className="font-absans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none">
              {title}
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 pt-2">
              <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(16)].map((_, i) => (
                  <line 
                    key={i} 
                    x1="30" y1="30" 
                    x2="30" y2="0" 
                    stroke={starLineColor} 
                    strokeWidth="2.5" 
                    transform={`rotate(${i * 22.5} 30 30)`} 
                  />
                ))}
              </svg>
            </div>
            {subtitle && (
              <p className="font-archia text-sm md:text-base leading-relaxed max-w-xl opacity-80 font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Cards Grid (First 3 items shown as cards) */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((faq, i) => {
            const isCard = i < 3;
            const isMobileCard = i < 1;

            return (
              <StaggerItem 
                key={i} 
                className={`p-8 md:p-12 border rounded-[2rem] flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 ${borderCardCol} ${
                  isCard ? 'md:flex' : 'md:hidden'
                } ${
                  isMobileCard ? 'flex' : 'hidden'
                }`}
              >
                <span className="font-goku text-6xl md:text-7xl font-bold mb-12 block opacity-20">
                  {(i + 1).toString().padStart(2, '0')}.
                </span>
                <h3 className="font-absans text-xl md:text-2xl font-bold mb-6 leading-tight">
                  {faq.q}
                </h3>
                <p className="font-archia text-sm md:text-base leading-relaxed opacity-60 font-medium flex-1">
                  {renderAnswer(faq.a, isLight)}
                </p>
                {faq.link && (
                  <a
                    href={faq.link}
                    {...(faq.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`mt-6 inline-flex items-center gap-2 text-[11px] font-dm-mono font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${isLight ? 'opacity-40 text-black' : 'opacity-40 text-white'}`}
                  >
                    {faq.linkText ?? 'Learn more'} →
                  </a>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Remaining FAQs Accordion */}
        {items.length > 3 && (
          <div className={`space-y-0 border-t ${borderCol}`}>
            {items.map((faq, i) => {
              const isAccordionDesktop = i >= 3;
              const isAccordionMobile = i >= 1;

              return (
                <details 
                  key={i} 
                  className={`group border-b overflow-hidden transition-all duration-300 ${borderCol} ${
                    isAccordionDesktop ? 'md:block' : 'md:hidden'
                  } ${
                    isAccordionMobile ? 'block' : 'hidden'
                  }`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-8 outline-none">
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-dm-mono font-bold uppercase tracking-widest opacity-30 flex-shrink-0">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="font-absans text-lg md:text-xl font-bold transition-colors duration-300 group-hover:opacity-75">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-open:rotate-45 ${isLight ? 'border-black/10 text-black/40' : 'border-white/10 text-white/40'}`}>
                      <span className="text-2xl leading-none font-light">+</span>
                    </div>
                  </summary>
                  <div className="pb-10 pl-16">
                    <p className="font-archia text-sm md:text-base leading-relaxed opacity-65 max-w-3xl font-medium">
                      {renderAnswer(faq.a, isLight)}
                    </p>
                    {faq.link && (
                      <a
                        href={faq.link}
                        {...(faq.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`mt-4 inline-flex items-center gap-2 text-[11px] font-dm-mono font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${isLight ? 'opacity-40 text-black' : 'opacity-40 text-white'}`}
                      >
                        {faq.linkText ?? 'Learn more'} →
                      </a>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
