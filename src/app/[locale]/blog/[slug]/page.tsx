import { getPostBySlug } from '@/utils/mdx';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck, Beaker, Award } from 'lucide-react';
import { notFound } from 'next/navigation';
import BlogFAQ from '@/components/blog/BlogFAQ';
import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/shared/Motion';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

// Builds a descriptive alt string from an image filename, e.g. "/product-images/semaglutide-20mg.jpg" -> "Semaglutide 20mg"
function humanizeImageAlt(path: string): string {
  const filename = path.split('/').pop() || path;
  const withoutExt = filename.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  return withoutExt
    .split('-')
    .map(word => (/^\d/.test(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

// Dynamic helper to serve contextual images and compounds based on post content keywords
function getRelatedImages(slug: string, title: string): { images: string[], compounds: { name: string, slug: string, img: string, desc: string }[] } {
  const normSlug = slug.toLowerCase();
  
  const compounds: { name: string, slug: string, img: string, desc: string }[] = [];
  const images: string[] = [];

  if (normSlug.includes('verify') || normSlug.includes('supplier')) {
    compounds.push(
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: '≥99% purity verified HPLC batch.' },
      { name: 'Semaglutide 5mg', slug: 'semaglutide', img: '/product-images/SEMAGLUTIDE 5mg-2.webp', desc: 'LC-MS identity confirmed lot.' },
      { name: 'Tirzepatide 10mg', slug: 'tirzepatide', img: '/product-images/TIRZEPATIDE 10mg-3.webp', desc: 'Batch-specific COA verified.' }
    );
    images.push(
      '/images/peptide-supplier-verification-coa-audit.jpg',
      '/images/peptide-supplier-batch-traceability-qc.jpg'
    );
  } else if (normSlug.includes('spps') || normSlug.includes('lpps') || normSlug.includes('synthesis')) {
    compounds.push(
      { name: 'Tirzepatide 10mg', slug: 'tirzepatide', img: '/product-images/TIRZEPATIDE 10mg-3.webp', desc: 'Hybrid synthesis benchmark compound.' },
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: 'Pentadecapeptide research standard.' },
      { name: 'Semaglutide 5mg', slug: 'semaglutide', img: '/product-images/SEMAGLUTIDE 5mg-2.webp', desc: 'Continuous SPPS benchmark peptide.' }
    );
    images.push(
      '/images/spps-automated-synthesizer-lab.jpg',
      '/images/hybrid-peptide-synthesis-purification.jpg'
    );
  } else if (normSlug.includes('fluorescence') || normSlug.includes('chemiluminescence') || normSlug.includes('bioluminescence')) {
    compounds.push(
      { name: 'Semaglutide 5mg', slug: 'semaglutide', img: '/product-images/SEMAGLUTIDE 5mg-2.webp', desc: 'Selective GLP-1 receptor agonist.' },
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: 'Pentadecapeptide for tissue recovery.' },
      { name: 'NAD+ 500mg', slug: 'nad', img: '/product-images/nad-plus-500mg-1.webp', desc: 'Nicotinamide Adenine Dinucleotide.' }
    );
    images.push(
      '/images/fluorescence-spectrofluorometer-lab.jpg',
      '/images/luminescence-assay-plate.jpg'
    );
  } else if (normSlug.includes('glp') || normSlug.includes('weight') || normSlug.includes('tirzepatide') || normSlug.includes('semaglutide')) {
    compounds.push(
      { name: 'Tirzepatide 10mg', slug: 'tirzepatide', img: '/product-images/TIRZEPATIDE 10mg-3.webp', desc: 'Dual GIP/GLP-1 receptor agonist lot.' },
      { name: 'Semaglutide 5mg', slug: 'semaglutide', img: '/product-images/SEMAGLUTIDE 5mg-2.webp', desc: 'Selective GLP-1 receptor agonist.' },
      { name: 'Retatrutide 10mg', slug: 'retatrutide', img: '/product-images/RETATRUTIDE 10mg-6.webp', desc: 'Triple agonist research compound.' }
    );
    images.push(
      '/product-images/SEMAGLUTIDE 5mg-2.webp',
      '/product-images/TIRZEPATIDE 10mg-3.webp',
      '/lab_quality_bg_1778896760027.png',
      '/product-images/SEMAGLUTIDE 5mg-2.webp'
    );
  } else if (normSlug.includes('bpc') || normSlug.includes('tb500') || normSlug.includes('recovery')) {
    compounds.push(
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: 'Pentadecapeptide for tissue recovery.' },
      { name: 'BPC-157 + TB-500', slug: 'bpc-5mg-tb-5mg', img: '/product-images/BPC-157 TB-500 MIX 5mg 5mg-2.webp', desc: 'Synergistic cellular recovery blend.' },
      { name: 'TB-500 5mg', slug: 'tb-500', img: '/product-images/TB-500  5mg-2.webp', desc: 'Synthetic fraction of thymosin beta-4.' }
    );
    images.push(
      '/product-images/BPC-157 5mg-5.webp',
      '/product-images/BPC-157 TB-500 MIX 5mg 5mg-2.webp',
      '/images/hero-lab.png',
      '/product-images/TB-500  5mg-2.webp'
    );
  } else if (normSlug.includes('nad') || normSlug.includes('longevity') || normSlug.includes('aging')) {
    compounds.push(
      { name: 'NAD+ 500mg', slug: 'nad', img: '/product-images/nad-plus-500mg-1.webp', desc: 'Nicotinamide Adenine Dinucleotide.' },
      { name: '5-Amino-1MQ 50mg', slug: '5-amino-1mq', img: '/product-images/5-AMINO-1MQ 50mg.webp', desc: 'Targeted NNMT cellular enzyme inhibitor.' },
      { name: 'Epithalon 10mg', slug: 'epithalon', img: '/product-images/EPITHALON 10mg.webp', desc: 'Telomerase activator research peptide.' }
    );
    images.push(
      '/product-images/nad-plus-500mg-1.webp',
      '/product-images/5-AMINO-1MQ 50mg.webp',
      '/images/hero-lab-bg.png',
      '/product-images/EPITHALON 10mg.webp'
    );
  } else if (normSlug.includes('private-label') || normSlug.includes('start-peptide') || normSlug.includes('launch') || normSlug.includes('business')) {
    compounds.push(
      { name: 'Custom Peptide Kit', slug: 'klow-blend', img: '/product-images/klow-custom-peptide-kit.jpg', desc: 'Private label kit customization.' },
      { name: 'Hair, Skin & Nail Blend', slug: 'glow-blend', img: '/product-images/glow-hair-skin-nail-blend.jpg', desc: 'GHK-Cu dynamic skin formulation.' },
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: 'High-demand clinic starter stock.' }
    );
    images.push(
      '/product-images/glow-hair-skin-nail-blend.jpg',
      '/product-images/mic-lipo-c-b12-10mg.webp',
      '/lab_quality_bg_1778896760027.png',
      '/product-images/SEMAGLUTIDE 5mg-2.webp'
    );
  } else {
    compounds.push(
      { name: 'Semaglutide 5mg', slug: 'semaglutide', img: '/product-images/SEMAGLUTIDE 5mg-2.webp', desc: 'Selective GLP-1 receptor agonist.' },
      { name: 'BPC-157 5mg', slug: 'bpc-157', img: '/product-images/BPC-157 5mg-5.webp', desc: 'Pentadecapeptide for tissue recovery.' },
      { name: 'NAD+ 500mg', slug: 'nad', img: '/product-images/nad-plus-500mg-1.webp', desc: 'Nicotinamide Adenine Dinucleotide.' }
    );
    images.push(
      '/images/vial_kit_luxury.png',
      '/images/chromatography_lab.png',
      '/images/analytical_verification.png',
      '/product-images/bpc-157-tb-500-10-10mg.jpg'
    );
  }

  return { images, compounds };
}

