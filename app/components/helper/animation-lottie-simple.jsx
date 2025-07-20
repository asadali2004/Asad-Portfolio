"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Fallback component using lottie-react
const LottieReact = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px] bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-lg">
      <div className="text-center">
        <div className="animate-spin text-3xl mb-2">⚡</div>
        <p className="text-emerald-400 text-sm">Loading Animation...</p>
      </div>
    </div>
  )
});

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const [useFallback, setUseFallback] = useState(false);

  // Try lottie-react first as it's more reliable
  if (useFallback || typeof window === 'undefined') {
    return (
      <div style={{ width }} className="min-h-[300px]">
        <LottieReact
          animationData={animationPath}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '300px' }}
        />
      </div>
    );
  }

  return (
    <div style={{ width }} className="min-h-[300px]">
      <LottieReact
        animationData={animationPath}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '300px' }}
        onError={() => setUseFallback(true)}
      />
    </div>
  );
};

export default AnimationLottie;
