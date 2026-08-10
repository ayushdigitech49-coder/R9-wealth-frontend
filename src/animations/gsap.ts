import { useEffect } from 'react';
import gsap from 'gsap';

export function useGsapAnimation(effect: (gsapContext: gsap.Context) => void, deps: React.DependencyList = []) {
  useEffect(() => {
    const ctx = gsap.context(effect);
    return () => ctx.revert();
  }, deps);
}
