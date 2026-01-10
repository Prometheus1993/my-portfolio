"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level?: number; // Optional level (0-100)
  description?: string; // Optional short description
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  level,
  description,
}) => {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl mb-3 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
          {name}
        </h3>

        {level !== undefined && (
          <div className="w-full mt-2 mb-2">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <motion.div
                className="h-1.5 rounded-full bg-primary-500 dark:bg-primary-600"
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        {description && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;
