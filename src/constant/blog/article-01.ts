import { BlogArticle } from "./types";

export const article01: BlogArticle = {
  slug: "agile-advantage-navigating-complexity-through-scrum",
  title: "Understanding the Agile Mindset",
  summary:
    "Agile is often described as a project management approach, but it is better understood as a way of thinking about work.",
  category: "Agile & Scrum",
  readTime: "10 min read",
  publishedLabel: "Article 01",
  layout: "document",
  sections: [
    {
      title: "Understanding the Agile Mindset",
      headingStyle: "hero",
      body: [
        "Agile is often described as a *project management approach*, but it is better understood as a *way of thinking about work*. It is designed for situations where change is normal, priorities shift, and not everything can be predicted perfectly from the beginning. Instead of seeing change as a problem, Agile treats it as something teams should be ready to respond to.",
        "At the center of [[cyan:Agile is a simple idea: **deliver value early, learn from feedback, and improve along the way.**]] Rather than spending too much time building everything upfront, Agile encourages work to be broken into smaller parts so progress can be reviewed regularly. This helps reduce the risk of building something that looks complete on paper but turns out not to be what users actually need.",
        "This is one of the main reasons Agile is often contrasted with *Waterfall*. [[cyan:Waterfall follows a more linear path, where one phase is completed before the next begins.]] That structure can work well when requirements are stable and clearly defined from the start. Agile, on the other hand, uses an *iterative approach*. Work moves in cycles, with room to review, adjust, and improve as new information appears. In other words, Waterfall is more plan-driven, while Agile is more adaptive.",
      ],
      image: {
        src: "/images/blog/agile-vs-waterfall.jpg",
        alt: "Comparison illustration between Agile and Waterfall workflows",
        sourceLabel:
          "Source: https://www.easy8.com/news/waterfall-vs-agile-what-is-the-best-approach-for-a-software-development-project",
        sourceHref:
          "https://www.easy8.com/news/waterfall-vs-agile-what-is-the-best-approach-for-a-software-development-project",
      },
    },
    {
      title: "The Agile Manifesto and Its Core Priorities",
      body: [
        "The foundation of Agile comes from the [[yellow:**Agile Manifesto**]], which introduced four core values. These values are not saying that tools, planning, or documentation are useless. They simply remind teams what should come first.",
      ],
      bullets: [
        "1. **Individuals and interactions** over processes and tools. Strong communication and collaboration matter more than relying too heavily on systems or rigid procedures.",
        "2. **Working software** over comprehensive documentation. In a broader sense, this means useful output matters more than producing excessive documentation without meaningful results.",
        "3. **Customer collaboration** over contract negotiation. Stakeholders should not only appear at the beginning or end of a project, but stay involved throughout the process.",
        "4. **Responding to change** over following a plan. Planning is still important, but plans should guide the work, not trap it.",
      ],
    },
    {
      title: "The 12 Agile Principles in Practice",
      body: [
        "These values become more practical through the **12 Agile principles**, which explain how Agile is applied in real work. A simple way to understand these principles is to group them into four broader themes.",
      ],
      bullets: [
        "1. **Value delivery**. Agile encourages teams to deliver early, deliver often, and keep the work focused on what truly matters.",
        "2. **Business collaboration**. Agile depends on close communication between those building the product and those who understand the business need.",
        "3. **Team culture**. Trust, motivation, communication, and sustainable ways of working are all part of strong Agile teams.",
        "4. **Continuous improvement**. Agile teams are expected to reflect, learn, and keep adjusting rather than repeating the same patterns without question.",
      ],
      image: {
        src: "/images/blog/twelve-agile-principles.png",
        alt: "Infographic showing 12 agile principles in software development",
        sourceLabel:
          "Source: https://www.leanwisdom.com/blog/agile-manifesto-principles/",
        sourceHref:
          "https://www.leanwisdom.com/blog/agile-manifesto-principles/",
      },
    },
    {
      title: "Why Agile Fits a VUCA Environment",
      body: [
        "Agile becomes even more relevant in environments shaped by **VUCA**, which stands for **volatility, uncertainty, complexity, and ambiguity**. In this kind of environment, a rigid plan can become outdated very quickly. Agile offers a more realistic way to move forward because it allows teams to adapt without losing focus on outcomes.",
      ],
      bulletStyle: "arrow",
      bullets: [
        "**Volatility** means things change quickly.",
        "**Uncertainty** means outcomes are hard to predict.",
        "**Complexity** means many factors are connected and influence one another.",
        "**Ambiguity** means situations are not always easy to interpret clearly.",
      ],
    },
    {
      title: "Understanding Scrum: Turning Agile Principles Into Daily Practice",
      headingStyle: "hero",
      body: [
        "[[pink:If Agile is the mindset, then **Scrum** is one of the clearest ways that mindset gets applied in real work.]] [[green:**Scrum is one of the most widely used Agile frameworks because it gives teams a practical structure for handling complex work without becoming too rigid.**]] It helps teams build, deliver, and improve products in environments where change, uncertainty, and risk are part of the job.",
        "One important distinction is that **Agile and Scrum are not the same thing.** [[cyan:Agile is the broader philosophy, while Scrum is a framework that puts Agile ideas into action.]] [[magenta:Scrum gives teams a shared structure, common roles, and repeatable practices that make adaptability easier in everyday work.]] A key idea behind Scrum is that it uses an *iterative and incremental approach*.",
      ],
      bulletStyle: "arrow",
      bullets: [
        "**Iterative** means work happens in repeated cycles rather than one long sequence.",
        "**Incremental** means the product is built piece by piece, with each part adding value over time.",
      ],
    },
    {
      title: "Empiricism and the Three Scrum Pillars",
      body: [
        "This allows the team to check progress regularly, learn from what happens, and improve before going too far in the wrong direction.",
        "Scrum is also built on *empiricism*, which means decisions should be based on real experience, observation, and evidence rather than assumptions. Instead of trying to predict everything perfectly from the start, Scrum treats each cycle of work as a chance to learn.",
        "That is why Scrum is especially useful in uncertain environments: it encourages teams to inspect what is actually happening and respond accordingly.",
        "At the foundation of Scrum are **three pillars: transparency, inspection, and adaptation.**",
      ],
      bullets: [
        "1. **Transparency** means the important parts of the work should be visible to the people responsible for the outcome. Team members, stakeholders, and decision-makers need a clear view of what is happening so trust and alignment can exist. Without transparency, it becomes difficult to make good decisions.",
        "2. **Inspection** means checking progress regularly and deliberately. Scrum does not wait until the very end to discover issues. Instead, it encourages frequent review of work, goals, and outcomes so problems, risks, or unwanted deviations can be noticed earlier.",
        "3. **Adaptation** means making adjustments based on what is learned through inspection. If something is not working well, Scrum expects the team to change it. This could mean improving a process, rethinking priorities, or fixing the way work is being done so the next cycle goes better.",
      ],
      image: {
        src: "/images/blog/scrum-pillars.png",
        alt: "Transparency, inspection, and adaptation in Scrum",
        sourceLabel: "Source: https://www.scrum.org/resources/what-scrum-module",
        sourceHref: "https://www.scrum.org/resources/what-scrum-module",
      },
    },
    {
      title: "The Five Scrum Values",
      body: [
        "To make these pillars work in practice, Scrum also relies on five values: *commitment, courage, focus, openness,* and *respect*.",
      ],
      bullets: [
        "1. **Commitment** means the team is personally invested in achieving its goals. People do not only complete tasks mechanically; they contribute to the success of the team as a whole.",
        "2. **Courage** means being willing to face hard problems, speak honestly, ask for help, and make difficult changes when needed. Scrum requires openness to discomfort because improvement often begins with honesty.",
        "3. **Focus** means keeping attention on the most important work, especially the work that supports the current Sprint goal and overall product direction. It helps teams avoid being pulled in too many directions at once.",
        "4. **Openness** means being transparent about progress, challenges, mistakes, and observations. Scrum works best when information is shared instead of hidden.",
        "5. **Respect** means valuing the skills, ideas, and independence of other team members. Strong collaboration depends on people being willing to listen to one another and work as professionals.",
      ],
    },
    {
      title: "Roles, Vision, and Shared Accountability",
      body: [
        "[[green:Another important part of Scrum is having a clear sense of **mission** and **product vision**.]] A *mission* explains why the work exists and what the team is trying to contribute in a broader sense. A *product vision* gives a picture of what the finished product or outcome should become. These two ideas help create alignment, motivation, and direction, especially when day-to-day work becomes complex.",
        "Scrum teams are also defined by three main roles: the *Scrum Master*, the *Product Owner*, and the *Development Team*.",
      ],
      bullets: [
        "1. **The Scrum Master** is responsible for helping the team use Scrum effectively. This role supports the process, facilitates Scrum events, removes blockers, and helps the team stay productive. A Scrum Master acts more like a coach and facilitator than a traditional manager. Strong organizational skills, communication, leadership, coaching ability, and stakeholder management are especially important in this role.",
        "2. **The Product Owner** is responsible for making sure the team is building the right thing. This role represents the voice of the customer, defines and prioritizes the Product Backlog, and continuously works to maximize product value. A Product Owner needs to be customer-focused, decisive, communicative, flexible, collaborative, and available to support the team regularly.",
        "3. **The Development Team** is responsible for building the product itself. This group is made up of the people doing the work needed to create a usable result in each Sprint. Scrum describes this team as cross-functional, meaning it includes the different skills needed to deliver value, and self-organizing, meaning the team decides how to organize its own work rather than waiting for constant direction from above.",
      ],
      image: {
        src: "/images/blog/scrum-roles.png",
        alt: "Scrum Master, Product Owner, and Development Team roles",
        sourceLabel: "Source: https://kitchen.co/blog/scrum-roles/",
        sourceHref: "https://kitchen.co/blog/scrum-roles/",
      },
    },
    {
      title: "Key Scrum Terms That Shape Daily Work",
      body: ["A few key Scrum terms also start to become important here."],
      bulletStyle: "arrow",
      bullets: [
        "**The Product Backlog** is the main list of features, requirements, improvements, and work items that the team may need to complete in order to reach the product goal. It acts as the single source of truth for what the team might work on.",
        "**A Sprint** is a short, focused cycle of work where the team aims to complete a selected set of backlog items and move closer to a specific goal. Scrum treats each Sprint as a chance to build, learn, and improve.",
        "**The Sprint Backlog** is the set of Product Backlog items chosen for the upcoming Sprint, along with the team’s plan for completing them.",
        "**A Daily Scrum** is a regular team check-in used to stay aligned and inspect progress during the Sprint.",
        "**A timebox** is the fixed maximum amount of time allowed for an event. Scrum uses timeboxes to keep meetings focused and efficient.",
        "**The Definition of Done** is a shared agreement about what must be completed before a piece of work can truly be considered finished. It helps protect quality and reduces confusion about what “done” actually means.",
      ],
      note: [
        "One useful way to understand the three roles is this: the Product Owner builds the right thing, the Development Team builds the thing right, and the Scrum Master helps the team build the thing fast and effectively.",
        "[[magenta:Another strong idea in Scrum is that teams should be small enough to stay effective.]] Scrum teams are intentionally kept relatively small so communication stays clearer and collaboration becomes easier. The material also highlights the value of being *co-located*, where team members work physically close to one another, although virtual collaboration can also work when needed with the right tools and habits.",
        "[[red:In the end, Scrum is not just a list of roles and ceremonies.]] It is a structured way of working that helps Agile become real in daily practice. Its strength comes from combining clear accountability, regular feedback, visible work, and a willingness to adapt. Where Agile provides the philosophy, Scrum provides a rhythm. And for teams working in fast-changing environments, that rhythm can make collaboration, learning, and delivery far more sustainable.",
      ],
      noteStyle: "paragraph",
    },
    {
      title: "Applying Agile Beyond the Team",
      headingStyle: "hero",
      body: [
        "The last part of the course expands Agile beyond Scrum events and team routines. [[green: It shows that Agile is not only about managing work in smaller cycles, but also about helping organizations deliver value, respond to change, and support teams more effectively.]] At this level, Agile becomes less about process alone and more about leadership, collaboration, and continuous improvement.",
        "A key idea here is [[rose:**value-driven delivery**]]. Agile is not just about finishing tasks faster, but about making sure the work actually matters. [[magenta:That means building the right thing, building it well, and making sure it continues to deliver value after release.]] This part also introduces value roadmaps, which connect product vision, roadmap planning, and release plans so teams can stay aligned while still adapting when needed.",
        "[[yellow:Another major focus is **change**. Agile encourages teams to respond to change, but in a structured way.]] Change still needs to be identified clearly, discussed carefully, and reflected in plans, backlogs, and communication. From there, the discussion grows into organizational change, where Agile adoption depends not only on tools or ceremonies, but also on culture, ownership, influence, and people’s willingness to work differently.",
        "[[blue:The final takeaway is that Agile leaders often need to act as **coaches**, not just managers.]] [[green:Supporting an Agile team means giving feedback, creating space for learning, helping teams improve, and navigating common challenges like unstable priorities, incomplete Scrum practices, and team instability.]] In that sense, Agile is not only a framework for delivery, but also a way to build healthier teams and more adaptive organizations.",
      ],
    },
    {
      title: "Closing Thought",
      headingStyle: "section",
      body: [
        "So after learning about Agile from mindset, to Scrum, to implementation, to organizational change, the biggest takeaway is simple: Agile is not about doing everything perfectly, but about staying open, improving continuously, and building what truly matters.",
        "Which is kind of comforting because nobody has it all figured out all at once...",
      ],
      image: {
        src: "/images/blog/clapping-applause-sleeping.gif",
        alt: "Applause meme GIF with a sleeping person in the middle",
      },
    },
  ],
};
