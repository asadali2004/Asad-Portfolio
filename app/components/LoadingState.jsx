'use client';

import { useState, useEffect } from 'react';

const LoadingState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Also listen for when the document is ready
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      const handleLoad = () => setIsLoading(false);
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 flex items-center justify-center z-50">
        <div className="relative">
          {/* Loading spinner */}
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin"></div>
          {/* Loading text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 text-sm font-medium">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default LoadingState;
