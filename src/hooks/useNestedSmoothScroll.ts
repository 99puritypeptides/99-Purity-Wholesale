'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

export interface UseNestedSmoothScrollOptions {
  orientation?: 'vertical' | 'horizontal';
  enabled?: boolean;
}

export function useNestedSmoothScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseNestedSmoothScrollOptions = {}
) {
  const { orientation = 'vertical', enabled = true } = options;
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Small delay to ensure DOM is fully painted and ref is bound
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const wrapper = containerRef.current;
      const content = (wrapper.firstElementChild as HTMLElement) || wrapper;

      try {
        const lenis = new Lenis({
          wrapper,
          content,
          duration: 0.9,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth ease-out curve
          orientation,
          gestureOrientation: orientation,
          smoothWheel: true,
          wheelMultiplier: 1.1,
          touchMultiplier: 1.2,
        });

        // Sync with GSAP ticker loop
        const update = (time: number) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(update);

        // Save reference for potential programmatic controls
        (wrapper as any).__lenis = lenis;

        return () => {
          gsap.ticker.remove(update);
          lenis.destroy();
          delete (wrapper as any).__lenis;
        };
      } catch (err) {
        console.warn('Failed to initialize nested Lenis scroll:', err);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [enabled, orientation]);

  return containerRef;
}
