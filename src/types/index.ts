export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'at_risk' | 'on_hold';
  progress: number;
  dueDate: string;
  team: User[];
};

export type TaskStatus = 'todo' | 'in_progress' | 'done';

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assignee?: User;
  priority: 'low' | 'medium' | 'high';
  storyPoints?: number;
};

export type Metric = {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down' | 'neutral';
  history: number[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: User;
  publishedAt: string;
  readTime: string;
  categories: string[];
  imageUrl?: string;
};

export type Testimonial = {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatarInitials: string;
    color: string;
  };
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  isPopular?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  company: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  results: string;
};

export type AIModule = {
  id: string;
  name: string;
  description: string;
  icon: string;
  examplePrompt: string;
  exampleResponse: string;
};

export type Integration = {
  id: string;
  name: string;
  description: string;
  logo: string;
  status: 'connected' | 'disconnected';
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  read: boolean;
};
