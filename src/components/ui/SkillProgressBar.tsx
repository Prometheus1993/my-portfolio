'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressBarProps {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
  color?: string;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  name,
  level,
  icon,
  color = 'bg-blue-500 dark:bg-blue-600',
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;