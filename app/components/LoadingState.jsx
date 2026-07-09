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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080b12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.16),transparent_38%),linear-gradient(135deg,rgba(8,11,18,0.98),rgba(13,17,27,0.98))]" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="h-14 w-14 rounded-full border-4 border-teal-300/20 border-t-teal-300 animate-spin" />
          <div className="text-sm font-medium text-teal-200">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default LoadingState;
