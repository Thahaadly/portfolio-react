import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Gunakan timeout kecil agar tidak set-state sinkron di dalam effect
    const timer1 = setTimeout(() => setIsAnimating(true), 0);
    const timer2 = setTimeout(() => setIsAnimating(false), 50);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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
