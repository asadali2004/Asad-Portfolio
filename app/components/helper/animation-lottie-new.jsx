"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import lottie-react with loading state
const LottieReact = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px] bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-lg border border-emerald-500/20">
      <div className="text-center">
        <div className="animate-spin text-3xl mb-2 text-emerald-400">⚡</div>
        <p className="text-emerald-400 text-sm animate-pulse">Loading Animation...</p>
      </div>
    </div>
  )
});

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{ width }} 
        className="h-[300px] flex items-center justify-center bg-gradient-to-br from-emerald-900/10 to-cyan-900/10 rounded-lg border border-emerald-500/20"
      >
        <div className="text-center">
          <div className="text-3xl mb-2 text-emerald-400">🎨</div>
          <p className="text-emerald-400 text-sm">Preparing Animation...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width }} className="min-h-[300px] flex items-center justify-center">
      <LottieReact
        animationData={animationPath}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '300px' }}
        className="max-w-full"
      />
    </div>
  );
};

export default AnimationLottie;
