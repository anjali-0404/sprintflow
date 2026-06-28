import React from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { motion } from 'framer-motion';
import { hoverLift, staggerContainer } from '@/animations/variants';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Heart, Lightbulb, Shield, Zap, Users, Globe } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We push boundaries and challenge assumptions to build tools that truly empower founders.' },
  { icon: Heart, title: 'Customer Obsession', desc: 'Every feature, every decision starts with "How does this help our customers ship faster?"' },
  { icon: Shield, title: 'Trust & Transparency', desc: 'Your data is sacred. We build with enterprise-grade security and radical transparency.' },
  { icon: Zap, title: 'Speed Matters', desc: 'We ship fast, iterate faster, and believe that momentum is the most valuable startup asset.' },
  { icon: Users, title: 'Team-First Culture', desc: 'Great products come from great teams. We invest in our people and celebrate diverse perspectives.' },
  { icon: Globe, title: 'Global Impact', desc: 'We are building for founders everywhere — from Silicon Valley garages to Lagos tech hubs.' },
];

const team = [
  { name: 'Alex Rivera', role: 'Co-Founder & CEO', initials: 'AR', color: '#dbeafe' },
  { name: 'Sara Kim', role: 'Co-Founder & CTO', initials: 'SK', color: '#d1fae5' },
  { name: 'Marcus Reid', role: 'VP Product', initials: 'MR', color: '#fce7f3' },
  { name: 'Priya Lal', role: 'Head of Engineering', initials: 'PL', color: '#e0e7ff' },
  { name: 'David Chen', role: 'Head of Design', initials: 'DC', color: '#ffedd5' },
  { name: 'Emma Watson', role: 'Head of Marketing', initials: 'EW', color: '#cffafe' },
];

export function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              About Us
            </div>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Building the OS for{' '}
              <span className="text-accent">ambitious startups</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[560px] text-[17px] leading-relaxed text-text2">
              We started SprintFlow AI because we lived the chaos ourselves. As repeat founders, we knew there had to be a better way to run a startup. So we built one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bg2 py-24 border-t border-b border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px]">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Our Story</div>
              <h2 className="mb-8 text-[clamp(28px,3.5vw,38px)] font-bold tracking-tight">From frustrated founders to tool builders</h2>
              <div className="space-y-6 text-[15px] leading-relaxed text-text2">
                <p>In 2024, our founding team was running a Series A startup with 15 people. We were using 8 different tools — Notion for docs, Jira for tasks, Amplitude for analytics, Slack for comms, Google Sheets for financials, and three more we cannot even remember now.</p>
                <p>Every Monday, we spent 2 hours just aggregating data from different tools to understand where we stood. Every investor update took a full day. Every strategic decision felt like guesswork because data lived in silos.</p>
                <p>We asked ourselves: <strong className="text-text">"What if one platform could handle strategy, execution, analytics, and AI insights — all in one place?"</strong></p>
                <p>That question became SprintFlow AI. Today, over 3,000 founding teams use our platform to turn startup chaos into predictable growth.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Our Values</div>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">What drives us</h2>
            </div>
            <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {values.map((v, i) => (
                <motion.div key={i} variants={hoverLift} whileHover="whileHover" className="rounded-card-lg border border-border bg-bg2 p-7 transition-shadow hover:shadow-elevated">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-text2">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bg2 py-24 border-t border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Our Team</div>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">Meet the people behind SprintFlow</h2>
            </div>
            <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-6 md:grid-cols-3">
              {team.map((t, i) => (
                <div key={i} className="rounded-card-lg border border-border bg-bg p-6 text-center transition-shadow hover:shadow-elevated">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold" style={{ backgroundColor: t.color }}>
                    {t.initials}
                  </div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="mt-1 text-sm text-text2">{t.role}</div>
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
            <div className="mx-auto max-w-[600px] rounded-[24px] bg-accent p-12 text-white">
              <h2 className="mb-4 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">Join our mission</h2>
              <p className="mx-auto mb-8 max-w-[420px] text-white/80">We are always looking for talented people who want to help founders build the future.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact"><Button size="lg" className="bg-white text-accent hover:bg-gray-100">Get in touch</Button></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
