import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { testimonials } from '@/data/mock';

export function Testimonials() {
  return (
    <section className="bg-bg py-24 border-t border-border border-b">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">Loved by founders</h2>
          </div>
          
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid rounded-card border border-border bg-bg2 p-6 shadow-sm">
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
  );
}
