import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { PageTransition } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift, staggerContainer } from '@/animations/variants';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import {
  Zap, BarChart3, Users, Calendar, Brain, Shield,
  Target, Layers, GitBranch, LineChart, MessageSquare, Lightbulb
} from 'lucide-react';

const featureCategories = [
  {
    category: 'Project Management',
    icon: Layers,
    features: [
      {
        icon: GitBranch,
        title: 'Kanban & Sprint Boards',
        description: 'Visual project management with drag-and-drop sprints, velocity tracking, and automatic bottleneck detection across all your projects.',
      },
      {
        icon: Target,
        title: 'OKR Tracking',
        description: 'Set company-wide objectives and key results. Track progress automatically with AI-powered insights that keep teams aligned.',
      },
      {
        icon: Calendar,
        title: 'Timeline & Roadmap',
        description: 'Interactive Gantt-style roadmaps with dependency mapping, milestone tracking, and automatic rescheduling suggestions.',
      },
    ],
  },
  {
    category: 'AI Intelligence',
    icon: Brain,
    features: [
      {
        icon: Lightbulb,
        title: 'AI Strategy Generator',
        description: 'Describe your startup in plain language. Get a full strategic plan — OKRs, roadmap, competitor analysis, and growth playbook — in seconds.',
      },
      {
        icon: MessageSquare,
        title: 'Meeting Intelligence',
        description: 'AI-generated summaries, action items, and follow-ups from every meeting. Never miss a decision or action item again.',
      },
      {
        icon: Zap,
        title: 'Smart Automation',
        description: 'Automate repetitive workflows with AI. From status updates to sprint planning, let AI handle the operational overhead.',
      },
    ],
  },
  {
    category: 'Analytics & Growth',
    icon: BarChart3,
    features: [
      {
        icon: LineChart,
        title: 'Revenue Analytics',
        description: 'Track MRR, ARR, churn, LTV, and growth in real time. Beautiful charts designed specifically for startup founders and investors.',
      },
      {
        icon: Users,
        title: 'Team Performance',
        description: 'Velocity tracking, capacity planning, and contribution analytics. Understand how your team ships and where to invest.',
      },
      {
        icon: Shield,
        title: 'Investor Reports',
        description: 'One-click investor updates with the exact metrics VCs want to see. Save hours every month on reporting and board prep.',
      },
    ],
  },
];

export function FeaturesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              <Zap size={12} />
              Everything you need
            </div>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Features built for{' '}
              <span className="text-accent">ambitious teams</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text2">
              From strategy to execution, SprintFlow AI handles the operational
              complexity so you can focus on building what matters.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/signup">
                <Button size="lg" className="h-12 px-6 text-[15px]">
                  Start free trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="h-12 px-6 text-[15px]">
                  View pricing
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((cat, catIdx) => (
        <section
          key={cat.category}
          className={`py-24 ${catIdx % 2 === 1 ? 'bg-bg2' : 'bg-bg'}`}
        >
          <div className="container mx-auto px-8">
            <ScrollReveal>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <cat.icon size={14} />
                {cat.category}
              </div>
              <h2 className="mb-14 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.12] tracking-tight">
                {cat.category}
              </h2>

              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {cat.features.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={hoverLift}
                    whileHover="whileHover"
                    className="group rounded-card-lg border border-border bg-bg p-8 transition-shadow hover:shadow-elevated"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
                      <f.icon size={22} className="text-accent" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-text2">
                      {f.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-[600px] rounded-[24px] bg-accent p-12 text-white">
              <h2 className="mb-4 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
                Ready to explore all features?
              </h2>
              <p className="mx-auto mb-8 max-w-[420px] text-white/80">
                Start your 14-day free trial and experience the full power of SprintFlow AI.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
                  Start free trial
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
