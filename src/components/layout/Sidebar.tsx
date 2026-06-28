import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUiStore } from '@/store/uiStore';
import { cn } from '@/utils/cn';
import {
  LayoutDashboard,
  FolderKanban,
  Map as MapIcon,
  LineChart,
  Bot,
  Video,
  Calendar,
  Settings,
  Bell,
  Users,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/Button';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Overview', to: '/dashboard' },
  { icon: FolderKanban, label: 'Projects', to: '/dashboard/projects' },
  { icon: MapIcon, label: 'Roadmap', to: '/dashboard/roadmap' },
  { icon: LineChart, label: 'Analytics', to: '/dashboard/analytics' },
  { icon: Bot, label: 'AI Assistant', to: '/dashboard/ai' },
  { icon: Video, label: 'Meetings', to: '/dashboard/meetings' },
  { icon: Calendar, label: 'Calendar', to: '/dashboard/calendar' },
];

const secondaryNavItems = [
  { icon: Bell, label: 'Notifications', to: '/dashboard/notifications' },
  { icon: Users, label: 'Team', to: '/dashboard/team' },
  { icon: Settings, label: 'Settings', to: '/dashboard/settings' },
];

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUiStore();

  return (
    <aside
      className={cn(
        'relative flex h-full shrink-0 overflow-hidden flex-col border-r border-border bg-bg transition-all duration-300 max-md:absolute max-md:z-50',
        sidebarOpen ? 'w-64 max-md:translate-x-0' : 'w-16 max-md:-translate-x-full'
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        {sidebarOpen ? (
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-accent">
              <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </div>
            <span>SprintFlow</span>
          </div>
        ) : (
          <div className="mx-auto flex h-6 w-6 items-center justify-center rounded bg-accent">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3">
          {sidebarOpen && <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-text3">Workspace</div>}
          <nav className="flex flex-col space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/dashboard'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-accent-light text-accent font-medium'
                      : 'text-text2 hover:bg-bg2 hover:text-text',
                    !sidebarOpen && 'justify-center px-0'
                  )
                }
              >
                <item.icon className={cn('h-4 w-4 shrink-0', !sidebarOpen && 'mx-auto')} />
                {sidebarOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-8 px-3">
          {sidebarOpen && <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-text3">Settings</div>}
          <nav className="flex flex-col space-y-1">
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-accent-light text-accent font-medium'
                      : 'text-text2 hover:bg-bg2 hover:text-text',
                    !sidebarOpen && 'justify-center px-0'
                  )
                }
              >
                <item.icon className={cn('h-4 w-4 shrink-0', !sidebarOpen && 'mx-auto')} />
                {sidebarOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="hidden border-t border-border p-4 md:block">
        <button
          onClick={toggleSidebar}
          className="flex w-full items-center justify-center rounded-md p-2 text-text2 hover:bg-bg2 hover:text-text transition-colors"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
    </aside>
  );
}
