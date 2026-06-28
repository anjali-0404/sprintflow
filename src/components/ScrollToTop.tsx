import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // setTimeout ensures scrolling happens after Suspense fallback resolves
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
