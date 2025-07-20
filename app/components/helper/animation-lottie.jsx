"use client";

import { useEffect, useRef, useState } from "react";

const AnimationLottie = ({ animationPath }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let animationInstance = null;

    const loadAnimation = async () => {
      try {
        if (containerRef.current && animationPath) {
          // Dynamic import of lottie-web
          const lottie = await import('lottie-web');
          
          animationInstance = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationPath,
          });

          animationInstance.addEventListener('DOMLoaded', () => {
            setIsLoaded(true);
          });

          animationInstance.addEventListener('error', () => {
            setHasError(true);
          });
        }
      } catch (error) {
        console.error('Failed to load lottie animation:', error);
        setHasError(true);
      }
    };

    loadAnimation();

    // Cleanup function
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [animationPath]);

  if (hasError) {
    return (
      <div 
        style={{ width: "100%", height: "100%" }}
        className="flex items-center justify-center bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-lg border border-emerald-500/20"
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🎨</div>
          <p className="text-emerald-400 text-sm">Animation Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          style={{ width: "100%", height: "100%" }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900/10 to-cyan-900/10 rounded-lg border border-emerald-500/20 backdrop-blur-sm"
        >
          <div className="text-center">
            <div className="animate-spin text-3xl mb-2">⚡</div>
            <p className="text-emerald-400 text-sm animate-pulse">Loading Animation...</p>
          </div>
        </div>
      )}
      
      {/* Animation container */}
      <div 
        ref={containerRef}
        style={{ 
          width: "100%",
          height: "100%",
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        className=""
      />
    </div>
  );
};

export default AnimationLottie;
