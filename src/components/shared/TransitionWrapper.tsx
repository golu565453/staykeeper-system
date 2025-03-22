
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'slide-right';
}

export const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide':
        return 'animate-slide-in';
      case 'scale':
        return 'animate-scale-in';
      case 'slide-right':
        return 'animate-slide-in-right';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div className={cn(getAnimationClass(), className)}>
      {children}
    </div>
  );
};
