"use client";

import React, { useState } from "react";
import TabTransition from "@/components/animations/TabTransition";

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

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <div className={`tab-container ${className}`}>
      {/* Grid layout op mobiel, flex op grotere schermen */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap mb-6 border-b border-gray-200 dark:border-gray-700 ${tabsClassName}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-sm font-medium whitespace-nowrap transition duration-200 ${
              activeTabId === tab.id
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`tab-content ${contentClassName}`}>
        {tabs.map((tab) => (
          <TabTransition
            key={tab.id}
            isActive={activeTabId === tab.id}
            direction={transitionDirection}
            duration={transitionDuration}
          >
            {tab.content}
          </TabTransition>
        ))}
      </div>
    </div>
  );
};

export default TabContainer;
