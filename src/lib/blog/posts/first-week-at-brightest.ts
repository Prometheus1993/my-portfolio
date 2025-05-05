// src/lib/blog/posts/first-week-at-brightest.ts
import { BlogPost } from "../types";

export const firstWeekAtBrightest: BlogPost = {
  slug: "first-week-at-brightest",
  title: "From Onboarding to Wireframes: My First Week at Brightest",
  date: "2025-02-08", // Example date, adjust as needed
  excerpt:
    "A recap of my first week of internship at Brightest - from onboarding to creating wireframes for a Test Automation UI Framework.",
  tags: ["Internship", "UI/UX", "Development"],
  readingTime: "3 min read",
  sections: [
    {
      id: "monday",
      title: "Monday: First Day at Brightest!",
      emoji: "✨👨‍💻🚀",
      content:
        "Today was my first internship day at Brightest! The morning was all about introductions and onboarding. The project - a Test Automation UI Framework - is still in the initial phase, so we needed to set up some practical matters first, like Trello boards and tools. I didn't get to dive into code yet, but to make good use of my time, I set up my blog website. This makes it easier for my internship supervisor to follow my progress. Additionally, I researched Page Object Models in Selenium, an important concept for my assignment. 🔍📑💡",
    },
    {
      id: "tuesday",
      title: "Tuesday: Waiting, but Productive!",
      emoji: "⏳📖💭",
      content:
        "Today was primarily a day of research. We're still waiting for concrete tasks, so there wasn't much action, but we independently continued to search for relevant information and concepts that could come in handy. 🧠🔎📚",
    },
    {
      id: "wednesday",
      title: "Wednesday: UI Design in Progress",
      emoji: "🎨🖥️📝",
      content:
        "Today I created wireframes and then a mockup in V0.dev to visualize the UI of our application. We presented these to our supervisors to get feedback and understand their vision. Next step: process feedback and refine! 🛠️💬✨",
    },
    {
      id: "thursday-friday",
      title: "Thursday & Friday: Remote Work and Research",
      emoji: "🏡💻🔬",
      content:
        "These days we worked remotely and delved into Playwright and code generation. We went through documentation, created a questionnaire, and made a flowchart for our application. We also implemented some design tweaks. Two productive days from home! 🚀📂✅",
    },
  ],
};
