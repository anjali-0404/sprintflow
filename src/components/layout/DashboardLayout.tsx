import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { PageTransition } from '@/utils/motion';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';
import { useUiStore } from '@/store/uiStore';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export function DashboardLayout() {
  const { sidebarOpen, setSidebarOpen } = useUiStore();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      <Sidebar />
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b border-border bg-bg px-4 md:px-6">
          <div className="flex items-center gap-3 w-full max-w-md">
            <button 
              className="md:hidden text-text2 hover:text-text p-1"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:flex w-full max-w-md items-center gap-2 rounded-md border border-border bg-bg2 px-3 py-1.5 text-sm text-text2 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
              <Search size={16} className="text-text3" />
              <input 
                type="text" 
                placeholder="Search anything... (Cmd+K)" 
                className="flex-1 bg-transparent outline-none placeholder:text-text3" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-text2 hover:text-text">
              <HelpCircle size={20} />
            </button>
            <button className="relative text-text2 hover:text-text">
              <Bell size={20} />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-bg" />
            </button>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        <main ref={mainRef} className="flex-1 overflow-y-auto bg-bg2 p-4 md:p-6">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
