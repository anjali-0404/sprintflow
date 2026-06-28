import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PageTransition } from '@/utils/motion';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login:', data);
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-bg2 px-4">
        <div className="w-full max-w-[400px] rounded-card-lg border border-border bg-bg p-8 shadow-elevated">
          <div className="mb-8 text-center">
            <Link to="/" className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <svg viewBox="0 0 16 16" className="h-5 w-5 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-sm text-text2">Log in to your workspace to continue.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Email address</label>
              <Input 
                type="email" 
                placeholder="name@company.com" 
                {...register('email')}
                error={!!errors.email}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Password</label>
                <Link to="#" className="text-xs text-accent hover:underline">Forgot password?</Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                {...register('password')}
                error={!!errors.password}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-text2">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-accent hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
