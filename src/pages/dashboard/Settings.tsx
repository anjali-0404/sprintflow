import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { teamMembers, pricingPlans } from '@/data/mock';
import { Check, CreditCard, Building, User, Bell } from 'lucide-react';

export function Settings() {
  const me = teamMembers[0];

  return (
    <PageTransition>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-text2">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8">
        <TabsList className="flex flex-row md:flex-col gap-2 min-w-[200px] overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <TabsTrigger 
            value="profile" 
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text2 transition-colors hover:bg-bg2 hover:text-text data-[state=active]:bg-accent-light data-[state=active]:text-accent text-left whitespace-nowrap"
          >
            <User size={16} /> Profile
          </TabsTrigger>
          <TabsTrigger 
            value="workspace" 
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text2 transition-colors hover:bg-bg2 hover:text-text data-[state=active]:bg-accent-light data-[state=active]:text-accent text-left whitespace-nowrap"
          >
            <Building size={16} /> Workspace
          </TabsTrigger>
          <TabsTrigger 
            value="billing" 
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text2 transition-colors hover:bg-bg2 hover:text-text data-[state=active]:bg-accent-light data-[state=active]:text-accent text-left whitespace-nowrap"
          >
            <CreditCard size={16} /> Billing
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text2 transition-colors hover:bg-bg2 hover:text-text data-[state=active]:bg-accent-light data-[state=active]:text-accent text-left whitespace-nowrap"
          >
            <Bell size={16} /> Notifications
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 max-w-3xl">
          <TabsContent value="profile" className="space-y-6 focus:outline-none">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 mb-6">
                  <div className="h-20 w-20 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold">
                    {me.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="mb-2">Change Avatar</Button>
                    <div className="text-xs text-text3">JPG, GIF or PNG. 1MB max.</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input type="text" defaultValue={me.name} className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" defaultValue={me.email} className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Role</label>
                    <input type="text" defaultValue={me.role} className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workspace" className="space-y-6 focus:outline-none">
            <Card>
              <CardHeader>
                <CardTitle>Workspace Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Workspace Name</label>
                  <input type="text" defaultValue="Acme Corp" className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Workspace URL</label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-border bg-bg2 px-3 text-sm text-text3">
                      app.sprintflow.ai/
                    </span>
                    <input type="text" defaultValue="acme" className="w-full rounded-r-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button>Update Workspace</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6 focus:outline-none">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-accent/20 bg-accent-light p-5 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-accent">Growth Plan</h3>
                      <p className="text-sm text-text2">Billed annually ($490/year)</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">Active</span>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm">Manage Subscription</Button>
                    <Button variant="outline" size="sm" className="bg-bg">View Invoices</Button>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-4">Available Plans</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pricingPlans.slice(1).map(plan => (
                    <div key={plan.id} className="rounded-lg border border-border p-4">
                      <h4 className="font-semibold mb-1">{plan.name}</h4>
                      <div className="text-2xl font-bold mb-4">${plan.priceMonthly}<span className="text-sm text-text3 font-normal">/mo</span></div>
                      <ul className="space-y-2 text-sm text-text2 mb-6">
                        {plan.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex gap-2 items-center"><Check size={14} className="text-accent" /> {f}</li>
                        ))}
                      </ul>
                      <Button variant={plan.id === 'growth' ? 'outline' : 'default'} className="w-full" disabled={plan.id === 'growth'}>
                        {plan.id === 'growth' ? 'Current Plan' : 'Upgrade'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 focus:outline-none">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { title: 'Project Updates', desc: 'When a project status changes or tasks are completed.' },
                  { title: 'Mentions', desc: 'When someone mentions you in a comment or task.' },
                  { title: 'Weekly Digest', desc: 'A summary of your workspace activity.' },
                  { title: 'Marketing Emails', desc: 'Updates on new features and best practices.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-text3">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked={i < 3} />
                      <div className="peer h-5 w-9 rounded-full bg-border after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-accent peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent peer-focus:ring-offset-2 peer-focus:ring-offset-bg"></div>
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </PageTransition>
  );
}
