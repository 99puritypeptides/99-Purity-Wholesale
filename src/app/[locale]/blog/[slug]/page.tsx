import { getPostBySlug } from '@/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from '@/i18n/routing';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);

    return (
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text pt-24 pb-24">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-brand-accent hover:text-white transition-colors font-dm-mono text-sm mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <header className="mb-16">
            <time className="text-gray-400 font-dm-mono text-sm mb-6 block">
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-rajdhani font-bold text-white leading-tight mb-8">
              {post.meta.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-brand max-w-none">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="bg-[#0e131b] border border-brand-accent/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-rajdhani font-bold text-white mb-2">Ready to Upgrade Your Supply Chain?</h3>
                <p className="text-gray-400 font-dm-sans">Connect with our wholesale team for current pricing and COAs.</p>
              </div>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider inline-flex items-center whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  } catch (e) {
    return notFound();
  }
}
