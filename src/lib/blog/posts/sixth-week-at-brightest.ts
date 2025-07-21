// src/lib/blog/posts/sixth-week-at-brightest.ts
import { BlogPost } from "../types";

export const sixthWeekAtBrightest: BlogPost = {
  slug: "sixth-week-at-brightest",
  title: "Brightest Week 6: Modularization, Dashboards and Azure Research",
  date: "2025-03-16", // Example date - update as needed
  excerpt:
    "A productive week focused on code refactoring, creating a dashboard layout for code generation, exploring Azure integration for the Brightest portal, and preparing documentation for future implementation.",
  tags: ["Internship", "Week 6"],
  category: "Brightest Internship",
  sections: [
    {
      id: "week6-monday-tuesday",
      title: "Monday & Tuesday: Refactoring and Modularization",
      emoji: "🔧📦",
      content:
        "This week I started with a lot of refactoring. I tackled a large part of our codebase and made it as modular as possible. Components and functions that were previously quite messy are now neatly structured in separate modules. It takes some time, but in the long run, this ensures much easier maintenance and extensions. Additionally, the code is now also much more readable for the entire team, so definitely worth the effort.",
    },
    {
      id: "week6-wednesday",
      title: "Wednesday: Dashboard Layout for Code Generation",
      emoji: "🎨🖥️",
      content:
        "Today I worked on a dashboard layout for the page where test code is generated. I made sure that the most important functions are clearly and intuitively accessible, and are presented in a visually attractive way. I also experimented with saving test configurations and setups for code generation. The saving process is going more smoothly than last week, but there are still a few small bumps to iron out completely.",
    },
    {
      id: "week6-thursday",
      title: "Thursday: Exploring Azure Integration",
      emoji: "☁️🔐",
      content:
        "Today was focused on researching the integration of our application with the Brightest portal. Brightest uses Microsoft Azure for login and authentication, so I've been reading up on how best to approach this. It seems we'll be using Azure Active Directory to enable Single Sign-On (SSO). This was new to me, but very interesting to dive into.",
    },
    {
      id: "week6-friday",
      title: "Friday: Documentation and Preparation",
      emoji: "📑📝",
      content:
        "Finally, today I mainly documented the findings of my Azure research. I also created a clear overview of what we'll be tackling next week, especially regarding the implementation of the Azure login. It was a productive week in which I learned a lot and made clear progress. Next week we'll dive even deeper into the Azure integration, looking forward to it! 🚀",
    },
  ],
};
