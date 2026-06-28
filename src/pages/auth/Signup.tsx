import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PageTransition } from '@/utils/motion';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Signup:', data);
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col md:flex-row bg-bg">
        {/* Left Side - Brand */}
        <div className="hidden md:flex flex-1 flex-col justify-between bg-accent p-12 text-white">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-white">
              <svg viewBox="0 0 16 16" className="h-5 w-5 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
              SprintFlow AI
            </Link>
          </div>
          
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight mb-4">The AI operating system for ambitious startups.</h2>
            <p className="text-accent-light/90">Join 3,000+ teams shipping faster and growing smarter with SprintFlow.</p>
          </div>
          
          <div className="text-sm font-medium text-white/60">
            © 2026 SprintFlow AI. All rights reserved.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-1 items-center justify-center p-8 bg-bg2">
          <div className="w-full max-w-[400px] rounded-card-lg border border-border bg-bg p-8 shadow-elevated">
            <div className="mb-8 text-center md:text-left">
              <div className="md:hidden mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <svg viewBox="0 0 16 16" className="h-5 w-5 fill-none stroke-white stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
              <p className="mt-2 text-sm text-text2">Start your 14-day free trial. No credit card required.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  type="text" 
                  placeholder="Jane Doe" 
                  {...register('name')}
                  error={!!errors.name}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Work Email</label>
                <Input 
                  type="email" 
                  placeholder="jane@company.com" 
                  {...register('email')}
                  error={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Password</label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  {...register('password')}
                  error={!!errors.password}
                />
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>

              <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-text2">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-accent hover:underline">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
