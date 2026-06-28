import React from 'react';
import { cn } from '@/utils/cn';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-bg2 p-8 text-center", className)} {...props}>
      {icon && <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg3 text-text3">{icon}</div>}
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      {description && <p className="mb-4 text-sm text-text2 max-w-sm">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
