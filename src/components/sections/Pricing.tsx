import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { Button } from '../ui/Button';

export function Pricing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">Simple, predictable pricing</h2>
            <p className="mx-auto max-w-md text-base text-text2">Start for free. Upgrade when your team grows and you need more power.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
            {/* Starter */}
            <div className="rounded-card-lg border border-border bg-bg2 p-8">
              <h3 className="text-lg font-semibold">Starter</h3>
              <div className="my-4 text-sm text-text2">Perfect for founders just getting started.</div>
              <div className="mb-6 text-4xl font-bold tracking-tight">$0<span className="text-lg font-normal text-text3">/mo</span></div>
              <Button className="mb-6 w-full h-10 bg-bg hover:bg-border text-text border border-border" variant="outline">Get started</Button>
              <div className="space-y-3 text-[13px] text-text2">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Up to 3 projects
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Basic analytics
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> 5 AI requests/month
                </div>
              </div>
            </div>
            
            {/* Growth */}
            <div className="relative rounded-card-lg border-2 border-accent bg-bg p-8 shadow-elevated">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">Most Popular</div>
              <h3 className="text-lg font-semibold">Growth</h3>
              <div className="my-4 text-sm text-text2">For growing startups building momentum.</div>
              <div className="mb-6 text-4xl font-bold tracking-tight">$49<span className="text-lg font-normal text-text3">/mo</span></div>
              <Button className="mb-6 w-full h-10">Start free trial</Button>
              <div className="space-y-3 text-[13px] text-text2">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Unlimited projects
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Full analytics suite
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> 500 AI requests/month
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> All AI modules
                </div>
              </div>
            </div>
            
            {/* Scale */}
            <div className="rounded-card-lg border border-border bg-bg2 p-8">
              <h3 className="text-lg font-semibold">Scale</h3>
              <div className="my-4 text-sm text-text2">For teams that need advanced controls.</div>
              <div className="mb-6 text-4xl font-bold tracking-tight">$149<span className="text-lg font-normal text-text3">/mo</span></div>
              <Button className="mb-6 w-full h-10 bg-bg hover:bg-border text-text border border-border" variant="outline">Contact sales</Button>
              <div className="space-y-3 text-[13px] text-text2">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Everything in Growth
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Unlimited AI requests
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Custom integrations
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-7 7-3-3"/></svg> Success manager
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
