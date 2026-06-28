import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-[600px] rounded-[24px] bg-accent p-12 text-white">
            <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">Ready to ship faster?</h2>
            <p className="mx-auto mb-8 max-w-[420px] text-accent-light/90">
              Join 3,000+ founders who use SprintFlow AI to turn startup chaos into predictable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100">Start free trial</Button>
              <Button size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20" variant="outline">Contact sales</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
