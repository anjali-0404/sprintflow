import React, { useEffect, useState } from 'react';
import { ScrollReveal } from '@/utils/motion';
import { Button } from '../ui/Button';

export function DashboardPreview() {
  const [barsLoaded, setBarsLoaded] = useState(false);
  const bars = [45, 62, 48, 71, 58, 85, 73, 92];
  const labels = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];

  useEffect(() => {
    const timer = setTimeout(() => setBarsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pb-24">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-[900px] overflow-hidden rounded-[20px] border border-border bg-bg2 shadow-elevated">
            <div className="flex items-center gap-2 border-b border-border bg-bg px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <div className="ml-3 text-xs text-text3">app.sprintflow.ai/dashboard</div>
            </div>
            
            <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-[200px_1fr]">
              <div className="hidden border-r border-border bg-bg p-3 md:block">
                <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-text3">Workspace</div>
                <div className="mb-1 flex cursor-pointer items-center gap-2 rounded-md bg-accent-light px-2 py-1.5 text-[13px] font-medium text-accent">
                  <div className="h-3.5 w-3.5 rounded-sm bg-accent opacity-80" /> Dashboard
                </div>
                <div className="mb-1 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-text2 hover:bg-bg2">
                  <div className="h-3.5 w-3.5 rounded-sm bg-text3 opacity-60" /> Projects
                </div>
                <div className="mb-1 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-text2 hover:bg-bg2">
                  <div className="h-3.5 w-3.5 rounded-sm bg-text3 opacity-60" /> Roadmap
                </div>
                <div className="mb-1 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-text2 hover:bg-bg2">
                  <div className="h-3.5 w-3.5 rounded-sm bg-text3 opacity-60" /> Analytics
                </div>
                
                <div className="mb-2 mt-4 px-2 text-[11px] font-semibold uppercase tracking-widest text-text3">Settings</div>
                <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-text2 hover:bg-bg2">
                  <div className="h-3.5 w-3.5 rounded-sm bg-text3 opacity-60" /> Settings
                </div>
              </div>
              
              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[15px] font-semibold tracking-tight">Good morning, Alex ✦</div>
                  <Button size="sm" className="h-7 text-xs px-3">+ New project</Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <div className="rounded-card border border-border bg-bg p-3.5">
                    <div className="mb-1.5 text-[11px] text-text3">MRR</div>
                    <div className="text-xl font-bold tracking-tight">$42.8k</div>
                    <div className="mt-1 text-[11px] text-green-600">↑ 18% this month</div>
                  </div>
                  <div className="rounded-card border border-border bg-bg p-3.5">
                    <div className="mb-1.5 text-[11px] text-text3">Active projects</div>
                    <div className="text-xl font-bold tracking-tight">24</div>
                    <div className="mt-1 text-[11px] text-green-600">↑ 3 new</div>
                  </div>
                  <div className="rounded-card border border-border bg-bg p-3.5">
                    <div className="mb-1.5 text-[11px] text-text3">Sprint velocity</div>
                    <div className="text-xl font-bold tracking-tight">87%</div>
                    <div className="mt-1 text-[11px] text-green-600">↑ 5pts</div>
                  </div>
                  <div className="rounded-card border border-border bg-bg p-3.5">
                    <div className="mb-1.5 text-[11px] text-text3">Burn rate</div>
                    <div className="text-xl font-bold tracking-tight">$8.2k</div>
                    <div className="mt-1 text-[11px] text-red-600">↓ on target</div>
                  </div>
                </div>
                
                <div className="flex-1 rounded-card border border-border bg-bg p-3.5">
                  <div className="mb-3 text-[12px] font-medium text-text2">Revenue growth — last 8 weeks</div>
                  <div className="flex h-20 items-end gap-1.5">
                    {bars.map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div 
                          className="w-full rounded-t-sm bg-accent transition-all duration-700 ease-out hover:opacity-100 opacity-85"
                          style={{ height: barsLoaded ? `${h * 0.8}px` : '0px', transitionDelay: `${i * 60}ms` }}
                        />
                        <div className="text-[9px] text-text3">{labels[i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-card border border-border bg-bg p-3">
                    <div className="mb-2 text-[12px] font-semibold text-text2">Recent tasks</div>
                    <div className="flex items-center gap-2 border-b border-border py-1.5 text-xs text-text2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" /> Finalize Q3 roadmap
                    </div>
                    <div className="flex items-center gap-2 border-b border-border py-1.5 text-xs text-text2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" /> Review investor deck
                    </div>
                    <div className="flex items-center gap-2 py-1.5 text-xs text-text2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" /> User interview follow-up
                    </div>
                  </div>
                  
                  <div className="rounded-card border border-border bg-bg p-3">
                    <div className="mb-2 text-[12px] font-semibold text-text2">AI suggestions</div>
                    <div className="rounded-md border-l-2 border-accent bg-accent-light p-2 text-xs leading-relaxed text-text2">
                      Sprint 14 velocity is 12% below target. Consider reducing scope by 2 story points.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
