import { BlogArticle } from "./types";

export const article02: BlogArticle = {
  slug: "implementing-scrum-in-real-practice",
  title: "Implementing Scrum in Real Practice",
  summary:
    "Understanding Scrum in theory is helpful, but the real challenge begins when work turns into day-to-day execution.",
  category: "Scrum Practice",
  readTime: "9 min read",
  publishedLabel: "Article 02",
  layout: "document",
  sections: [
    {
      title: "Implementing Scrum in Real Practice",
      headingStyle: "hero",
      body: [
        "Understanding Scrum in theory is helpful, but the real challenge begins when the work actually starts. Once the team knows the roles, values, and mindset behind Scrum, the next question becomes more practical: **how does Scrum work in day-to-day execution?** How does an idea become a priority, then a plan, then a completed result?",
        "That is exactly where Scrum implementation begins.",
      ],
      image: {
        src: "/images/blog/scrum-artifacts.png",
        alt: "Scrum artifacts flow from Product Backlog to Sprint work and review",
        sourceLabel:
          "Source: https://targetagility.com/embracing-agile-at-scale-demystifying-safes-artifacts-and-ceremonies/",
        sourceHref:
          "https://targetagility.com/embracing-agile-at-scale-demystifying-safes-artifacts-and-ceremonies/",
      },
    },
    {
      title: "Understanding Scrum Artifacts",
      headingStyle: "subsection",
      body: [
        "One of the most important parts of Scrum is its **artifacts**. Artifacts are the key pieces of work information that help the team stay transparent, focused, and aligned. They show what may be worked on, what is being worked on now, and what has already been completed.",
        "In Scrum, there are **three main artifacts**: the **Product Backlog**, the **Sprint Backlog**, and the **Increment**.",
        "Each artifact also has a related commitment. [[cyan:The **Product Backlog** connects to the **Product Goal**, which gives long-term direction.]] [[green:The **Sprint Backlog** connects to the **Sprint Goal**, which keeps the team focused during the current Sprint.]] [[yellow:The **Increment** connects to the **Definition of Done**, which makes sure everyone shares the same understanding of what “finished” really means.]]",
        "Together, these artifacts make Scrum more than just a process. They turn it into a visible system for planning, focusing, and delivering real progress.",
        "Among these three artifacts, the **Product Backlog** is usually the starting point, because this is where priorities begin to take shape.",
      ],
      bullets: [
        "1. The **Product Backlog** is the complete list of work that may be needed for the product. It includes features, fixes, improvements, and ideas that could bring value to users or the business. This list is always evolving. As feedback comes in and priorities change, the backlog changes too. In simple terms, the Product Backlog answers the question: **what could be worked on next?**",
        "2. The **Sprint Backlog** is a smaller and more focused artifact. It contains the items selected from the Product Backlog for the current Sprint, along with the team’s plan for how those items will be completed. If the Product Backlog shows the bigger picture, the Sprint Backlog shows the team’s current focus. It answers the question: **what is the team working on right now?**",
        "3. The **Increment** is the usable outcome produced during a Sprint. It represents completed work that meets the agreed quality standard and can potentially be released. This matters because Scrum measures progress through real, usable outcomes, not just through effort or activity. Progress is not about how busy the team looks, but about whether something valuable has actually been completed.",
      ],
    },
    {
      title: "The Product Backlog: Where Work Begins",
      headingStyle: "subsection",
      body: [
        "A big part of implementing Scrum starts with the **Product Backlog**. This is where the team captures the work that may need to be done, whether it is a new feature, an improvement, a fix, or some other important task. But the Product Backlog is not just a basic to-do list. It is a **living list of priorities** that changes over time.",
        "As the product evolves, new needs appear, priorities shift, and some items become clearer than others. The backlog grows, adjusts, and gets refined continuously so the team always has a clear view of what matters most.",
        "[[magenta:A useful backlog is not just a collection of ideas. Each item should be meaningful enough to guide action.]] [[yellow:That is why backlog items usually include a short **description**, the **value** they bring, their **priority**, and an **estimate of effort**.]] This makes the backlog not only a list of work, but also a tool for decision-making. [[green:It helps answer an important question: **what should be worked on next, and why?**]]",
      ],
    },
    {
      title: "Writing User Stories and Epics",
      headingStyle: "subsection",
      body: [
        "One of the most common ways to describe backlog items is through **user stories**. A user story keeps the work centered on the user rather than just the task. Instead of writing technical requests too early, the story is framed from the user’s point of view:",
        "**As a [user], I want [something], so that [benefit].**",
        "This format may look simple, but it does something important. It keeps the focus on value. [[green:It reminds the team that features are not built just because they can be built, but because they should help someone achieve something meaningful.]]",
        "User stories become even stronger when they include **acceptance criteria**. These are the conditions that define what success looks like. In practice, acceptance criteria help prevent confusion by making it clear what must be true before the story can be considered complete. Without them, “done” can mean different things to different people.",
        "A common way to check the quality of a user story is through the **INVEST** framework. A strong story should be:",
      ],
      bulletStyle: "unordered",
      bullets: [
        "**Independent**",
        "**Negotiable**",
        "**Valuable**",
        "**Estimable**",
        "**Small**",
        "**Testable**",
      ],
      note: [
        "This helps keep stories practical, clear, and realistic enough to fit into Sprint work.",
        "When the work is too large to fit into one story, it can be grouped into an **epic**. [[cyan:An epic is a bigger body of work made up of several smaller user stories.]] If a user story is one step, an epic is more like the whole journey. This helps teams organize larger ideas without losing clarity.",
      ],
      noteStyle: "paragraph",
    },
    {
      title: "Backlog Refinement: Keeping Work Ready",
      headingStyle: "subsection",
      body: [
        "Of course, creating backlog items is only the beginning. They also need regular care, and that is where **backlog refinement** comes in.",
        "[[yellow:Backlog refinement is the ongoing process of reviewing backlog items to make sure they are clear, relevant, prioritized, and ready for future Sprints. It is the team’s way of preventing the backlog from becoming outdated, vague, or cluttered.]]",
        "This process often includes breaking large items into smaller ones, clarifying unclear requirements, adjusting priorities, and making sure upcoming items are in a workable state. In many ways, refinement is what keeps planning realistic. Without it, Sprint Planning becomes much harder because the team is trying to work with items that are still too fuzzy.",
        "Refinement helps turn the backlog from a rough list of ideas into something the team can actually act on.",
      ],
    },
    {
      title: "Estimating the Work",
      headingStyle: "subsection",
      body: [
        "Another important part of implementation is **effort estimation**. Scrum does not usually focus on estimating exact hours too early, because that can create a false sense of certainty. Instead, Scrum teams often estimate work **relatively**.",
        "The real question becomes: **how big does this feel compared to other work?**",
        "That is why methods like **T-shirt sizes** and **story points** are so common.",
        "With **T-shirt sizes**, work is estimated using labels like small, medium, or large. It is simple and useful when the team wants a quick, lightweight way to compare items.",
        "[[magenta:**Story points** go a bit deeper. Instead of measuring exact time, they reflect a combination of effort, complexity, and uncertainty.]] This makes them more flexible, especially when work is hard to predict precisely. The goal is not perfect forecasting. The goal is shared understanding.",
        "[[cyan:Techniques like **Planning Poker**, **dot voting**, and other group estimation approaches help teams discuss work together rather than leaving sizing to one person’s guess.]] This matters because estimation in Scrum is not just about assigning numbers. It is also about surfacing hidden complexity, creating alignment, and making planning more realistic before work begins.",
      ],
      image: {
        src: "/images/blog/estimation-techniques.jpeg",
        alt: "Estimation techniques such as planning poker, T-shirt sizing, and fibonacci sequence",
        sourceLabel:
          "Source: https://www.linkedin.com/posts/akshit-dawar_agile-scrum-businessanalysis-activity-7329639588304404488-uQBS/",
        sourceHref:
          "https://www.linkedin.com/posts/akshit-dawar_agile-scrum-businessanalysis-activity-7329639588304404488-uQBS/",
      },
    },
    {
      title: "Scrum Events: Creating a Working Rhythm",
      headingStyle: "subsection",
      body: [
        "Once backlog items are clear enough and estimates are in place, Scrum moves into its working rhythm through **Scrum events**.",
        "At the center is the [[yellow:**Sprint**]], a fixed period of focused work where the team aims to complete a meaningful set of backlog items. The Sprint creates momentum. It gives the team a short-term goal and a time boundary, which helps turn broad priorities into real execution.",
        "Before the Sprint begins, the team holds [[yellow:**Sprint Planning**]]. This is where priorities are translated into a practical plan. The team decides what it can realistically deliver and how that work will be approached. This makes Sprint Planning more than just a scheduling session. It is where intention becomes commitment.",
        "During the Sprint, the [[yellow:**Daily Scrum**]] helps the team stay aligned. It is a short daily check-in, but its purpose is not to produce long status reports. Its purpose is to make progress visible, uncover blockers early, and keep the team moving together. When done well, it creates rhythm, visibility, and shared awareness.",
        "At the end of the Sprint comes the [[yellow:**Sprint Review**]]. This is where the team looks at what has been completed and gathers feedback from stakeholders. It is an important reminder that Scrum is not only about finishing tasks, but about checking whether the work actually moves the product in the right direction.",
        "Then comes the [[yellow:**Sprint Retrospective**]], which shifts the focus inward. Instead of reviewing the product, the team reviews its own way of working. What went well? What felt difficult? What should be improved next time? This is one of the clearest examples of Agile thinking in action, because it turns improvement into a regular habit instead of something the team only discusses when problems become serious.",
      ],
    },
    {
      title: "Releasable Increment vs Minimum Viable Product",
      headingStyle: "subsection",
      body: [
        "One useful distinction in Scrum is the difference between a **Releasable Increment** and a **Minimum Viable Product (MVP)**.",
      ],
      bullets: [
        "1. [[cyan:A **Releasable Increment** is a completed, usable piece of work produced during a Sprint.]] It means the work is in a state that could be released if needed. It is the result of Sprint execution and should meet the agreed **Definition of Done**.",
        "2. [[magenta:An **MVP**, on the other hand, is the simplest version of a product that still delivers enough value to test an idea in the real world.]] It is usually more about learning from the market as early as possible with the least necessary investment.",
      ],
      note: [
        "They are related, but not the same. One is about the usable output of Sprint work, while the other is about validating a product idea quickly.",
      ],
      noteStyle: "paragraph",
    },
    {
      title: "Scrum Tools: Making Progress Visible",
      headingStyle: "subsection",
      body: [
        "As Scrum work continues, teams also need tools to understand progress more clearly. This is where **velocity**, **burndown charts**, **Kanban boards**, and collaboration tools become useful.",
      ],
      image: {
        src: "/images/blog/scrum-board.png",
        alt: "Scrum board with backlog, in-progress work, done columns, and burndown chart",
        sourceLabel: "Source: https://draft.io/example/scrum-board",
        sourceHref: "https://draft.io/example/scrum-board",
      },
      note: [
        "**Velocity** shows how much work a team usually completes in a Sprint, often measured in story points. Its purpose is not to rank productivity like a scoreboard. It is much more useful as a planning aid. Over time, velocity helps the team make better forecasts about how much work can probably fit into future Sprints.",
        "A **burndown chart** shows how much work remains over time. It helps the team quickly see whether work is progressing as expected or whether something may be slowing things down. It is not there to create pressure. It is there to support visibility.",
        "The module also introduces **Kanban boards**, which are helpful for making work more transparent. A Kanban board visually shows where work is sitting, whether it is waiting, currently in progress, or already done. Even in Scrum teams, Kanban boards can be very useful because they make flow easier to see. When work becomes visible, coordination becomes easier too.",
        "Finally, Scrum also depends on having the right tools for **transparency and collaboration**. Work management platforms, shared documents, visual boards, and communication tools all help Scrum function more effectively. The tool itself is not the goal, but it should make the work easier to understand, discuss, and manage as a team.",
      ],
      noteStyle: "paragraph",
    },
    {
      title: "Closing Thought",
      headingStyle: "subsection",
      body: [
        "In the end, implementing Scrum is really about making work visible, structured, and adaptable.",
      ],
      bulletStyle: "unordered",
      bullets: [
        "The **Product Backlog** gives direction.",
        "The **Sprint Backlog** gives focus.",
        "The **Increment** shows real progress.",
        "User stories connect the work to user value.",
        "Refinement keeps priorities ready.",
        "Estimation supports realistic planning.",
        "Scrum events create a repeatable rhythm.",
        "And tools like burndown charts, velocity, and Kanban boards make progress easier to see.",
      ],
      note: [
        "That is what makes Scrum feel practical. It takes broad Agile ideas and turns them into a working system that teams can actually use every day.",
      ],
      noteStyle: "paragraph",
      image: {
        src: "/images/blog/clap-cinema.gif",
        alt: "Cinema applause GIF at the end of the article",
      },
    },
  ],
};
