import React from 'react';
import { PageTransition } from '@/utils/motion';
import { Settings2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function DashboardPlaceholder() {
  const navigate = useNavigate();
  
  return (
    <PageTransition>
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-light shadow-sm">
          <Settings2 size={40} className="text-accent opacity-80" />
        </div>
        <h1 className="mb-3 text-2xl font-bold tracking-tight">Page under construction</h1>
        <p className="mb-8 max-w-md text-[15px] leading-relaxed text-text2">
          We're working hard to bring you this feature. The development team is currently building out this section of the workspace.
        </p>
        <Button onClick={() => navigate('/dashboard')} className="gap-2">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Button>
      </div>
    </PageTransition>
  );
}