// Custom components to style Markdown text beautifully in dark theme
const mdxComponents = {
  h1: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-bold font-absans text-white uppercase tracking-wider mt-12 mb-6 border-l-2 border-brand-accent pl-4 font-normal" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-bold font-absans text-white uppercase tracking-wider mt-12 mb-6 border-l-2 border-brand-accent pl-4 font-normal" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-bold font-absans text-white uppercase tracking-wide mt-8 mb-4 font-normal" {...props} />
  ),
  p: (props: any) => (
    <div className="text-white/70 font-archia text-sm md:text-base leading-relaxed mb-6 font-medium" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-none space-y-3 mb-8 pl-0" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 space-y-3 mb-8 text-white/70 font-archia" {...props} />
  ),
  li: (props: any) => (
    <li className="flex items-start gap-3 text-white/70 font-archia text-sm md:text-base leading-relaxed font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-2.5"></span>
      <span {...props} />
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-brand-accent/40 bg-white/5 rounded-r-2xl p-6 my-8 font-archia italic text-white/80 text-sm md:text-base leading-relaxed pl-6" {...props} />
  ),
  a: (props: any) => (
    <a className="text-brand-accent hover:text-white transition-colors underline font-bold" {...props} />
  ),
  img: (props: any) => (
    <figure className="my-10 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl relative group max-w-4xl mx-auto aspect-[16/9] block">
      <img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt={props.alt || 'Research image'} {...props} />
      <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none block" />
    </figure>
  ),
  table: (props: any) => (
    <figure className="my-10 overflow-x-auto rounded-[1.8rem] border border-white/10 shadow-2xl bg-[#090C12] block">
      <table className="w-full text-left border-collapse text-xs md:text-sm text-white/80 font-archia" {...props} />
    </figure>
  ),
  thead: (props: any) => (
    <thead className="bg-white/5 border-b border-white/10 text-white font-absans uppercase tracking-wider text-[11px]" {...props} />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y divide-white/5" {...props} />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-white/[0.03] transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th className="px-5 py-4 font-bold text-brand-accent uppercase tracking-wider" {...props} />
  ),
  td: (props: any) => (
    <td className="px-5 py-4 align-top leading-relaxed text-white/70 font-medium" {...props} />
  ),
};

