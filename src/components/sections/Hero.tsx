import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
            Now with AI Strategy Generator
          </div>
          
          <h1 className="mx-auto mb-5 max-w-[760px] text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-tight text-text">
            Turn Startup Chaos Into<br />
            <span className="text-accent">Predictable Growth</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-[480px] text-[17px] leading-relaxed text-text2">
            SprintFlow AI is the operating system for ambitious startups. Strategy, execution, roadmaps, and AI insights — in one beautiful workspace.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-12 px-6 text-[15px]">Start free — no credit card</Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-[15px]">Watch demo ▶</Button>
          </div>
          
          <div className="mt-14 text-[13px] font-medium tracking-wide uppercase text-text3">
            Trusted by 3,000+ founding teams
          </div>
          
          <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
            {['Arcadia Labs', 'Nomad Studio', 'Veridian', 'Crux Health', 'Driftwood'].map((brand) => (
              <div key={brand} className="rounded-md border border-border bg-bg2 px-4 py-1.5 text-[13px] font-medium text-text3">
                {brand}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
