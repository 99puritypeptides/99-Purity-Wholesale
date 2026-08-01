'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { FadeIn } from '@/components/shared/Motion';
import { useLocale } from 'next-intl';

interface CompoundSpotlightProps {
  heading: string;
  intro: string;
}

const compoundsEn = [
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    desc: 'A highly potent GLP-1 receptor agonist utilized extensively in US metabolic and glycemic research. We provide scalable bulk supply with verified amino acid sequences to support advanced longitudinal studies.',
    tags: ['Metabolic', 'GLP-1'],
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    desc: 'The pioneering dual GIP/GLP-1 receptor agonist. Our USA-distributed Tirzepatide is synthesized to exacting purity standards, making it the premier choice for cutting-edge cellular receptor signaling research.',
    tags: ['Dual-Agonist', 'Research'],
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    desc: 'Body Protection Compound-157 is a staple in regenerative and tissue repair studies. We supply highly stable, research-grade BPC-157 to orthopedic and gastroenterology research institutions nationwide.',
    tags: ['Regenerative', 'Gastric'],
  },
  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    desc: 'The novel triple-agonist (GLP-1/GIP/GCG) representing the next frontier in metabolic modulation. Our Retatrutide enables American researchers to stay ahead of the curve in complex receptor interaction studies.',
    tags: ['Triple-Agonist', 'Metabolic'],
  },
];

const compoundsEs = [
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    desc: 'Un agonista del receptor GLP-1 de alta potencia ampliamente utilizado en la investigación metabólica y glucémica en EE. UU. Ofrecemos suministro a granel escalable con secuencias de aminoácidos verificadas para respaldar estudios longitudinales avanzados.',
    tags: ['Metabólico', 'GLP-1'],
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    desc: 'El innovador agonista dual de los receptores GIP/GLP-1. Nuestro Tirzepatide distribuido en EE. UU. se sintetiza bajo exigentes estándares de pureza, siendo la opción predilecta para la investigación de vanguardia en señalización de receptores celulares.',
    tags: ['Agonista Dual', 'Investigación'],
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    desc: 'El Body Protection Compound-157 es un pilar fundamental en estudios regenerativos y de reparación tisular. Suministramos BPC-157 de grado de investigación altamente estable a instituciones ortopédicas y de gastroenterología en todo el país.',
    tags: ['Regenerativo', 'Gástrico'],
  },
  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    desc: 'El novedoso triple agonista (GLP-1/GIP/GCG) que representa la nueva frontera en modulación metabólica. Nuestro Retatrutide permite a los investigadores mantenerse a la vanguardia en estudios complejos de interacción de receptores.',
    tags: ['Triple Agonista', 'Metabólico'],
  },
];

export default function CompoundSpotlight({ heading, intro }: CompoundSpotlightProps) {
  const locale = useLocale();
  const isEs = locale === 'es';
  const compounds = isEs ? compoundsEs : compoundsEn;

  return (
    <section id="popular-compounds" className="scroll-mt-36 bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
      <FadeIn>
        <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
          {heading}
        </h2>
        <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed mb-10">
          <p>{intro}</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {compounds.map((c) => (
          <Link
            key={c.slug}
            href={`/products/${c.slug}`}
            className="group block bg-[#F8F8F6] border border-black/5 p-8 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-absans font-bold uppercase tracking-tight group-hover:text-[#13a7b7] transition-colors">{c.name}</h3>
              <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:border-[#13a7b7]/30">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </div>
            <p className="font-archia text-sm leading-relaxed mb-6 group-hover:text-white/70">
              {c.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-dm-mono uppercase tracking-widest bg-black/5 px-3 py-1.5 rounded-full group-hover:bg-white/10 group-hover:text-white">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
