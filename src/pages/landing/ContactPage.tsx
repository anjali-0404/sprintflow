import React, { useState } from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              Get In Touch
            </div>
            <h1 className="mx-auto mb-5 max-w-[600px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Let's talk about your{' '}
              <span className="text-accent">goals</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[480px] text-[17px] leading-relaxed text-text2">
              Whether you have a question, need a demo, or want to discuss enterprise pricing — we are here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-8">
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Info Column */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="mb-6 text-xl font-bold tracking-tight">Contact information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Email us</div>
                      <div className="mt-1 text-sm text-text2">hello@sprintflow.ai</div>
                      <div className="text-sm text-text2">sales@sprintflow.ai</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Call us</div>
                      <div className="mt-1 text-sm text-text2">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Visit us</div>
                      <div className="mt-1 text-sm text-text2">123 Innovation Way<br />San Francisco, CA 94105</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-card-lg border border-border bg-bg2 p-6">
                  <h3 className="mb-2 text-sm font-semibold">Response time</h3>
                  <p className="text-sm text-text2">We typically respond within 2 business hours during weekdays (9am–6pm PST).</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-[20px] border border-border bg-bg p-8 shadow-elevated">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle2 size={48} className="mb-4 text-accent" />
                      <h3 className="mb-2 text-xl font-bold">Message sent!</h3>
                      <p className="text-sm text-text2 max-w-[300px]">Thanks for reaching out. We will get back to you within 2 business hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-accent hover:underline">Send another message</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="mb-2 text-lg font-semibold">Send us a message</h3>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">First name</label>
                          <Input type="text" placeholder="Jane" required />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Last name</label>
                          <Input type="text" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Work email</label>
                        <Input type="email" placeholder="jane@company.com" required />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Company</label>
                        <Input type="text" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea placeholder="Tell us about your project or question..." rows={5} required />
                      </div>
                      <Button type="submit" className="w-full h-11">
                        <Send size={14} className="mr-2" /> Send message
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
