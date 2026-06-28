import { Project, Task, Metric, PricingPlan, Testimonial, CaseStudy, BlogPost, User, AIModule, Integration, Notification } from '../types';

export const teamMembers: User[] = [
  { id: 'u1', name: 'Alex Rivera', email: 'alex@sprintflow.ai', role: 'CEO', avatar: '' },
  { id: 'u2', name: 'Sara Kim', email: 'sara@sprintflow.ai', role: 'CTO', avatar: '' },
  { id: 'u3', name: 'Marcus Reid', email: 'marcus@sprintflow.ai', role: 'Product Manager', avatar: '' },
  { id: 'u4', name: 'Priya Lal', email: 'priya@sprintflow.ai', role: 'Lead Engineer', avatar: '' },
  { id: 'u5', name: 'David Chen', email: 'david@sprintflow.ai', role: 'Designer', avatar: '' },
  { id: 'u6', name: 'Emma Watson', email: 'emma@sprintflow.ai', role: 'Marketing', avatar: '' },
  { id: 'u7', name: 'James Doe', email: 'james@sprintflow.ai', role: 'Sales', avatar: '' },
  { id: 'u8', name: 'Linda Smith', email: 'linda@sprintflow.ai', role: 'Support', avatar: '' },
];

export const projects: Project[] = [
  { id: 'p1', name: 'Website Redesign', description: 'Overhaul marketing site', status: 'active', progress: 65, dueDate: '2026-07-15', team: [teamMembers[0], teamMembers[4]] },
  { id: 'p2', name: 'Mobile App V2', description: 'New React Native app', status: 'at_risk', progress: 30, dueDate: '2026-08-01', team: [teamMembers[1], teamMembers[3]] },
  { id: 'p3', name: 'API Gateway', description: 'Migrate to new gateway', status: 'completed', progress: 100, dueDate: '2026-05-20', team: [teamMembers[1]] },
  { id: 'p4', name: 'SOC2 Compliance', description: 'Security audit', status: 'active', progress: 80, dueDate: '2026-07-01', team: [teamMembers[2]] },
  { id: 'p5', name: 'Q3 Marketing', description: 'Campaign launch', status: 'on_hold', progress: 10, dueDate: '2026-09-01', team: [teamMembers[5]] },
  { id: 'p6', name: 'CRM Integration', description: 'Salesforce sync', status: 'active', progress: 45, dueDate: '2026-07-20', team: [teamMembers[3], teamMembers[6]] },
];

export const tasks: Task[] = Array.from({ length: 20 }).map((_, i) => {
  const statuses = ['todo', 'in_progress', 'done'] as const;
  const priorities = ['low', 'medium', 'high'] as const;
  return {
    id: `t${i+1}`,
    title: `Task ${i+1} for Project ${(i % 6) + 1}`,
    description: 'Detailed description for task...',
    status: statuses[i % 3],
    assignee: teamMembers[i % 8],
    priority: priorities[i % 3],
    storyPoints: (i % 5) + 1,
  };
});

export const revenueData = [
  { week: 'W1', MRR: 35000, ARR: 420000 },
  { week: 'W2', MRR: 36200, ARR: 434400 },
  { week: 'W3', MRR: 37500, ARR: 450000 },
  { week: 'W4', MRR: 38100, ARR: 457200 },
  { week: 'W5', MRR: 39500, ARR: 474000 },
  { week: 'W6', MRR: 40800, ARR: 489600 },
  { week: 'W7', MRR: 41900, ARR: 502800 },
  { week: 'W8', MRR: 42800, ARR: 513600 },
];

export const pricingPlans: PricingPlan[] = [
  { id: 'starter', name: 'Starter', description: 'Perfect for founders just getting started with their first startup.', priceMonthly: 0, priceAnnual: 0, features: ['Up to 3 projects', 'Basic analytics', '5 AI requests/month', '1 workspace member'] },
  { id: 'growth', name: 'Growth', description: 'For growing startups that need AI-powered insights and team collaboration.', priceMonthly: 49, priceAnnual: 490, isPopular: true, features: ['Unlimited projects', 'Full analytics suite', '500 AI requests/month', 'Up to 10 team members', 'All AI modules'] },
  { id: 'scale', name: 'Scale', description: 'For teams that need advanced controls, custom integrations, and priority support.', priceMonthly: 149, priceAnnual: 1490, features: ['Everything in Growth', 'Unlimited AI requests', 'Unlimited team members', 'Custom integrations', 'Dedicated success manager'] },
];

