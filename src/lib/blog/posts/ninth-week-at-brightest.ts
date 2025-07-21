// src/lib/blog/posts/ninth-week-at-brightest.ts
import { BlogPost } from "../types";

export const ninthWeekAtBrightest: BlogPost = {
  slug: "ninth-week-at-brightest",
  title:
    "Brightest Week 9: MongoDB Migration, Microsoft Auth and Context Tweaks",
  date: "2025-04-07", // Example date - update as needed
  excerpt:
    "This week we implemented a substantial upgrade to our architecture, completely transitioning from a simple db.json setup to a MongoDB database, while preserving our existing TypeScript API endpoints.",
  tags: ["Internship", "Week 9"],
  category: "Brightest Internship",
  sections: [
    {
      id: "week9-overview",
      title: "Week Overview",
      emoji: "📋🚀",
      content:
        "This week we implemented a substantial upgrade to our architecture. We completely transitioned from a simple db.json setup to a MongoDB database, without replacing our existing TypeScript API endpoints.",
    },
    {
      id: "week9-monday-tuesday",
      title: "Monday & Tuesday: Migration to MongoDB",
      emoji: "🗄️💾",
      content:
        "The week began with preparing the migration from our local JSON server to a real cloud-hosted MongoDB solution. Our endpoints — written in TypeScript — remained largely intact. So the biggest challenge wasn't rebuilding the API, but converting our data layer and logic to a real database environment. Some steps I carried out: replacing all localStorage-based logic with async calls to MongoDB, implementing database connections through existing TS logic (without Express), and ensuring everything stays neatly up-to-date and synchronized with the frontend, and rewriting CRUD logic so everything works seamlessly with Mongo, including validations and secure operations. It felt like laying a new foundation under a house that was already built, without letting it collapse.",
    },
    {
      id: "week9-wednesday",
      title: "Wednesday: Connecting Microsoft Azure Authentication to MongoDB",
      emoji: "🔐☁️",
      content:
        "One of the more complex parts this week was correctly connecting our existing Microsoft Azure login to the new MongoDB backend. We wanted to ensure that: each user automatically gets their own unique MongoDB data, the authentication tokens from Azure are processed correctly in our API calls, and only authenticated users get access to their own test configurations and repositories. For this, I added a check within our context structure based on the Microsoft sub- or oid-claims (depending on how Azure provides them), which are now used as unique identifiers within the database. The entire flow was also equipped with fallback logic and error messages for when something goes wrong in the authentication or fetch process. This not only makes the app more stable but also more usable for colleagues or future users.",
    },
    {
      id: "week9-thursday",
      title: "Thursday: Restructuring Context & Error Handling",
      emoji: "🔄🛠️",
      content:
        "After the migration and auth flow, I shifted my focus to restructuring our Context API. Since the backend now works asynchronously with MongoDB, many existing context methods had to be adapted to async and handle API responses correctly. This also involved edge-cases: such as what happens during a time-out, no data, or bad credentials. Additionally, I added an extensive error-handling structure, so users clearly see what's going wrong and why — and don't just get stuck in a spinner without feedback.",
    },
    {
      id: "week9-friday",
      title: "Friday: Fine-tuning",
      emoji: "✨🔍",
      content:
        "Friday felt a bit like standing on top of Mount Olympus. In 4 days, we rolled out a completely new data source, secure user separation, and error-free flows — something you'd normally spend weeks on. I used the day to: further fine-tune UI experiences (clearer errors, loading states, feedback), improve debugging and logging for future devs, and further clean up and visually clarify our test flow manager.",
    },
    {
      id: "week9-reflection",
      title: "Reflection: Combining Speed and Quality",
      emoji: "💡⚡",
      content:
        "The best thing about this week was that speed didn't come at the expense of quality. By efficiently using our existing TypeScript infrastructure and intelligently integrating Azure authentication, we were able to make huge steps without feeling like we were leaving \"mess\" behind. For me personally, this was one of the most educational weeks of the internship: not just technically (Mongo + Auth + Context), but also in terms of team coordination, ownership, and especially: how much you can achieve when you're hard locked in. Next week I want to focus on additional visual feedback in the UI, testing around edge cases, and making the first preparations for an internal demo.",
    },
  ],
};
