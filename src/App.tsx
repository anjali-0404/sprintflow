import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useUiStore } from '@/store/uiStore';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LandingLayout } from '@/components/layout/LandingLayout';

import ScrollToTop from '@/components/ScrollToTop';

// Lazy load pages for performance
const Landing = lazy(() => import('@/pages/Landing').then(module => ({ default: module.Landing })));
const FeaturesPage = lazy(() => import('@/pages/landing/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const SolutionsPage = lazy(() => import('@/pages/landing/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const CustomersPage = lazy(() => import('@/pages/landing/CustomersPage').then(m => ({ default: m.CustomersPage })));
const CaseStudyDetail = lazy(() => import('@/pages/landing/CaseStudyDetail').then(m => ({ default: m.CaseStudyDetail })));
const PricingPage = lazy(() => import('@/pages/landing/PricingPage').then(m => ({ default: m.PricingPage })));
const BlogPage = lazy(() => import('@/pages/landing/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('@/pages/landing/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const AboutPage = lazy(() => import('@/pages/landing/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('@/pages/landing/ContactPage').then(m => ({ default: m.ContactPage })));
const Login = lazy(() => import('@/pages/auth/Login').then(module => ({ default: module.Login })));
const Signup = lazy(() => import('@/pages/auth/Signup').then(module => ({ default: module.Signup })));
const Dashboard = lazy(() => import('@/pages/Dashboard').then(module => ({ default: module.Dashboard })));
const Projects = lazy(() => import('@/pages/dashboard/Projects').then(module => ({ default: module.Projects })));
const Roadmap = lazy(() => import('@/pages/dashboard/Roadmap').then(module => ({ default: module.Roadmap })));
const Analytics = lazy(() => import('@/pages/dashboard/Analytics').then(module => ({ default: module.Analytics })));
const AIAssistant = lazy(() => import('@/pages/dashboard/AIAssistant').then(module => ({ default: module.AIAssistant })));
const Meetings = lazy(() => import('@/pages/dashboard/Meetings').then(module => ({ default: module.Meetings })));
const Calendar = lazy(() => import('@/pages/dashboard/Calendar').then(module => ({ default: module.Calendar })));
const Notifications = lazy(() => import('@/pages/dashboard/Notifications').then(module => ({ default: module.Notifications })));
const Team = lazy(() => import('@/pages/dashboard/Team').then(module => ({ default: module.Team })));
const Settings = lazy(() => import('@/pages/dashboard/Settings').then(module => ({ default: module.Settings })));
const DashboardPlaceholder = lazy(() => import('@/pages/DashboardPlaceholder').then(module => ({ default: module.DashboardPlaceholder })));

// Loading component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-bg">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
  </div>
);

export default function App() {
  const { isDarkMode } = useUiStore();

  // Apply dark mode class to html element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Landing pages with shared Navbar + Footer layout */}
          <Route element={<LandingLayout />}>
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/customers/:slug" element={<CaseStudyDetail />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Home page (has its own Navbar/Footer built in) */}
          <Route path="/" element={<Landing />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="ai" element={<AIAssistant />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<DashboardPlaceholder />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={
            <div className="flex min-h-screen flex-col items-center justify-center bg-bg p-8 text-center">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <p className="text-text2">The page you are looking for does not exist.</p>
              <a href="/" className="mt-6 text-accent hover:underline">Go back home</a>
            </div>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
