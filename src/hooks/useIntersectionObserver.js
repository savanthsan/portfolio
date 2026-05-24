import { useEffect, useRef, useState } from 'react';

/**
 * A hook that uses the Intersection Observer API to detect when an element is visible on screen.
 * Useful for triggering fade-in animations on scroll.
 */
export function useIntersectionObserver(options = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(currentElement);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement && !triggerOnce) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
}
