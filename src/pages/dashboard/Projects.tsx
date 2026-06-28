import React, { useState } from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { projects, teamMembers } from '@/data/mock';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Filter, MoreHorizontal, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

export function Projects() {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <CheckCircle2 className="text-green-500" size={16} />;
      case 'at_risk': return <AlertCircle className="text-red-500" size={16} />;
      default: return <Clock className="text-amber-500" size={16} />;
    }
  };

  const getStatusBg = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'at_risk': return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20';
      default: return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
    }
  };

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-text2">Manage your team's initiatives and track progress.</p>
        </div>
        <Button className="gap-2 self-start sm:self-auto">
          <Plus size={16} /> New Project
        </Button>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text3" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-border bg-bg px-9 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter size={16} /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <Card key={project.id} className="flex flex-col hover:border-accent/30 transition-colors">
            <CardContent className="flex flex-1 flex-col p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusBg(project.status)}`}>
                  {getStatusIcon(project.status)}
                  <span className="capitalize">{project.status.replace('_', ' ')}</span>
                </div>
                <button className="text-text3 hover:text-text">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              
              <h3 className="mb-1 text-lg font-semibold tracking-tight">{project.name}</h3>
              <p className="mb-6 flex-1 text-sm text-text2 line-clamp-2">{project.description}</p>
              
              <div className="mb-4">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-text2">Progress</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${project.status === 'completed' ? 'bg-green-500' : project.status === 'at_risk' ? 'bg-red-500' : 'bg-accent'}`} 
                    style={{ width: `${project.progress}%` }} 
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex -space-x-2 overflow-hidden">
                  {project.team.map((member, i) => (
                    <Avatar key={i} className="inline-block h-7 w-7 border-2 border-bg">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} />
                      <AvatarFallback className="text-[10px]">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-xs font-medium text-text3">
                  Due {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTransition>
  );
}
