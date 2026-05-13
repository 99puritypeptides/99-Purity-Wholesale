import { getAllPosts } from '@/utils/mdx';
import { Link } from '@/i18n/routing';
import { ArrowRight, BookOpen } from 'lucide-react';

export default async function BlogIndex({ params }: { params: { locale: string } }) {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text pt-24">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold mb-6 text-white tracking-tight">
            Industry Insights
          </h1>
          <p className="text-xl text-gray-400 font-dm-sans max-w-3xl mx-auto">
            Strategic guidance, quality assurance protocols, and market analysis for B2B peptide procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-[#0B0F15] border border-white/5 rounded-xl p-8 hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen className="w-24 h-24" />
                </div>
                
                <time className="text-brand-accent font-dm-mono text-sm mb-4 block">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                  {post.meta.title}
                </h2>
                <p className="text-gray-400 font-dm-sans mb-8 flex-grow">
                  {post.meta.description}
                </p>
                <div className="flex items-center text-brand-accent font-bold font-rajdhani uppercase tracking-wider text-sm mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
