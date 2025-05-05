// src/lib/blog/posts/second-week-at-brightest.ts
import { BlogPost } from "../types";

export const secondWeekAtBrightest: BlogPost = {
  slug: "second-week-at-brightest",
  title: "Brightest Week 2: From Mock-ups to 11K Code and Snow Days",
  date: "2025-02-16", // Example date - update as needed
  excerpt:
    "My second week at Brightest brought exciting progress: presenting our mock-up, working through unexpected snow days, pushing 11K lines of code, and diving deep into React development.",
  tags: ["Internship", "Development", "Remote Work"],
  readingTime: "4 min read",
  sections: [
    {
      id: "week2-monday",
      title: "Monday: Mock-up Presentation and Setting Up Structure",
      emoji: "💻🚀",
      content:
        "The second week began with the presentation of our mock-up to the project manager. Everything went smoothly, and we received valuable feedback that gave us a clearer picture of the next steps. This helped us to better structure the work. We set up our Trello board and divided the tasks, which provided a good foundation for focused work going forward. It felt great to start the week productively and to have a clear plan.",
    },
    {
      id: "week2-tuesday",
      title: "Tuesday: Working from Home Due to Snow",
      emoji: "❄️🏡☕",
      content:
        "Today I worked from home because it unexpectedly started snowing. With fresh snow at 1°C, it didn't seem wise to ride my motorcycle to work. From home, I had a meeting with our technical lead, in which we discussed the further implementation of the app. While independently searching for information, I started going through the Playwright documentation and asking targeted questions during the meeting. This helped me to work more efficiently and get a clearer direction for the next few days. What I appreciate is that I have the space to do independent research, but support is always available if I get stuck.",
    },
    {
      id: "week2-wednesday",
      title: "Wednesday: Productive Day Full of Code and Collaboration",
      emoji: "💻🔥🚶‍♂️",
      content:
        "Thanks to the clear guidelines from Tuesday, I could fully continue working on the project today. I pushed about 11K of code (quite a lot, haha), mainly for new React components and refactoring existing code. Since I wasn't physically present on Tuesday, I worked mostly alone in the office today, but the atmosphere was relaxed. Later in the day, I went for a walk with colleagues to relax and come up with new ideas. The collaboration within the team is smooth, with plenty of room for discussion and feedback.",
    },
    {
      id: "week2-thursday",
      title: "Thursday: Diving Deep into React",
      emoji: "⚛️💻🔧",
      content:
        "Today I worked mostly independently on developing new features in React. I refined components and made sure the user flow feels more logical. My approach was to first create a plan based on the feedback we received earlier this week. Then I consulted online sources and conducted experiments in a separate branch to test what works best. This helped me to make quick progress. The AGILE methodology we follow really helps to keep the work manageable. By breaking everything down into smaller tasks via Trello, I maintain a good overview and know exactly what I need to work on. Communication with my colleagues is smooth, ensuring that we can quickly discuss any obstacles.",
    },
    {
      id: "week2-friday",
      title: "Friday: Working from Home and Wrapping Up for the Weekend",
      emoji: "🏡☕📈",
      content:
        "Today I also worked from home. The morning started with testing the new features and cleaning up my code. Then I updated the documentation and kept my commits neat to maintain an overview. Reflecting on this week, I'm happy with how the project is taking shape. What I appreciate at Brightest is the structured way of working, despite the informal atmosphere. Everyone has a clear role, from the technical lead to the project manager, which makes it easy to know who to go to with questions. Next week, I want to delve even more into the feedback sessions and see how I can further improve the UI.",
    },
  ],
};
