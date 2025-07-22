"use client";

import { useEffect, useRef, useCallback } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);

  const UPDATE = useCallback((event) => {
    if (!event || !cardsRef.current) return;
    
    // Cancel previous animation frame for better performance
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      cardsRef.current?.forEach((CARD) => {
        if (!CARD) return;
        
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        const inProximity =
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity;

        CARD.style.setProperty('--active', inProximity ? 1 : CONFIG.opacity);

        if (inProximity) {
          const CARD_CENTER = [
            CARD_BOUNDS.left + CARD_BOUNDS.width / 2,
            CARD_BOUNDS.top + CARD_BOUNDS.height / 2,
          ];

          let ANGLE = (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) * 180) / Math.PI;
          if (ANGLE < 0) ANGLE += 360;

          CARD.style.setProperty('--start', ANGLE + 90);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const CONTAINER = containerRef.current;
      const CARDS = CONTAINER?.querySelectorAll(`.glow-card-${identifier}`);
      cardsRef.current = CARDS;

      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      // Style the container
      if (CONTAINER) {
        CONTAINER.style.setProperty('--gap', CONFIG.gap);
        CONTAINER.style.setProperty('--blur', CONFIG.blur);
        CONTAINER.style.setProperty('--spread', CONFIG.spread);
        CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
      }

      window.addEventListener('pointermove', UPDATE, { passive: true });

      return () => {
        window.removeEventListener('pointermove', UPDATE);
      };
    }
  }, [identifier, UPDATE]);

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-emerald-500/30 smooth-transition relative bg-gradient-to-br from-emerald-900/40 via-cyan-900/30 to-slate-900/50 backdrop-blur-sm text-gray-100 rounded-xl hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
