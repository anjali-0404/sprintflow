import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useUiStore } from '@/store/uiStore';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/customers', label: 'Customers' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
];

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useUiStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8">
        <div className="flex h-[60px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-[15px] tracking-tight">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
              <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </div>
            SprintFlow AI
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/')
                    ? 'bg-bg2 text-text font-medium'
                    : 'text-text2 hover:bg-bg2 hover:text-text'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 text-text2 hover:text-text transition-colors rounded-md hover:bg-bg2" aria-label="Toggle dark mode">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/login" className="hidden md:inline-flex">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup" className="hidden md:inline-flex">
              <Button size="sm">Start free trial</Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text2 hover:text-text transition-colors rounded-md hover:bg-bg2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg animate-in slide-in-from-top">
          <div className="container mx-auto px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2.5 text-sm transition-colors',
                  location.pathname === link.to
                    ? 'bg-accent-light text-accent font-medium'
                    : 'text-text2 hover:bg-bg2 hover:text-text'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-4 flex flex-col gap-2">
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Start free trial</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
