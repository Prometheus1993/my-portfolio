// src/lib/blog/posts/fifth-week-at-brightest.ts
import { BlogPost } from "../types";

export const fifthWeekAtBrightest: BlogPost = {
  slug: "fifth-week-at-brightest",
  title: "Brightest Week 5: Small Steps, Big Challenges",
  date: "2025-03-09", // Example date - update as needed
  excerpt:
    "A week focused on UI improvements, working through debugging challenges, researching alternative approaches, and planning ahead despite facing some stubborn technical obstacles.",
  tags: ["Internship", "Development", "UI/UX", "Problem Solving"],
  readingTime: "3 min read",
  sections: [
    {
      id: "week5-monday-tuesday",
      title: "Monday & Tuesday: UI Tweaks and New Features",
      emoji: "🎨🔧",
      content:
        "This week I've been primarily focused on further improvements to the UI. One of the new features I've added is the ability to save different test configurations. This gives users more flexibility to quickly reload their settings. Additionally, I've made the generation of test code visually clearer by improving the interface. However, there's still work to be done here, as it's not yet working exactly as expected.",
    },
    {
      id: "week5-wednesday",
      title: "Wednesday: Debugging and Small Frustrations",
      emoji: "🐛🔥",
      content:
        "Today I was a bit stuck with some persistent bugs. Especially the loading and correct display of saved configurations wasn't going smoothly. I eventually made some progress, but not as much as I would have liked. Fortunately, some colleagues were able to help me with tips for better debugging. It remains frustrating at times, but it's useful to gain extra experience through these challenges.",
    },
    {
      id: "week5-thursday",
      title: "Thursday: Research into Alternative Approaches",
      emoji: "📚💡",
      content:
        "Since I was getting stuck with saving and generating test configurations, I spent today doing deeper research. I looked at how other projects approach this and found interesting methods that I might be able to apply. This led me to explore the use of state management libraries like Redux.",
    },
    {
      id: "week5-friday",
      title: "Friday: Wrapping Up, Reflecting and Planning",
      emoji: "📝🏡",
      content:
        "Today I mainly documented my outstanding issues and created my plans for next week. I've noticed that it's helpful to regularly pause and create an overview. Next week I'll try to apply the alternatives I've found and hopefully overcome the current challenges. Despite a less productive week, I've still learned a lot, especially about dealing with frustrations and looking for new solutions. Ready for next week, hopefully with better results! 🙌🚀",
    },
  ],
};
