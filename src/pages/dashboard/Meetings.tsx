import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Video, Calendar as CalendarIcon, Users, Clock, PlayCircle } from 'lucide-react';

export function Meetings() {
  const upcomingMeetings = [
    { title: 'Weekly Sync', time: '10:00 AM', duration: '45 min', attendees: 8 },
    { title: 'Design Review', time: '2:00 PM', duration: '60 min', attendees: 4 },
    { title: 'Investor Update', time: '4:30 PM', duration: '30 min', attendees: 2 },
  ];

  const pastMeetings = [
    { title: 'Q3 Planning Kickoff', date: 'Yesterday', duration: '90 min', aiSummary: true },
    { title: 'Marketing Campaign Sync', date: 'Mon, Jun 26', duration: '30 min', aiSummary: true },
    { title: 'All Hands', date: 'Fri, Jun 23', duration: '60 min', aiSummary: false },
  ];

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Meetings</h1>
          <p className="text-sm text-text2">Join calls and review AI-generated meeting summaries.</p>
        </div>
        <Button className="gap-2 self-start sm:self-auto">
          <Video size={16} /> New Meeting
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold tracking-tight">Past Meetings & Notes</h2>
          <div className="space-y-4">
            {pastMeetings.map((meeting, i) => (
              <Card key={i} className="hover:border-accent/30 transition-colors cursor-pointer">
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg2 text-text3">
                      <PlayCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{meeting.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-text2 mt-1">
                        <span className="flex items-center gap-1"><CalendarIcon size={12}/> {meeting.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12}/> {meeting.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {meeting.aiSummary ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                        AI Notes Ready
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-bg2 px-2.5 py-0.5 text-xs font-medium text-text3">
                        Processing...
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight mb-6">Upcoming Today</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {upcomingMeetings.map((meeting, i) => (
                  <div key={i} className="p-5">
                    <h3 className="font-semibold mb-2">{meeting.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-text2 mb-4">
                      <span className="flex items-center gap-1"><Clock size={14}/> {meeting.time}</span>
                      <span className="flex items-center gap-1"><Users size={14}/> {meeting.attendees} attendees</span>
                    </div>
                    <Button variant={i === 0 ? "default" : "outline"} className="w-full">
                      {i === 0 ? "Join Now" : "View Details"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
