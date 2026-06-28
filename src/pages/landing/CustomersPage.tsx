import React from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift, staggerContainer } from '@/animations/variants';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { caseStudies, testimonials } from '@/data/mock';
import { ArrowRight, Quote } from 'lucide-react';

export function CustomersPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              Case Studies
            </div>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Trusted by teams building the{' '}
              <span className="text-accent">future</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text2">
              See how ambitious startups use SprintFlow AI to move faster, ship more, and grow smarter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-accent py-14 mb-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: '3,000+', label: 'Teams using SprintFlow' },
              { value: '300%', label: 'Average growth increase' },
              { value: '15h/wk', label: 'Time saved per team' },
              { value: '4.9/5', label: 'Customer rating' },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{m.value}</div>
                <div className="mt-1 text-sm text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              Featured Stories
            </h2>
            <h3 className="mb-14 text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">
              Customer success stories
            </h3>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {caseStudies.map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  variants={hoverLift}
                  whileHover="whileHover"
                  className="group overflow-hidden rounded-card-lg border border-border bg-bg transition-shadow hover:shadow-elevated"
                >
                  {/* Decorative header */}
                  <div className="h-48 bg-gradient-to-br from-accent/10 via-accent/5 to-beige flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-2xl font-bold text-accent">
                      {cs.company.charAt(0)}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                      {cs.company}
                    </div>
                    <h4 className="mb-3 text-lg font-bold tracking-tight">{cs.title}</h4>
                    <p className="mb-5 text-sm leading-relaxed text-text2">{cs.description}</p>

                    {/* Metrics */}
                    <div className="mb-5 flex gap-6">
                      {cs.metrics.map((m, mi) => (
                        <div key={mi}>
                          <div className="text-xl font-bold text-accent">{m.value}</div>
                          <div className="text-xs text-text3">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/customers/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      Read full story
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-bg2 py-24 border-t border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">
                What founders are saying
              </h2>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="break-inside-avoid rounded-card border border-border bg-bg p-6 shadow-sm">
                  <Quote size={20} className="mb-3 text-accent/30" />
                  <p className="mb-5 text-[15px] leading-relaxed text-text">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-text"
                      style={{ backgroundColor: t.author.color }}
                    >
                      {t.author.avatarInitials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-text">{t.author.name}</div>
                      <div className="text-[12px] text-text3">{t.author.role}, {t.author.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">
              Join these successful teams
            </h2>
            <p className="mx-auto mb-8 max-w-md text-text2">
              Start your free trial today and see why 3,000+ teams trust SprintFlow AI.
            </p>
            <Link to="/signup">
              <Button size="lg">Start free trial</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
