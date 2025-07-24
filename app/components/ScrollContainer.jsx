'use client';

import { useEffect, useRef, useState } from 'react';

const ScrollContainer = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Always prevent default when hovering over the container
      if (isHovering) {
        e.preventDefault();
        e.stopPropagation();

        const { scrollTop, scrollHeight, clientHeight } = container;
        const canScrollUp = scrollTop > 0;
        const canScrollDown = scrollTop < (scrollHeight - clientHeight);
        
        // Only scroll if we can scroll in that direction
        if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) {
          container.scrollTop += e.deltaY * 0.8;
        }
      }
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      // Add a visual indicator
      container.style.borderColor = 'rgba(22, 242, 179, 0.3)';
    };
    
    const handleMouseLeave = (e) => {
      setIsHovering(false);
      // Remove visual indicator
      container.style.borderColor = 'transparent';
    };

    // Use document to capture all wheel events, then check if we're over the container
    const handleDocumentWheel = (e) => {
      if (container.contains(e.target)) {
        handleWheel(e);
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleDocumentWheel, { passive: false });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('wheel', handleDocumentWheel);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className={`scroll-container ${className} ${isHovering ? 'scrolling-active' : ''}`}
      style={{
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        border: '2px solid transparent',
        borderRadius: '8px',
        transition: 'border-color 0.2s ease'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
