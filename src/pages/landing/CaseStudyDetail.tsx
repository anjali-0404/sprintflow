import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition, ScrollReveal } from '@/utils/motion';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/data/mock';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return (
      <PageTransition>
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Case study not found</h1>
          <p className="text-text2 mb-6">The case study you are looking for does not exist.</p>
          <Link to="/customers">
            <Button variant="outline">
              <ArrowLeft size={14} className="mr-2" /> Back to customers
            </Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Find next case study for navigation
  const currentIdx = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextStudy = caseStudies[(currentIdx + 1) % caseStudies.length];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-bg2 py-24">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <Link
              to="/customers"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-text2 hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} /> Back to customers
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  {study.company}
                </div>
                <h1 className="mb-6 text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight">
                  {study.title}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-text2">
                  {study.description}
                </p>
                <Link to="/signup">
                  <Button size="lg">Get similar results</Button>
                </Link>
              </div>

              {/* Metrics Card */}
              <div className="rounded-[20px] border border-border bg-bg p-8 shadow-elevated">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-text3">
                  Key Results
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-bold text-accent">{m.value}</div>
                      <div className="mt-2 text-sm text-text2">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px]">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <div className="h-6 w-1 rounded-full bg-accent" />
                  The Challenge
                </div>
                <h2 className="mb-6 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
                  What {study.company} was facing
                </h2>
                <p className="text-lg leading-relaxed text-text2">
                  {study.challenge}
                </p>
                <p className="mt-4 text-base leading-relaxed text-text2">
                  Like many fast-growing startups, {study.company} was struggling with fragmented tools, 
                  lack of visibility into team performance, and spending too much time on operational overhead 
                  instead of building their core product. They needed a unified platform that could grow with them.
                </p>
              </div>

              <div className="my-16 h-px bg-border" />

              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <div className="h-6 w-1 rounded-full bg-accent" />
                  The Solution
                </div>
                <h2 className="mb-6 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
                  How SprintFlow AI helped
                </h2>
                <p className="text-lg leading-relaxed text-text2 mb-6">
                  {study.company} adopted SprintFlow AI as their central operating system, replacing multiple 
                  disconnected tools with one unified workspace.
                </p>
                <div className="space-y-4">
                  {[
                    'Consolidated project management, analytics, and AI tools into one platform',
                    'Used AI Strategy Generator to create data-driven growth plans',
                    'Automated weekly investor updates with one-click reporting',
                    'Improved sprint velocity with AI-powered bottleneck detection',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[15px] text-text2">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-16 h-px bg-border" />

              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <div className="h-6 w-1 rounded-full bg-accent" />
                  The Results
                </div>
                <h2 className="mb-6 text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
                  The impact
                </h2>
                <p className="text-lg leading-relaxed text-text2">
                  {study.results}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {study.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="rounded-card-lg border border-border bg-bg2 p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-accent">{m.value}</div>
                      <div className="mt-2 text-sm text-text2">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="border-t border-border bg-bg2 py-16">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-text3">
                Next case study
              </div>
              <Link
                to={`/customers/${nextStudy.slug}`}
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold hover:text-accent transition-colors"
              >
                {nextStudy.title}
                <ArrowRight size={18} />
              </Link>
            </div>
            <Link to="/signup">
              <Button>Start free trial</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
