import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { revenueData } from '@/data/mock';
import { Button } from '@/components/ui/Button';
import { Download, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const kpis = [
    { title: 'Monthly Recurring Revenue', value: '$42,800', change: '+18.2%', icon: DollarSign, positive: true },
    { title: 'Annual Run Rate', value: '$513,600', change: '+18.2%', icon: TrendingUp, positive: true },
    { title: 'Active Users', value: '2,405', change: '+5.4%', icon: Users, positive: true },
    { title: 'Churn Rate', value: '1.2%', change: '-0.3%', icon: Activity, positive: true },
  ];

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-sm text-text2">Monitor your key performance indicators and growth metrics.</p>
        </div>
        <Button variant="outline" className="gap-2 self-start sm:self-auto">
          <Download size={16} /> Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6">
        {kpis.map((kpi, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg2">
                  <kpi.icon size={20} className="text-text2" />
                </div>
                <div className={`text-xs font-semibold ${kpi.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {kpi.change}
                </div>
              </div>
              <div className="text-sm font-medium text-text3 mb-1">{kpi.title}</div>
              <div className="text-2xl font-bold tracking-tight">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMRR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1a6b3c" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1a6b3c" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: 'var(--text3)', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text3)', fontSize: 12 }} tickFormatter={(val) => `$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}
                    itemStyle={{ color: 'var(--text)' }}
                    formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'MRR']}
                  />
                  <Area type="monotone" dataKey="MRR" stroke="#1a6b3c" strokeWidth={3} fillOpacity={1} fill="url(#colorMRR)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Acquisition Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              {[
                { name: 'Organic Search', value: 45, color: 'bg-accent' },
                { name: 'Direct Traffic', value: 25, color: 'bg-indigo-500' },
                { name: 'Social Media', value: 20, color: 'bg-sky-500' },
                { name: 'Referral', value: 10, color: 'bg-amber-500' },
              ].map((channel, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5 text-sm">
                    <span className="font-medium text-text2">{channel.name}</span>
                    <span className="font-bold">{channel.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-bg2 overflow-hidden">
                    <div className={`h-full ${channel.color} rounded-full`} style={{ width: `${channel.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
