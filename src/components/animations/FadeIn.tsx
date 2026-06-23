'use client';

import React from 'react';
import { m } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;  // Delay in seconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;  // Duration in seconds
  className?: string;
  once?: boolean;  // Whether to animate only once
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  once = true,
}) => {
  // Simple fade-in animation without scroll detection
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default FadeIn;