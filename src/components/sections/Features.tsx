import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift } from '@/animations/variants';

const featureList = [
  {
    title: 'AI-powered strategy generation',
    desc: 'Describe your startup in plain language. SprintFlow AI generates a full strategic plan — OKRs, roadmap, competitor analysis, and growth playbook — in seconds.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h14M10 3l7 7-7 7"/>
      </svg>
    ),
    wide: true
  },
  {
    title: 'Kanban & sprint boards',
    desc: 'Visual project management with drag-and-drop sprints, velocity tracking, and automatic bottleneck detection.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/>
      </svg>
    ),
    wide: false
  },
  {
    title: 'Revenue analytics',
    desc: 'Track MRR, ARR, churn, and growth in real time with beautiful charts designed for founders.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16.5h14M6.5 13v3.5M10 9v7.5M13.5 5.5v11"/>
      </svg>
    ),
    wide: false
  },
  {
    title: 'Meeting intelligence',
    desc: 'AI-generated summaries, action items, and follow-ups from every meeting — automatically.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7"/><path d="M10 6v4l2.5 2"/>
      </svg>
    ),
    wide: false
  },
  {
    title: 'Knowledge base',
    desc: 'Centralized documentation with AI search. Find anything across your entire startup knowledge base instantly.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h12M4 10h8M4 14h10"/>
      </svg>
    ),
    wide: false
  },
  {
    title: 'Team collaboration',
    desc: 'Comments, mentions, and real-time activity feeds keep every team member aligned without meetings.',
    icon: (
      <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-accent stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 12a7 7 0 10-12.42 4.42L3 18l1.58-1.58A7 7 0 0017 12z"/>
      </svg>
    ),
    wide: false
  }
];

export function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Features</div>
          <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.12] tracking-tight">
            Everything a startup needs<br />to move fast
          </h2>
          <p className="max-w-[520px] text-base leading-relaxed text-text2">
            From strategy to execution, SprintFlow AI handles the operational complexity so you can focus on building.
          </p>
          
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featureList.map((f, i) => (
              <motion.div
                key={i}
                whileHover="whileHover"
                variants={hoverLift}
                className={`rounded-card-lg border border-border bg-bg2 p-7 transition-shadow hover:shadow-elevated ${f.wide ? 'md:col-span-2' : ''}`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-light">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight">{f.title}</h3>
                <p className="text-sm leading-relaxed text-text2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
