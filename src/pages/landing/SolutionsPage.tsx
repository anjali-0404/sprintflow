import React from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift, staggerContainer } from '@/animations/variants';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Building2, Briefcase, ArrowRight, Check } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    stage: 'Pre-Seed & Seed',
    title: 'Early Stage Startups',
    description: 'Validate your idea, build your first roadmap, and get investor-ready — all with AI assistance.',
    color: '#e8f5ee',
    features: [
      'AI-generated business strategy & OKRs',
      'Lean canvas and roadmap builder',
      'Investor update automation',
      'Up to 3 team members included',
    ],
    cta: 'Start free',
  },
  {
    icon: TrendingUp,
    stage: 'Series A & Beyond',
    title: 'Growth Stage',
    description: 'Scale your operations, track revenue metrics, and keep your growing team aligned on what matters.',
    color: '#dbeafe',
    popular: true,
    features: [
      'Revenue analytics (MRR, ARR, churn)',
      'Sprint velocity & team performance',
      'Meeting intelligence & action items',
      'Advanced integrations (Slack, GitHub, Jira)',
    ],
    cta: 'Start free trial',
  },
  {
    icon: Building2,
    stage: 'Series B+',
    title: 'Enterprise',
    description: 'Enterprise-grade security, custom integrations, and dedicated support for larger organizations.',
    color: '#fce7f3',
    features: [
      'SSO & advanced access controls',
      'Custom API integrations',
      'Dedicated success manager',
      'SLA & priority support',
    ],
    cta: 'Contact sales',
  },
  {
    icon: Briefcase,
    stage: 'Service Companies',
    title: 'Agencies & Consultancies',
    description: 'Manage multiple client projects, track billable hours, and deliver reports your clients will love.',
    color: '#ffedd5',
    features: [
      'Multi-workspace management',
      'Client-facing dashboards',
      'Automated progress reports',
      'Resource allocation & capacity planning',
    ],
    cta: 'Learn more',
  },
];

export function SolutionsPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              Solutions
            </div>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Built for every stage of{' '}
              <span className="text-accent">your journey</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text2">
              Whether you are validating an idea or scaling to Series C, SprintFlow AI adapts to your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                variants={hoverLift}
                whileHover="whileHover"
                className={`relative rounded-card-lg border p-8 transition-shadow hover:shadow-elevated ${
                  s.popular
                    ? 'border-2 border-accent shadow-elevated'
                    : 'border-border bg-bg'
                }`}
              >
                {s.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                )}

                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: s.color }}
                >
                  <s.icon size={22} className="text-accent" />
                </div>

                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  {s.stage}
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-text2">
                  {s.description}
                </p>

                <div className="mb-8 space-y-3">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2.5 text-sm text-text2">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to={s.cta === 'Contact sales' ? '/contact' : '/signup'}>
                  <Button
                    variant={s.popular ? 'default' : 'outline'}
                    className="w-full"
                  >
                    {s.cta}
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: '3,000+', label: 'Founding Teams' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '2x', label: 'Faster Shipping' },
              { value: '$500M+', label: 'Revenue Tracked' },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{m.value}</div>
                <div className="mt-1 text-sm text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-text2">
              Talk to our team and we will help you find the perfect setup for your stage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
                <Button size="lg">Talk to us</Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View pricing
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
