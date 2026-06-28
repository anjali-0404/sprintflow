import React, { useState } from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardContent } from '@/components/ui/Card';
import { teamMembers } from '@/data/mock';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Mail, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

export function Team() {
  const [search, setSearch] = useState('');

  const filteredTeam = teamMembers.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team</h1>
          <p className="text-sm text-text2">Manage members and their roles in your workspace.</p>
        </div>
        <Button className="gap-2 self-start sm:self-auto">
          <Plus size={16} /> Invite Member
        </Button>
      </div>

      <div className="mb-6 flex max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text3" size={16} />
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-border bg-bg px-9 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTeam.map(member => (
          <Card key={member.id} className="hover:border-accent/30 transition-colors">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="w-full flex justify-end mb-2">
                <button className="text-text3 hover:text-text">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              <Avatar className="mb-4 h-20 w-20 border-2 border-border">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} />
                <AvatarFallback className="text-lg">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
              <p className="mb-4 text-sm font-medium text-accent">{member.role}</p>
              
              <div className="flex w-full items-center justify-center gap-2 border-t border-border pt-4">
                <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
                  <Mail size={14} /> Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTransition>
  );
}
