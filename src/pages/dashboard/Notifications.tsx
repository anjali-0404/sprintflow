import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bell, Check, Circle } from 'lucide-react';
import { notifications } from '@/data/mock';

export function Notifications() {
  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-sm text-text2">Stay up to date with workspace activity.</p>
        </div>
        <Button variant="outline" className="gap-2 self-start sm:self-auto">
          <Check size={16} /> Mark all as read
        </Button>
      </div>

      <Card className="max-w-4xl">
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`flex gap-4 p-5 transition-colors hover:bg-bg2 ${!notification.read ? 'bg-accent/5' : ''}`}
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Bell size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-sm ${!notification.read ? 'font-semibold text-text' : 'font-medium text-text2'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-text3">
                      {new Date(notification.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm text-text2 line-clamp-2">{notification.description}</p>
                </div>
                {!notification.read && (
                  <div className="flex shrink-0 items-center">
                    <Circle size={10} className="fill-accent text-accent" />
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
