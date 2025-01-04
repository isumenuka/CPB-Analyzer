import { useState, useEffect } from 'react';
import { breakpoints } from './breakpoints';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= parseInt(breakpoints['2xl'])) {
        setBreakpoint('2xl');
      } else if (width >= parseInt(breakpoints.xl)) {
        setBreakpoint('xl');
      } else if (width >= parseInt(breakpoints.lg)) {
        setBreakpoint('lg');
      } else if (width >= parseInt(breakpoints.md)) {
        setBreakpoint('md');
      } else if (width >= parseInt(breakpoints.sm)) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}