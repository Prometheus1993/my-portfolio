'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HoverScaleCardProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

const HoverScaleCard: React.FC<HoverScaleCardProps> = ({
  children,
  className = '',
  scale = 1.03,
  duration = 0.3,
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: scale,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        zIndex: 1
      }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScaleCard;