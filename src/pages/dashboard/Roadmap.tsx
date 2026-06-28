import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/mock';

export function Roadmap() {
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Roadmap</h1>
          <p className="text-sm text-text2">Strategic timeline and upcoming epics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-md border border-border bg-bg p-1">
            <button className="rounded px-2 py-1 hover:bg-bg2"><ChevronLeft size={16} /></button>
            <span className="px-2 text-sm font-medium text-text2">2026 Q2-Q3</span>
            <button className="rounded px-2 py-1 hover:bg-bg2"><ChevronRight size={16} /></button>
          </div>
          <Button className="gap-2">
            <Plus size={16} /> Add Epic
          </Button>
        </div>
      </div>

      <Card className="overflow-x-auto">
        <div className="min-w-[800px] p-6">
          {/* Timeline Header */}
          <div className="mb-4 flex border-b border-border pb-4">
            <div className="w-48 shrink-0 font-medium text-text3">Initiative</div>
            <div className="flex flex-1">
              {months.map((month, i) => (
                <div key={i} className="flex-1 text-center text-sm font-medium text-text3">
                  {month}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Tracks */}
          <div className="flex flex-col gap-6 relative">
            {/* Grid lines */}
            <div className="absolute inset-y-0 left-48 right-0 flex pointer-events-none">
              {months.map((_, i) => (
                <div key={i} className="flex-1 border-l border-border/50 border-dashed" />
              ))}
            </div>

            {projects.map((project, i) => {
              // Mock start and width for timeline visualization
              const startOffset = i % 3;
              const duration = (i % 2) + 2;
              const left = `${(startOffset / months.length) * 100}%`;
              const width = `${(duration / months.length) * 100}%`;
              
              const isDone = project.status === 'completed';
              const isAtRisk = project.status === 'at_risk';
              
              const barColor = isDone 
                ? 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30'
                : isAtRisk 
                  ? 'bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30'
                  : 'bg-accent-light text-accent border-accent/20';
                  
              return (
                <div key={project.id} className="flex items-center group">
                  <div className="w-48 shrink-0 pr-4">
                    <div className="text-sm font-medium truncate">{project.name}</div>
                    <div className="text-xs text-text3 capitalize">{project.status.replace('_', ' ')}</div>
                  </div>
                  <div className="relative flex-1 h-12">
                    <div 
                      className={`absolute top-1 bottom-1 rounded-md border px-3 py-1 flex flex-col justify-center shadow-sm cursor-pointer hover:shadow-md transition-shadow ${barColor}`}
                      style={{ left, width }}
                    >
                      <div className="text-xs font-semibold truncate">{project.progress}% Complete</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}
