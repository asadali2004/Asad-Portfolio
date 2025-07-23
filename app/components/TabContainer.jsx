'use client';

import { useState, lazy, Suspense, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabAwareNavbar from './TabAwareNavbar';

// Custom ChevronDown icon to avoid extra dependency
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Lazy load components for performance with better error handling
const HeroSection = lazy(() => 
  import('./homepage/hero-section').catch(() => ({ default: () => <div>Error loading Hero section</div> }))
);
const AboutSection = lazy(() => 
  import('./homepage/about').catch(() => ({ default: () => <div>Error loading About section</div> }))
);
const Experience = lazy(() => 
  import('./homepage/experience').catch(() => ({ default: () => <div>Error loading Experience section</div> }))
);
const Skills = lazy(() => 
  import('./homepage/skills').catch(() => ({ default: () => <div>Error loading Skills section</div> }))
);
const Projects = lazy(() => 
  import('./homepage/projects').catch(() => ({ default: () => <div>Error loading Projects section</div> }))
);
const Education = lazy(() => 
  import('./homepage/education').catch(() => ({ default: () => <div>Error loading Education section</div> }))
);
const Certificate = lazy(() => 
  import('./homepage/certificate').catch(() => ({ default: () => <div>Error loading Certificate section</div> }))
);
const ContactSection = lazy(() => 
  import('./homepage/contact').catch(() => ({ default: () => <div>Error loading Contact section</div> }))
);

const tabs = [
  { id: 'hero', label: 'Home', component: HeroSection, icon: '🏠' },
  { id: 'about', label: 'About', component: AboutSection, icon: '👨‍💻' },
  { id: 'experience', label: 'Experience', component: Experience, icon: '💼' },
  { id: 'skills', label: 'Skills', component: Skills, icon: '🛠️' },
  { id: 'projects', label: 'Projects', component: Projects, icon: '🚀' },
  { id: 'education', label: 'Education', component: Education, icon: '🎓' },
  { id: 'certificates', label: 'Certificates', component: Certificate, icon: '🏆' },
  { id: 'contact', label: 'Contact', component: ContactSection, icon: '📧' },
];

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-96">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-gray-600 border-t-emerald-400 animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-cyan-400 animate-pulse"></div>
    </div>
    <div className="ml-4 text-emerald-400 font-medium">Loading...</div>
  </div>
);

// Error Boundary Component
const ErrorFallback = ({ error, resetError }) => (
  <div className="flex flex-col items-center justify-center h-96 text-center px-6">
    <div className="text-red-400 text-6xl mb-4">⚠️</div>
    <h2 className="text-xl font-semibold text-white mb-2">Something went wrong</h2>
    <p className="text-gray-400 mb-4">Failed to load this section</p>
    <button 
      onClick={resetError}
      className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
    >
      Try again
    </button>
  </div>
);

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  }, []);

  // Listen for custom tab change events
  useEffect(() => {
    const handleCustomTabChange = (event) => {
      if (event.detail) {
        handleTabChange(event.detail);
      }
    };
    window.addEventListener('changeTab', handleCustomTabChange);
    return () => window.removeEventListener('changeTab', handleCustomTabChange);
  }, [handleTabChange]);

  const handleKeyDown = (event, tabId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTabChange(tabId);
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900">
      {/* Integrated Navigation */}
      <TabAwareNavbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Tab Content */}
      <div className="relative pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="min-h-[calc(100vh-80px)]"
          >
            <Suspense fallback={<LoadingSpinner />}>
              {ActiveComponent && <ActiveComponent />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabContainer;
