"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 btn-smooth";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Find the scrollable container
          const scrollContainer = document.querySelector('[role="tabpanel"]')?.parentElement;
          const scrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
          setIsVisible(scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Listen to both window and container scroll
    const scrollContainer = document.querySelector('[role="tabpanel"]')?.parentElement;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => {
    // Scroll the container or window
    const scrollContainer = document.querySelector('[role="tabpanel"]')?.parentElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button 
      className={`${DEFAULT_BTN_CLS} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      onClick={onClickBtn}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
