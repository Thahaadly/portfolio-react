import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    // Reset animation trigger
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={
        isAnimating 
          ? 'opacity-0 translate-y-4 transition-none' 
          : 'opacity-100 transition-all duration-500 ease-out'
      }
    >
      {children}
    </div>
  );
}
