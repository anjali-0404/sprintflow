import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Mock calendar grid
  const calendarGrid = Array.from({ length: 35 }).map((_, i) => {
    const day = i - 3;
    const isCurrentMonth = day > 0 && day <= 30;
    const isToday = day === 15;
    const hasEvent = [4, 12, 15, 22, 28].includes(day);
    return { day, isCurrentMonth, isToday, hasEvent };
  });

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-sm text-text2">Schedule and manage your team events.</p>
        </div>
        <Button className="gap-2 self-start sm:self-auto">
          <Plus size={16} /> New Event
        </Button>
      </div>

      <Card>
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold">June 2026</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Today</Button>
            <div className="flex items-center rounded-md border border-border bg-bg p-1 ml-2">
              <button className="rounded px-2 py-1 hover:bg-bg2"><ChevronLeft size={16} /></button>
              <button className="rounded px-2 py-1 hover:bg-bg2"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-b border-border bg-bg2">
            {days.map(day => (
              <div key={day} className="py-2 text-center text-xs font-medium text-text3">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7">
            {calendarGrid.map((date, i) => (
              <div 
                key={i} 
                className={`min-h-[100px] border-b border-r border-border p-2 transition-colors hover:bg-bg2 ${!date.isCurrentMonth ? 'bg-bg2/50 text-text3' : ''} ${i % 7 === 6 ? 'border-r-0' : ''}`}
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${date.isToday ? 'bg-accent text-white font-bold' : 'font-medium'}`}>
                  {date.day > 0 ? (date.day <= 30 ? date.day : date.day - 30) : 31 + date.day}
                </div>
                
                {date.hasEvent && (
                  <div className="mt-2 rounded bg-accent-light px-2 py-1 text-[10px] font-semibold text-accent truncate">
                    {date.isToday ? '10:00 AM Sync' : 'Team Meeting'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageTransition>
  );
}
