import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition, ScrollReveal } from '@/utils/motion';
import { Button } from '@/components/ui/Button';
import { blogPosts } from '@/data/mock';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <PageTransition>
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Post not found</h1>
          <p className="text-text2 mb-6">The article you are looking for does not exist.</p>
          <Link to="/blog"><Button variant="outline"><ArrowLeft size={14} className="mr-2" /> Back to blog</Button></Link>
        </div>
      </PageTransition>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-[100] h-1 bg-accent transition-all" style={{ width: `${progress}%` }} />

      {/* Hero */}
      <section className="bg-bg2 py-20 border-b border-border">
        <div className="container mx-auto px-8">
          <div className="mx-auto max-w-[760px]">
            <Link to="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm text-text2 hover:text-accent transition-colors">
              <ArrowLeft size={14} /> Back to blog
            </Link>
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <span key={c} className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">{c}</span>
              ))}
            </div>
            <h1 className="mb-6 text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-text2">
              <span className="font-medium text-text">{post.author.name}</span>
              <span className="flex items-center gap-1"><Calendar size={14} />{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="mx-auto max-w-[760px]">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-text2 mb-6">{post.excerpt}</p>
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-text">The Changing Landscape</h2>
              <p className="text-[15px] leading-relaxed text-text2 mb-6">The startup ecosystem is evolving rapidly. What worked two years ago may not work today. Founders need to stay ahead of trends while maintaining focus on execution. This is where AI-powered tools like SprintFlow come in — providing real-time intelligence without the operational overhead.</p>
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-text">Key Takeaways</h2>
              <ul className="space-y-3 mb-6">
                {['Focus on metrics that matter: MRR, churn, and team velocity', 'Automate operational work to free up founder time', 'Use AI for strategic planning, not just task management', 'Build a culture of data-driven decision making'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-text2">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-text">Looking Forward</h2>
              <p className="text-[15px] leading-relaxed text-text2 mb-6">The future belongs to teams that can move fast while making smart decisions. AI is not replacing founders — it is augmenting their capabilities and giving them superpowers they never had before.</p>
              <div className="mt-10 rounded-card-lg border border-accent/20 bg-accent-light/30 p-8">
                <h3 className="mb-3 text-lg font-bold">Try SprintFlow AI</h3>
                <p className="mb-4 text-sm text-text2">Put these insights into practice with SprintFlow AI. Start your free trial today.</p>
                <Link to="/signup"><Button>Start free trial</Button></Link>
              </div>
            </article>

            {/* Share */}
            <div className="mt-10 flex items-center gap-3 border-t border-border pt-8">
              <Share2 size={16} className="text-text3" />
              <span className="text-sm text-text3">Share this article</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-bg2 py-20 border-t border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="mb-10 text-2xl font-bold tracking-tight">More articles</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-card-lg border border-border bg-bg p-6 hover:shadow-elevated transition-shadow">
                  <div className="mb-3 flex gap-2">{p.categories.map((c) => (<span key={c} className="rounded-full bg-accent-light px-2 py-0.5 text-[10px] font-semibold text-accent">{c}</span>))}</div>
                  <h3 className="mb-2 font-bold group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-sm text-text2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
