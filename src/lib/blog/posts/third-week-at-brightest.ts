// src/lib/blog/posts/third-week-at-brightest.ts
import { BlogPost } from "../types";

export const thirdWeekAtBrightest: BlogPost = {
  slug: "third-week-at-brightest",
  title: "Brightest Week 3: Presentations, Optimizations and a Touch of Madrid",
  date: "2025-02-23", // Example date - update as needed
  excerpt:
    "My third week at Brightest featured a productive presentation to the product manager, implementation of UI improvements, code optimization, and a brief trip to Madrid to recharge.",
  tags: ["Internship"],
  readingTime: "3 min read",
  sections: [
    {
      id: "week3-monday",
      title: "Monday: Presentation and UI Improvements",
      emoji: "🎤💻🚀",
      content:
        "Today was focused on our presentation to the product manager. She was satisfied with our progress and asked targeted questions about the project. A surprising turn was that she indicated we might be moving too quickly and that we could take things a bit easier. It's good to pause and reflect on this, because sometimes you're so focused on progress that you don't realize your pace is too high. Besides the presentation, I continued working on UI improvements. I added a progress bar and a counter showing how many repositories have been searched. This makes the experience clearer and more intuitive for the user. Additionally, I implemented lazy loading, so when a user has already searched a repo, the data isn't fetched again. This saves unnecessary requests and makes the app more efficient. All in all, a productive day with both technical progress and a valuable moment of reflection on our pace! ⚡💡",
    },
    {
      id: "week3-tuesday",
      title: "Tuesday: Focus on Optimization and Documentation",
      emoji: "🏡📖🔍",
      content:
        "Today I worked from home and mainly focused on code optimization and documentation. I refactored some of the existing components to make the codebase more organized and to facilitate future extensions. I also took time to update the documentation, giving the team a clear overview of recent changes and implementations. Additionally, I did some research on performance optimizations in React, focusing on memoization and useCallback to prevent unnecessary renders. These are small tweaks, but in the long term, they help make the application more efficient.",
    },
    {
      id: "week3-wednesday-thursday",
      title: "Wednesday & Thursday: Recharging in Madrid",
      emoji: "✈️⚽🍷",
      content:
        "I took these days off and flew to Madrid to watch the Champions League match between Real Madrid and Manchester City live. Amazing atmosphere and a top match! Of course, I also enjoyed the city, the food, and the culture. A mental reset before diving back into work.",
    },
    {
      id: "week3-friday",
      title: "Friday: Back to Work, Bugfixes and Planning",
      emoji: "🏡🐛✅",
      content:
        "Today I worked from home again and mainly focused on bugfixes and planning for next week. I addressed some small issues that had been noted earlier and made a list of tasks we'll focus on next week. I also had a short sync with the team to align on what everyone is working on. Although it was a shorter work week due to my vacation, I was still able to do useful things and the planning for next week is clear! 🚀💡",
    },
  ],
};
