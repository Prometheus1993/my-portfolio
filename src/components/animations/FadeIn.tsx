'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  // Define different initial positions based on direction
  let initialY = 0;
  let initialX = 0;
  
  if (direction === 'up') initialY = 20;
  if (direction === 'down') initialY = -20;
  if (direction === 'left') initialX = 20;
  if (direction === 'right') initialX = -20;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: initialY,
        x: initialX 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0 
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;