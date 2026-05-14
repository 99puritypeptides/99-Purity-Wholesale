'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  faqs: FAQItem[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  // Generate FAQ Schema JSON-LD for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="mt-20 border-t border-white/5 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <h2 className="text-3xl font-rajdhani font-bold text-white mb-8 tracking-tight">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
            >
              <span className="font-bold text-white text-lg font-rajdhani tracking-wide">
                {faq.question}
              </span>
              <div className={`p-2 rounded-lg bg-white/5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-accent' : 'text-gray-500'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="h-px w-full bg-gradient-to-r from-brand-accent/20 to-transparent mb-6"></div>
              <p className="text-gray-400 font-dm-sans leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
