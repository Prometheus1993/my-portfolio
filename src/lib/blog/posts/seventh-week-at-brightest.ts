// src/lib/blog/posts/seventh-week-at-brightest.ts
import { BlogPost } from "../types";

export const seventhWeekAtBrightest: BlogPost = {
  slug: "seventh-week-at-brightest",
  title:
    "Brightest Week 7: A Deep Dive into Refactoring, Single Source of Truth, Context API and a Completely Renewed UI",
  date: "2025-03-24", // Example date - update as needed
  excerpt:
    "This week was perhaps one of the most intensive yet valuable weeks of my internship at Brightest, focusing on deep refactoring, implementing Single Source of Truth principles, using React Context API, and redesigning the UI for optimal user experience.",
  tags: [
    "Internship",
    "Development",
    "Refactoring",
    "React",
    "Context API",
    "UI/UX",
  ],
  readingTime: "5 min read",
  sections: [
    {
      id: "week7-overview",
      title: "Week Overview",
      emoji: "🔍📊",
      content:
        "This week was perhaps one of the most intensive, yet also most valuable weeks of my internship at Brightest so far. While in previous weeks I was mainly focused on rapid development and setting up basic functionalities, this week was entirely dedicated to in-depth refactoring, structural improvements, and applying fundamental best practices like Single Source of Truth (SSOT) and the use of React Context.",
    },
    {
      id: "week7-monday-tuesday",
      title:
        "Monday & Tuesday: Systematic Refactoring and Component Architecture",
      emoji: "🏗️🔧",
      content:
        "At the beginning of the week, it quickly became clear that our existing component architecture wasn't sufficiently organized and consistent to facilitate further expansion and maintenance. The components didn't always have clear or consistent names, and functionalities were often spread across multiple locations, leading to confusion and inefficiency. I decided to conduct a comprehensive audit of our existing codebase and develop a plan for a thorough refactor. In this process, I applied what I learned during my education about the importance of Single Source of Truth (SSOT). Concretely, this means that each piece of data has only one place where it is stored and managed, preventing inconsistencies and bugs. I began by clearly structuring our components according to the principles of a modular architecture. This meant: splitting container and presentational components (containers manage logic and data, while presentational components focus only on UI rendering), implementing Context API (to manage our data centrally and make it accessible to components without endless prop-drilling), and introducing naming conventions (each component received a clear, logical name that exactly reflects its function). This refactoring proved time-consuming but was essential to make our codebase future-proof and scalable. It was worth the effort because it will significantly accelerate future development.",
    },
    {
      id: "week7-wednesday-thursday",
      title: "Wednesday & Thursday: From Local Storage to JSON Server",
      emoji: "💾📡",
      content:
        "Until now, we used Local Storage to store data such as test configurations and repositories. Although simple to implement, this quickly led to problems with consistency, scalability, and reliability. Therefore, I decided to switch to a more robust solution: an external JSON server via db.json. This migration finally allowed us to realize a true Single Source of Truth. This means that all data is now stored in one central location. This not only ensures consistency but also makes it easier to manage, modify, and extend data. Some concrete steps during this process were: setting up a JSON server (creating RESTful API endpoints for CRUD operations) and expanding the Context API (centralizing all API logic within a Context Provider, giving each component easy access to the same consistent data). This was a challenging migration because I also had to consider error handling, asynchronous requests, and properly implementing loading states and error boundaries. But ultimately, this resulted in a much more stable and future-oriented backend integration.",
    },
    {
      id: "week7-friday",
      title: "Friday: UI 2.0 – Redesigning for Optimal User Experience",
      emoji: "🎨🖥️",
      content:
        "At the end of the week, my focus shifted to optimizing the user experience. The existing interface was functional but not intuitive enough. Users often had to guess what their next step should be, leading to frustrations. Therefore, I decided to develop a completely renewed dashboard layout that not only looks better but is especially intuitive and user-friendly. Some key improvements: visual cues (adding clear instructions within the interface), immediate feedback (visualizing storage actions and status updates when generating test code), and UI consistency (all components are now consistent in appearance and behavior, ensuring a smooth user experience). Additionally, I implemented a robust flow for saving test configurations and associated test flows, something that was previously impossible or cumbersome. Users can now easily save, load, and modify multiple test scenarios. These changes are subtle but crucial to give users confidence in the application. Besides the above tasks, I also researched how we could later integrate our application with the existing Brightest portal. Azure Active Directory was particularly important here, as Brightest uses Azure for authentication and authorization. I delved into Azure AD integration (Single Sign-On implementation and token-based authentication) and React libraries for Azure authentication (such as MSAL-react, to facilitate easier integration later). Although we haven't yet concretely started this integration, I now have a clear overview of what we need for it and how we'll approach it technically.",
    },
    {
      id: "week7-reflection",
      title: "Reflection: Valuable Lessons & Future Perspective",
      emoji: "🧠💡",
      content:
        "This week has taught me a tremendous amount on a technical level. Especially the importance of Single Source of Truth and Context API in a professional context has become much clearer now. The refactoring was intense but has greatly improved my understanding of software architecture. Additionally, I realize how essential a well-designed UI is. The user experience ultimately determines how successful our application will be, something I as a developer sometimes still underestimate. Next week, I hope to build on this solid foundation. I want to add more functionalities, make the integration with Azure more concrete, and continue to focus on optimal user experience. I will also concentrate on feedback from users and colleagues to continuously improve quality. This week was intensive, technically challenging, but above all very educational and satisfying. Looking forward to more challenges and learning experiences at Brightest!",
    },
  ],
};
