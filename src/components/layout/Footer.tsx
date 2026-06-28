import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="mb-2 flex items-center gap-2 text-[15px] font-semibold">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-accent">
                <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </div>
              SprintFlow AI
            </Link>
            <p className="mt-2 text-[13px] text-text3 leading-relaxed max-w-[250px]">
              The AI operating system for ambitious startups. Strategy, execution, and growth — in one workspace.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-text3">Product</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/features" className="text-[13px] text-text2 hover:text-text transition-colors">Features</Link>
              <Link to="/pricing" className="text-[13px] text-text2 hover:text-text transition-colors">Pricing</Link>
              <Link to="/solutions" className="text-[13px] text-text2 hover:text-text transition-colors">Solutions</Link>
              <Link to="/dashboard" className="text-[13px] text-text2 hover:text-text transition-colors">Dashboard</Link>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-text3">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/blog" className="text-[13px] text-text2 hover:text-text transition-colors">Blog</Link>
              <Link to="/customers" className="text-[13px] text-text2 hover:text-text transition-colors">Case Studies</Link>
              <Link to="/contact" className="text-[13px] text-text2 hover:text-text transition-colors">Help Center</Link>
              <Link to="/blog" className="text-[13px] text-text2 hover:text-text transition-colors">Documentation</Link>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-text3">Company</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-[13px] text-text2 hover:text-text transition-colors">About</Link>
              <Link to="/contact" className="text-[13px] text-text2 hover:text-text transition-colors">Contact</Link>
              <Link to="/blog" className="text-[13px] text-text2 hover:text-text transition-colors">Careers</Link>
              <Link to="/about" className="text-[13px] text-text2 hover:text-text transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-border pt-6 text-[13px] text-text3">
          <div>© 2026 SprintFlow AI. All rights reserved.</div>
          <div className="mt-4 flex gap-5 md:mt-0">
            <a href="#" className="hover:text-text transition-colors">Twitter</a>
            <a href="#" className="hover:text-text transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-text transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