export const testimonials: Testimonial[] = [
  { id: '1', content: 'We replaced 4 tools with SprintFlow AI. Our team is aligned, our roadmap is clear, and we shipped 30% more features last quarter.', author: { name: 'Sara Kim', role: 'CEO', company: 'Veridian Health', avatarInitials: 'SK', color: '#dbeafe' } },
  { id: '2', content: 'The AI Strategy Generator alone is worth the subscription. It helped us identify a $2M expansion opportunity we had completely overlooked.', author: { name: 'Marcus Reid', role: 'Founder', company: 'Nomad Studio', avatarInitials: 'MR', color: '#d1fae5' } },
  { id: '3', content: 'SprintFlow made our weekly investor updates a 5-minute task. The analytics dashboard automatically surfaces exactly what investors want to see.', author: { name: 'Priya Lal', role: 'CTO', company: 'Crux Health', avatarInitials: 'PL', color: '#fce7f3' } },
  { id: '4', content: 'Absolutely phenomenal tool for startups. Highly recommend.', author: { name: 'David Chen', role: 'Designer', company: 'DesignCo', avatarInitials: 'DC', color: '#e0e7ff' } },
  { id: '5', content: 'I cannot imagine running my startup without it.', author: { name: 'Emma Watson', role: 'CMO', company: 'MarketPro', avatarInitials: 'EW', color: '#ffedd5' } },
  { id: '6', content: 'The ROI was immediate and obvious.', author: { name: 'James Doe', role: 'VP Sales', company: 'SalesTech', avatarInitials: 'JD', color: '#cffafe' } },
];

export const aiModules: AIModule[] = [
  { id: 'strategy', name: 'AI Strategy Generator', description: 'Generate full business strategies with SWOT, OKRs, and growth playbooks from a simple prompt.', icon: 'Lightbulb', examplePrompt: 'We are a B2B SaaS...', exampleResponse: 'Top 3 growth levers...' },
  { id: 'roadmap', name: 'AI Roadmap Builder', description: 'Describe your goals. Get a prioritized 90-day product roadmap aligned to your business objectives.', icon: 'Map', examplePrompt: 'Build a Q3 roadmap', exampleResponse: 'Month 1...' },
  { id: 'meetings', name: 'AI Meeting Notes', description: 'Automatic summaries, decisions, and action items extracted from every meeting recording.', icon: 'Mic', examplePrompt: 'Summarize meeting', exampleResponse: 'Action items...' },
  { id: 'competitor', name: 'AI Competitor Analysis', description: 'Real-time competitive intelligence with positioning maps and differentiation recommendations.', icon: 'Crosshair', examplePrompt: 'Analyze Acme Corp', exampleResponse: 'Strengths...' },
  { id: 'copy', name: 'AI Copywriter', description: 'Write converting copy.', icon: 'PenTool', examplePrompt: 'Write landing page', exampleResponse: 'Hero:...' },
];

export const caseStudies: CaseStudy[] = [
  { slug: 'nomad-studio', title: 'How Nomad Studio grew 300%', description: 'Scaling with AI', company: 'Nomad Studio', challenge: 'Too many tools', results: 'Consolidated tools, faster shipping.', metrics: [{label: 'Growth', value: '300%'}, {label: 'Time saved', value: '15h/wk'}] },
  { slug: 'veridian-health', title: 'Veridian Health secured Series A', description: 'Using analytics', company: 'Veridian Health', challenge: 'Messy data', results: 'Clean data, raised $5M.', metrics: [{label: 'Funding', value: '$5M'}, {label: 'Accuracy', value: '99%'}] },
  { slug: 'crux-health', title: 'Crux shipped 2x faster', description: 'Agile transformation', company: 'Crux Health', challenge: 'Slow sprints', results: 'Doubled velocity.', metrics: [{label: 'Velocity', value: '2x'}, {label: 'Bugs', value: '-40%'}] },
];

export const blogPosts: BlogPost[] = [
  { slug: 'future-of-saas', title: 'The Future of SaaS', excerpt: 'AI is changing everything.', content: '...', author: teamMembers[0], publishedAt: '2026-06-25', readTime: '5 min', categories: ['AI', 'SaaS'] },
  { slug: 'building-roadmaps', title: 'Building Better Roadmaps', excerpt: 'How to plan Q3.', content: '...', author: teamMembers[2], publishedAt: '2026-06-20', readTime: '7 min', categories: ['Product'] },
  { slug: 'remote-teams', title: 'Managing Remote Teams', excerpt: 'Best practices for 2026.', content: '...', author: teamMembers[1], publishedAt: '2026-06-15', readTime: '4 min', categories: ['Management'] },
  { slug: 'fundraising-tips', title: 'Seed Fundraising Tips', excerpt: 'What VCs want to see.', content: '...', author: teamMembers[0], publishedAt: '2026-06-10', readTime: '6 min', categories: ['Startups'] },
];

export const integrations: Integration[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `int${i}`, name: `Integration ${i}`, description: 'Connect with tools', logo: 'Link', status: i % 3 === 0 ? 'connected' : 'disconnected'
}));

export const notifications: Notification[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `n${i}`, title: `New activity ${i}`, description: 'Something happened in your workspace', createdAt: new Date(Date.now() - i * 3600000).toISOString(), read: i > 5
}));
