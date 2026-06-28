import React from 'react';
import { ScrollReveal } from '@/utils/motion';
import { Button } from '../ui/Button';

export function AIModules() {
  return (
    <section className="bg-bg2 py-24">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">AI Modules</div>
              <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.12] tracking-tight">
                Your AI-powered<br />executive team
              </h2>
              <p className="mb-8 max-w-[420px] text-base leading-relaxed text-text2">
                Stop starting from scratch. SprintFlow AI provides 12+ specialized modules trained on top-tier startup frameworks.
              </p>
              
              <div className="flex flex-col space-y-2 border-l-2 border-border pl-5">
                <div className="cursor-pointer border-l-[3px] border-accent py-2 pl-4">
                  <div className="text-sm font-semibold text-text">Strategy Generator</div>
                  <div className="mt-1 text-[13px] text-text3">Full business strategy in seconds</div>
                </div>
                <div className="cursor-pointer py-2 pl-[19px] hover:border-l-[3px] hover:border-text3 hover:pl-4">
                  <div className="text-sm font-semibold text-text2 hover:text-text transition-colors">Roadmap Builder</div>
                </div>
                <div className="cursor-pointer py-2 pl-[19px] hover:border-l-[3px] hover:border-text3 hover:pl-4">
                  <div className="text-sm font-semibold text-text2 hover:text-text transition-colors">Competitor Intel</div>
                </div>
                <div className="cursor-pointer py-2 pl-[19px] hover:border-l-[3px] hover:border-text3 hover:pl-4">
                  <div className="text-sm font-semibold text-text2 hover:text-text transition-colors">Meeting Analyst</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-[20px] border border-border bg-bg p-6 shadow-elevated">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-accent-light">
                    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-accent stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l2.5 2"/></svg>
                  </div>
                  <div className="text-sm font-semibold">Strategy Generator</div>
                </div>
              </div>
              
              <div className="mb-4 space-y-4">
                <div className="rounded-lg bg-bg2 p-4 text-[13px] text-text2">
                  <span className="font-semibold text-text">Prompt:</span> We are a B2B SaaS building an AI-powered CRM for real estate agents. Generate a 6-month GTM strategy focusing on the US market.
                </div>
                <div className="rounded-lg border border-accent/20 bg-accent-light/30 p-5 text-[13px] leading-relaxed text-text">
                  <div className="mb-3 flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> AI Response
                  </div>
                  Here is a 6-month Go-To-Market strategy for your Real Estate AI CRM:
                  <br/><br/>
                  <strong className="text-accent">Phase 1: Foundation (Months 1-2)</strong><br/>
                  - Position against legacy CRMs (Salesforce) by highlighting AI automation.<br/>
                  - Target independent brokers first (lower friction than enterprise agencies).
                  <br/><br/>
                  <strong className="text-accent">Phase 2: Launch & Acquisition (Months 3-4)</strong><br/>
                  - Launch on Product Hunt and relevant real estate tech forums.<br/>
                  - Implement webinar series: "Closing 30% faster with AI".
                  <br/><br/>
                  <Button size="sm" variant="outline" className="mt-4 h-8 px-3 text-xs">Apply to Roadmap</Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
