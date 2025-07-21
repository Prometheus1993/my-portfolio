// src/lib/blog/posts/tenth-week-at-brightest.ts
import { BlogPost } from "../types";

export const tenthWeekAtBrightest: BlogPost = {
  slug: "tenth-week-at-brightest",
  title:
    "Brightest Week 10: Code Generation in TypeScript & C# + Start of Thorough Testing Phase",
  date: "2025-04-13", // Example date - update as needed
  excerpt:
    "This week marked a significant milestone as we finalized our code generation functionality for both TypeScript and C#, created a bridge between the UI and code output, and started the comprehensive testing phase of our application.",
  tags: ["Internship", "Week 10"],
  category: "Brightest Internship",
  sections: [
    {
      id: "week10-monday",
      title: "Monday: Finalizing Code Output Logic",
      emoji: "🧩💻",
      content:
        "The week began with finalizing the last technical puzzle pieces for our code generation functionality. We already had a basic implementation, but it needed to be expanded and cleaned up to deliver effectively usable output within Brightest's test framework. I focused on: optimizing our template logic so generated scripts are built coherently and consistently, supporting different test methods within a single flow, including variable management, and implementing dynamic naming conventions so methods and variables remain clearly readable for the end user.",
    },
    {
      id: "week10-tuesday",
      title: "Tuesday: Bridge System between UI and Code Output",
      emoji: "🌉🔄",
      content:
        "Tuesday was mainly dedicated to improving the interaction between our test flow UI and the code generator. We wanted to ensure that when a user assembles a flow, the generated code appears immediately and correctly corresponds to the chosen steps. Tasks I worked on included: building a preview field where users can directly view the generated code, synchronizing UI data with the generator through our context logic, and implementing an automatic update function for every change in the test flow. This way, users get a real-time sense of control over the final output, which is important for both confidence and ease of use.",
    },
    {
      id: "week10-wednesday",
      title: "Wednesday: Language-specific Validations and Correctness",
      emoji: "🔍📝",
      content:
        "Today I worked on fine-tuning the language-specific differences in the generated code. TypeScript and C# are similar in structure, but have fundamentally different syntax requirements, especially when dealing with selectors, method signatures, and async behavior. Specifically: in TypeScript, we accounted for async/await, the structure of test.describe and test() blocks. In C#, we ensured that methods fit neatly within a NUnit-like structure, including correct indents and naming conventions. At the same time, we built in error detection that indicates when a test flow contains missing elements — preventing users from trying to generate incomplete or incorrect code.",
    },
    {
      id: "week10-thursday",
      title: "Thursday: Documentation & Preparation for Testing Phase",
      emoji: "📚🧪",
      content:
        "With the core of the code generation completed, I spent Thursday on: documenting the code generator architecture, including an overview of the template structure, helper functions, and context integration, preparing test scenarios for different user flows, and setting up a rudimentary test matrix covering the most common combinations of test flows and methods. We also discussed within the team how we want to approach testing the entire application: based on user scenarios, edge cases, and error handling for incomplete data.",
    },
    {
      id: "week10-friday",
      title: "Friday: Start of Testing Phase & First Manual Test Cases",
      emoji: "🧪🔍",
      content:
        "On Friday, we officially began the testing phase of the application. Since the functionalities are now aligned with each other and we generate consistent output, the focus is entirely on: manually going through test flows, with different combinations of methods and input fields, checking if the generated code is truly plug-and-play in the existing Brightest frameworks, verifying that error messages are clear and non-technical, so non-dev users can also work with them, and collecting initial feedback on user experience (UX), such as how intuitive the flow feels and where confusion might arise. We notice that the output is currently effectively directly usable within Brightest's own TypeScript and C# test environments, which is a big step forward towards integration.",
    },
    {
      id: "week10-reflection",
      title: "Reflection",
      emoji: "💭🏆",
      content:
        'This week felt like a major milestone. We now have a system that effectively generates test code that is immediately usable, in two different languages, with support for different flows and configurations. That\'s not only technically impressive but also extremely valuable in the context of test automation for clients. The coming weeks will revolve entirely around validation, edge cases, and user experience, so we deliver not just functional, but also robust and user-friendly software. Our application is gradually evolving from "a proof-of-concept" to "a mature, testable tool" — and that feels good.',
    },
  ],
};
