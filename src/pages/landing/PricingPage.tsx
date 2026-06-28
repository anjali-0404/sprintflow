import React, { useState } from 'react';
import { ScrollReveal, PageTransition } from '@/utils/motion';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { pricingPlans } from '@/data/mock';
import { Check, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Can I try SprintFlow AI for free?',
    a: 'Yes! Our Starter plan is completely free and includes up to 3 projects, basic analytics, and 5 AI requests per month. No credit card required.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'After your 14-day trial of Growth features, you can continue on the free Starter plan or upgrade to keep all Growth features.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel anytime. Changes take effect immediately, and we prorate any billing adjustments.',
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes — save roughly 17% when you choose annual billing on any paid plan.',
  },
  {
    q: 'Do you offer startup discounts?',
    a: 'We offer special pricing for early-stage startups (pre-Series A). Contact us to learn more about our startup program.',
  },
];

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h1 className="mx-auto mb-5 max-w-[700px] text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-tight text-text">
              Simple, predictable{' '}
              <span className="text-accent">pricing</span>
            </h1>
            <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text2">
              Start for free. Upgrade when your team grows. No surprises, no hidden fees.
            </p>

            {/* Toggle */}
            <div className="mx-auto mb-16 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-text' : 'text-text3'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  isAnnual ? 'bg-accent' : 'bg-border2'
                }`}
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                    isAnnual ? 'translate-x-[22px]' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-text' : 'text-text3'}`}>
                Annual
                <span className="ml-1.5 rounded-full bg-accent-light px-2 py-0.5 text-[10px] font-bold text-accent">
                  Save 17%
                </span>
              </span>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
            {pricingPlans.map((plan) => {
              const price = isAnnual
                ? Math.round(plan.priceAnnual / 12)
                : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-card-lg p-8 text-left transition-shadow ${
                    plan.isPopular
                      ? 'border-2 border-accent bg-bg shadow-elevated scale-[1.02]'
                      : 'border border-border bg-bg2'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="my-3 text-sm text-text2">{plan.description}</p>
                  <div className="mb-6 text-4xl font-bold tracking-tight">
                    ${price}
                    <span className="text-lg font-normal text-text3">/mo</span>
                  </div>

                  <Link to={plan.priceMonthly === 149 ? '/contact' : '/signup'}>
                    <Button
                      className={`mb-6 w-full h-10 ${
                        plan.isPopular
                          ? ''
                          : 'bg-bg hover:bg-border text-text border border-border'
                      }`}
                      variant={plan.isPopular ? 'default' : 'outline'}
                    >
                      {plan.priceMonthly === 0
                        ? 'Get started'
                        : plan.priceMonthly === 149
                        ? 'Contact sales'
                        : 'Start free trial'}
                    </Button>
                  </Link>

                  <div className="space-y-3 text-[13px] text-text2">
                    {plan.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <Check size={14} className="shrink-0 text-accent" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg2 py-24 border-t border-border">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-[700px]">
              <h2 className="mb-12 text-center text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-card border border-border bg-bg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-[15px] font-medium hover:bg-bg2 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <HelpCircle
                        size={16}
                        className={`shrink-0 ml-4 text-text3 transition-transform ${
                          openFaq === i ? 'rotate-180 text-accent' : ''
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="border-t border-border px-6 py-4 text-sm leading-relaxed text-text2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <h2 className="mb-4 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
              Still have questions?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-text2">
              Our team is happy to help you find the right plan for your needs.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact us</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
