// src/lib/blog/posts/fourth-week-at-brightest.ts
import { BlogPost } from "../types";

export const fourthWeekAtBrightest: BlogPost = {
  slug: "fourth-week-at-brightest",
  title: "Brightest Week 4: Brown Bag, Job Fair and Minor Updates",
  date: "2025-03-02", // Example date - update as needed
  excerpt:
    "A lighter week with small application updates, an informative Brown Bag session about Leapwork, attending a job fair at Antwerp Expo, and wrapping up with minor optimization tasks.",
  tags: ["Internship", "Week 4"],
  category: "Brightest Internship",
  sections: [
    {
      id: "week4-monday",
      title: "Monday: Small Updates and Planning",
      emoji: "📋🔧",
      content:
        "Started the week calmly with some minor updates to the application. I focused on fine-tuning the UI and making small bug fixes. Additionally, we went through the planning for the coming days with the team and looked at which features have priority. No major changes today, but useful to maintain an overview.",
    },
    {
      id: "week4-tuesday",
      title: "Tuesday: Brown Bag on Leapwork",
      emoji: "🏡📚🔍",
      content:
        "During the afternoon, I attended a Brown Bag session about Leapwork, a tool that simplifies test automation through no-code and low-code solutions. It was interesting to see how their approach works with block-based flows instead of traditional code. This can be particularly useful for companies that want to implement test automation without requiring extensive technical knowledge. While the concept is cool, I wonder to what extent it's really flexible enough for more complex test scenarios. But it's always interesting to learn about new tools!",
    },
    {
      id: "week4-wednesday",
      title: "Wednesday: Job Fair at Antwerp Expo",
      emoji: "🎓🤝💼",
      content:
        "In the afternoon, we went to the job fair at Antwerp Expo. This was organized by major colleges and universities, and many companies were present. We had the opportunity to talk with various companies, learn more about their work culture, and what profiles they're looking for. Although I'm currently still busy with my internship, it's always useful to get an idea of career opportunities in the IT sector.",
    },
    {
      id: "week4-thursday-friday",
      title: "Thursday & Friday: Minor Tasks and Wrapping Up",
      emoji: "🔧💻🏡",
      content:
        "For the rest of the week, I mainly focused on smaller tasks and optimizations. Cleaned up some code, added to the documentation, and addressed some feedback points from last week. Not the most exciting days, but sometimes those small tweaks are necessary to keep the project tidy. All in all, a week where I didn't program a huge amount, but gained interesting insights through the Brown Bag and the job fair. Next week, full focus on the project again! 🚀",
    },
  ],
};
