import React, { useState } from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift, staggerContainer } from '@/animations/variants';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/mock';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const allCategories = ['All', ...Array.from(new Set(blogPosts.flatMap((p) => p.categories)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.categories.includes(activeCategory));

  return (
    <PageTransition>
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              Insights &amp; Resources
            </div>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Insights for ambitious <span className="text-accent">builders</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text2">
              Strategies, frameworks, and guides from the SprintFlow AI team and our community of founders.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-bg2 text-text2 hover:bg-border hover:text-text border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filtered.map((post) => (
              <motion.div key={post.slug} variants={hoverLift} whileHover="whileHover">
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-card-lg border border-border bg-bg transition-shadow hover:shadow-elevated"
                >
                  <div className="h-48 bg-gradient-to-br from-accent/10 via-beige to-bg2 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-xl font-bold text-accent">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.map((c) => (
                        <span key={c} className="rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-accent">{c}</span>
                      ))}
                    </div>
                    <h3 className="mb-2 text-lg font-bold tracking-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-text2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-text3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="py-20 text-center text-text2">No posts found in this category.</div>
          )}
        </div>
      </section>

      <section className="bg-bg2 py-24 border-t border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-[500px] text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Get insights delivered</h2>
              <p className="mb-6 text-sm text-text2">Subscribe to our newsletter for the latest startup strategies and product updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="you@company.com" className="flex-1 rounded-btn border border-border bg-bg px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                <button className="rounded-btn bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-mid transition-colors">Subscribe</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
