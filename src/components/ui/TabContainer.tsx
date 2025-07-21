// src/components/ui/TabContainer.tsx
// Voeg dit toe aan je huidige TabContainer.tsx code

"use client";

import React, { useState, useRef, useEffect } from "react";
import SlideTransition from "@/components/animations/SlideTransition";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TabContainerProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultTabId?: string;
  transitionDirection?: "up" | "down" | "left" | "right" | "fade";
  transitionDuration?: number;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
}

const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  defaultTabId,
  transitionDirection = "fade",
  transitionDuration = 0.5,
  className = "",
  tabsClassName = "",
  contentClassName = "",
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : "")
  );

  const tabsRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = tabsRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
        setShowLeftScroll(scrollLeft > 0);
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [tabs]);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = tabsRef.current;
        setShowLeftScroll(scrollLeft > 10); // Buffer for small differences
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10); // Buffer for small differences
      }
    };

    const tabsElement = tabsRef.current;
    if (tabsElement) {
      tabsElement.addEventListener("scroll", handleScroll);
      return () => tabsElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);

    // Scroll the active tab into view
    if (tabsRef.current) {
      const tabElement = tabsRef.current.querySelector(
        `[data-tab-id="${tabId}"]`
      ) as HTMLElement;
      if (tabElement) {
        const { offsetLeft, offsetWidth } = tabElement;
        const { scrollLeft, clientWidth } = tabsRef.current;

        // If tab is not fully visible
        if (
          offsetLeft < scrollLeft ||
          offsetLeft + offsetWidth > scrollLeft + clientWidth
        ) {
          const scrollTo = offsetLeft - clientWidth / 2 + offsetWidth / 2;
          tabsRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
      }
    }
  };

  const scrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className={`tab-container ${className}`}>
      {/* Tab Navigation met scroll controls */}
      <div className="relative">
        {showScrollButtons && showLeftScroll && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md p-1 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={16} />
          </button>
        )}

        <div
          ref={tabsRef}
          className={`flex overflow-x-auto scrollbar-hide py-1 mb-6 border-b border-gray-200 dark:border-gray-700 ${tabsClassName}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab-id={tab.id}
              className={`py-2 px-4 text-sm font-medium transition duration-200 flex-shrink-0 whitespace-nowrap ${
                activeTabId === tab.id
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {showScrollButtons && showRightScroll && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md p-1 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Scroll right"
          >
            <FaChevronRight size={16} />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className={`tab-content ${contentClassName}`}>
        {tabs.map((tab) => (
          <SlideTransition
            key={tab.id}
            isActive={activeTabId === tab.id}
            direction={transitionDirection}
            duration={transitionDuration}
          >
            {tab.content}
          </SlideTransition>
        ))}
      </div>
    </div>
  );
};

export default TabContainer;
