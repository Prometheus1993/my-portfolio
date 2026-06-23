'use client';

import React from 'react';
import { m } from 'framer-motion';

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;  // Initial delay before first item appears
  staggerDelay?: number;  // Delay between each child animation
  className?: string;
  once?: boolean;  // Whether to animate only once
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
  once = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {React.Children.map(children, (child) => {
        // Only wrap direct children that aren't already motion components
        if (React.isValidElement(child) && typeof child.props === 'object' && child.props !== null && !('variants' in child.props)) {
          return (
            <m.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {child}
            </m.div>
          );
        }
        return child;
      })}
    </m.div>
  );
};

export default StaggerContainer;