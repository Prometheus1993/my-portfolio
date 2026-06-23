"use client";

import React from "react";
import { m, AnimatePresence } from "framer-motion";

interface SlideTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number; // Duration in seconds
  delay?: number; // Delay in seconds
  className?: string;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  isActive,
  direction = "fade",
  duration = 0.5,
  delay = 0,
  className = "",
}) => {
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 20; // Distance to animate from in pixels

    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          exit: { y: -distance, opacity: 0 },
        };
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          exit: { y: distance, opacity: 0 },
        };
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: -distance, opacity: 0 },
        };
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: distance, opacity: 0 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <m.div
          className={className}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{
            duration: duration,
            delay: delay,
            ease: "easeOut",
          }}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SlideTransition;