function generateBlogKeywords(title: string, slug: string) {
  const normSlug = slug.toLowerCase();
  const keywords = [
    title,
    'wholesale research peptides',
    'peptide synthesis',
    'laboratory compliance',
  ];

  if (normSlug.includes('spps') || normSlug.includes('lpps') || normSlug.includes('synthesis')) {
    keywords.push('SPPS peptide synthesis', 'LPPS solution phase', 'hybrid peptide synthesis', 'peptide manufacturing', 'solid phase peptide synthesis');
  } else if (normSlug.includes('verify') || normSlug.includes('supplier')) {
    keywords.push('verify peptide supplier', 'COA audit', 'HPLC purity test', 'LC-MS mass spec', 'RUO compliance');
  } else if (normSlug.includes('fluorescence') || normSlug.includes('luminescence')) {
    keywords.push('fluorescence spectroscopy', 'chemiluminescence assay', 'bioluminescence imaging', 'signal-to-noise ratio', 'spectrofluorometer');
  } else if (normSlug.includes('bpc')) {
    keywords.push('BPC-157 wholesale', 'BPC-157 supplier', 'tissue repair research', 'peptide recovery');
  } else if (normSlug.includes('glp') || normSlug.includes('semaglutide') || normSlug.includes('tirzepatide')) {
    keywords.push('GLP-1 wholesale', 'semaglutide research', 'tirzepatide supplier', 'metabolic peptides');
  } else if (normSlug.includes('nad')) {
    keywords.push('NAD+ wholesale', 'NAD+ longevity research', 'cellular health peptides');
  }

  return keywords;
}

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  try {
    const post = await getPostBySlug(params.slug, locale);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
    const url = `${baseUrl}/${params.locale === 'en' ? '' : params.locale + '/'}blog/${params.slug}`;
    const metaDescription = post.meta.description || post.meta.desc || post.meta.title;
    const ogUrlImage = `${baseUrl}/api/og?title=${encodeURIComponent(post.meta.title)}&desc=${encodeURIComponent(metaDescription)}&category=Clinical%20Research%20Blog`;
    const keywords = generateBlogKeywords(post.meta.title, params.slug);

    return {
      metadataBase: new URL(baseUrl),
      title: { absolute: post.meta.title },
      description: metaDescription,
      keywords: keywords,
      alternates: {
        canonical: url,
        languages: {
          'en-US': `${baseUrl}/blog/${params.slug}`,
          es: `${baseUrl}/es/blog/${params.slug}`,
          'x-default': `${baseUrl}/blog/${params.slug}`,
        },
      },
      openGraph: {
        title: post.meta.title,
        description: metaDescription,
        url: url,
        siteName: '99 Purity Wholesale',
        images: [
          {
            url: ogUrlImage,
            width: 1200,
            height: 630,
            alt: post.meta.title,
          },
        ],
        locale: params.locale,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.meta.title,
        description: metaDescription,
        images: [ogUrlImage],
      },
    };
  } catch (e) {
    return {};
  }
}

