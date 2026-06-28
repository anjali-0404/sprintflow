import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { revenueData, projects, tasks } from '@/data/mock';
import { Button } from '@/components/ui/Button';

export function Dashboard() {
  return (
    <PageTransition>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-sm text-text2">Here is what is happening in your workspace.</p>
        </div>
        <Button>+ New Project</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text3 uppercase tracking-wider">Total MRR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42.8k</div>
            <p className="mt-1 text-xs text-green-600">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text3 uppercase tracking-wider">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="mt-1 text-xs text-green-600">+3 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text3 uppercase tracking-wider">Tasks Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="mt-1 text-xs text-text2">In the last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text3 uppercase tracking-wider">AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="mt-1 text-xs text-accent">Requires your attention</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Growth (Last 8 Weeks)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-end gap-2">
              {revenueData.map((d, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2 group">
                  <div 
                    className="w-full rounded-t-sm bg-accent opacity-85 transition-opacity group-hover:opacity-100" 
                    style={{ height: `${(d.MRR / 50000) * 100}%` }}
                  />
                  <div className="text-xs text-text3">{d.week}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.slice(0, 4).map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-text2">{p.status}</div>
                </div>
                <div className="text-xs font-semibold">{p.progress}%</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