export default async function BlogPost({ params }: { params: { locale: string, slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });
  try {
    const post = await getPostBySlug(params.slug, params.locale);
    const { images, compounds } = getRelatedImages(params.slug, post.meta.title);
    const normSlug = params.slug.toLowerCase();
    const hasEmbeddedImages = normSlug.includes('fluorescence') || normSlug.includes('chemiluminescence') || normSlug.includes('bioluminescence');

    // Dynamic section splitting to inject multiple gorgeous related images between post sections
    const sections = post.content.split(/(?=## )/);

    return (
      <main className="min-h-screen bg-[#F8F8F6] text-black -mt-24 md:-mt-32">
        <ArticleSchema 
          title={post.meta.title}
          description={post.meta.desc || post.meta.title}
          image={images.length > 0 ? `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}${images[0]}` : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/og-image.png`}
          datePublished={post.meta.date}
          url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale === 'en' ? '' : params.locale + '/'}blog/${params.slug}`}
        />
        <BreadcrumbSchema items={[
          { name: 'Blog', item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale === 'en' ? '' : params.locale + '/'}blog` },
          { name: post.meta.title, item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com'}/${params.locale === 'en' ? '' : params.locale + '/'}blog/${params.slug}` }
        ]} />
        
        {/* Post Header - Elegant Light Off-White Linen Hero */}
        <section className="relative overflow-hidden pt-52 pb-20 md:pt-64 md:pb-28 border-b border-black/5 bg-[#F8F8F6]">
          {/* Light Noise Texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <FadeIn>
              {/* Back to Blog Link */}
              <Link 
                href="/blog" 
                className="inline-flex items-center text-black/50 hover:text-black transition-colors font-dm-mono text-[10px] font-bold uppercase tracking-widest mb-8"
              >
                <ArrowLeft className="w-3 h-3 mr-2" />
                {t('back')}
              </Link>
              
              {/* Post Metadata Date */}
              <time className="text-black/40 font-dm-mono text-[10px] font-bold uppercase tracking-widest mb-4 block">
                {new Date(post.meta.date).toLocaleDateString(params.locale === 'es' ? 'es-ES' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              {/* Dynamic Post Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-absans text-black uppercase tracking-tight leading-tight max-w-4xl">
                {post.meta.title}
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Post Dynamic 2-Column Content - Stealth Luxury Dark Section */}
        <section className="py-24 md:py-32 bg-[#05080C] text-white border-t border-white/5 relative overflow-hidden">
          {/* Dark Noise Texture */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Rich Styled Article Content (8 cols) */}
              <div className="lg:col-span-8">
                <FadeIn>
                  <article className="prose prose-invert prose-brand max-w-none text-white/80 font-archia leading-relaxed text-sm md:text-base space-y-12">
                    {sections.map((section, index) => {
                      const imageToShow = images.length === 2
                        ? (index === 0 ? images[0] : index === sections.length - 2 ? images[1] : null)
                        : (index < images.length ? images[index] : null);

                      return (
                        <div key={index} className="space-y-8">
                          <MDXRemote source={section} components={mdxComponents} />
                          
                          {!hasEmbeddedImages && imageToShow && (
                            <div className="my-14 relative overflow-hidden rounded-[2.5rem] h-[280px] md:h-[420px] border border-white/5 shadow-2xl group">
                              <Image 
                                src={imageToShow}
                                alt={`${humanizeImageAlt(imageToShow)} — Research Compound Reference Image`}
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                              <div className="absolute bottom-6 left-8 right-6 z-10">
                                <span className="text-[9px] font-bold font-dm-mono uppercase tracking-widest text-brand-accent mb-2 block">
                                  Analytical Reference {imageToShow === images[0] ? "Phase 01" : "Phase 02"}
                                </span>
                                <h4 className="text-lg font-bold font-absans text-white uppercase tracking-wider">
                                  {humanizeImageAlt(imageToShow)}
                                </h4>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </article>

                  {/* Dynamic Post FAQs (if present) */}
                  {post.meta.faqs && (
                    <div className="mt-16 border-t border-white/5 pt-12">
                      <BlogFAQ faqs={post.meta.faqs} />
                    </div>
                  )}

                  {/* High-End WhatsApp Contact CTA */}
                  <div className="mt-20 bg-white/5 border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl hover:border-white/10 transition-all">
                    <div>
                      <h3 className="text-2xl font-bold font-absans text-white mb-2 uppercase tracking-wide">
                        {t('ctaTitle')}
                      </h3>
                      <p className="text-white/60 font-archia font-medium text-xs leading-relaxed">
                        {t('ctaSubtitle')}
                      </p>
                    </div>
                    
                    <a 
                      href={`https://wa.me/18433307365?text=${encodeURIComponent(t('whatsapp'))}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-xl font-bold font-dm-sans text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t('whatsapp')}
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Sticky Scientific Sidebar & Gallery (4 cols) */}
              <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-8">
                <FadeIn delay={0.15}>
                  
                  {/* Specification Card */}
                  <div className="bg-[#090C12] border border-white/5 rounded-[2.2rem] p-8 shadow-2xl">
                    <div className="text-[10px] font-bold font-dm-mono uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Clinical Specifications
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                        <span className="text-white/40 text-xs font-archia">Lot Status</span>
                        <span className="text-white text-[9px] font-dm-sans font-bold uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full">cGMP Verified</span>
                      </div>
                      <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                        <span className="text-white/40 text-xs font-archia">Target Group</span>
                        <span className="text-white text-xs font-archia font-semibold">Clinics & Researchers</span>
                      </div>
                      <div className="flex justify-between items-center py-2.5">
                        <span className="text-white/40 text-xs font-archia">Lot Purity</span>
                        <span className="text-brand-accent text-xs font-dm-sans font-bold">≥99.0% Verified</span>
                      </div>
                    </div>
                  </div>

                </FadeIn>

                {compounds.length > 0 && (
                  <FadeIn delay={0.2}>
                    
                    {/* Dynamic Related Compounds Widget */}
                    <div className="bg-[#090C12] border border-white/5 rounded-[2.2rem] p-8 shadow-2xl">
                      <div className="text-[10px] font-bold font-dm-mono uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
                        <Beaker className="w-3.5 h-3.5" />
                        Related Compounds
                      </div>
                      <div className="space-y-3">
                        {compounds.map((comp, idx) => (
                          <Link 
                            key={idx} 
                            href={`/products/${comp.slug}`}
                            className="flex gap-4 items-center group/comp p-2.5 rounded-2xl hover:bg-white/[0.04] transition-all border border-transparent hover:border-white/10"
                          >
                            <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/5 flex-shrink-0 relative group-hover/comp:border-brand-accent/30 transition-all duration-300 shadow-md">
                              <Image 
                                src={comp.img} 
                                alt={comp.name} 
                                fill
                                sizes="56px"
                                className="object-cover group-hover/comp:scale-105 transition-transform duration-300" 
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-absans font-bold text-xs uppercase tracking-wider group-hover/comp:text-brand-accent transition-colors flex items-center justify-between">
                                <span>{comp.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover/comp:text-brand-accent group-hover/comp:translate-x-1 transition-all opacity-0 group-hover/comp:opacity-100" />
                              </h4>
                              <p className="text-white/40 font-archia text-[10px] leading-relaxed mt-0.5 truncate">{comp.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </FadeIn>
                )}

                {!hasEmbeddedImages && images.length > 2 && (
                  <FadeIn delay={0.25}>
                    
                    {/* Synthesis Photo Gallery */}
                    <div className="bg-[#090C12] border border-white/5 rounded-[2.2rem] p-8 shadow-2xl">
                      <div className="text-[10px] font-bold font-dm-mono uppercase tracking-widest text-brand-accent mb-6 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5" />
                        Laboratory Insights
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {images.slice(1, 5).map((img, idx) => (
                          <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/5 relative group shadow-lg">
                            <Image 
                              src={img} 
                              alt={`${humanizeImageAlt(img)} — Laboratory Synthesis and Quality Verification`} 
                              fill
                              sizes="(max-width: 768px) 50vw, 200px"
                              className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>

                  </FadeIn>
                )}
              </aside>

            </div>
          </div>
        </section>

      </main>
    );
  } catch (e) {
    return notFound();
  }
}
