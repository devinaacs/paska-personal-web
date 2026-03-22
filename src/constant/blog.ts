export type BlogSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedLabel: string;
  sections: BlogSection[];
};

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "agile-advantage-navigating-complexity-through-scrum",
    title: "The Agile Advantage: Navigating Complexity through Scrum",
    summary:
      "A practical reflection on why Scrum helps teams stay adaptive, transparent, and value-focused in fast-changing environments.",
    category: "Agile & Scrum",
    readTime: "8 min read",
    publishedLabel: "Article 01",
    sections: [
      {
        title: "1. The Modern Context: Surviving a VUCA World",
        body: [
          "In today’s landscape, we operate in a VUCA environment defined by Volatility, Uncertainty, Complexity, and Ambiguity. I believe that in such a world, traditional, rigid planning often fails because it cannot account for rapid shifts in information.",
          "By the time a top-down directive reaches the execution level, the situation has often already changed. This is why the Agile Mindset is a critical survival strategy; it replaces the anxiety of perfection with a commitment to continuous adaptation, ensuring we move toward our goals one intentional step at a time.",
        ],
      },
      {
        title: "2. Frameworks: Beyond the Waterfall",
        body: [
          "I see the choice between Waterfall and Agile as a strategic decision based on the nature of the project. While Waterfall works for highly predictable, linear tasks, Agile is built for the unknown.",
          "Guided by the Agile Manifesto and its 12 Principles, this approach prioritizes individuals and interactions over processes and tools. It’s about delivering working solutions frequently and welcoming changing requirements, even late in development, to ensure we are always aligned with the user’s actual needs.",
        ],
      },
      {
        title: "3. The Scrum Ecosystem: Roles and Values",
        body: [
          "A successful Scrum team functions as a balanced ecosystem of three distinct roles.",
          "To me, the Five Core Values of Scrum are not just soft skills. Commitment, Courage, Focus, Openness, and Respect are the operational requirements that allow a team to thrive.",
        ],
        bullets: [
          'The Product Owner: The "value architect" who translates market needs into a prioritized backlog.',
          "The Scrum Master: The guardian of the process who clears blockers and ensures the team stays aligned with Agile principles.",
          "The Development Team: A cross-functional powerhouse of experts who are collectively responsible for technical integrity.",
        ],
      },
      {
        title: "4. The Mechanics of Flow: Pillars and the Backlog",
        body: [
          'The checks and balances of Scrum are found in its Three Pillars: Transparency, Inspection, and Adaptation. These principles make work visible, keep progress reviewable, and help teams pivot when something is not working.',
          "The engine driving this flow is the Product Backlog, a living and dynamic roadmap that is never truly finished. Through regular Backlog Refinement and Relative Estimation, we can turn rough ideas into an execution plan that focuses on size and complexity instead of getting trapped in precise hour-based timing.",
        ],
      },
      {
        title: "5. The Rhythm of Execution: Sprint Events",
        body: [
          "The success of a team depends on a consistent cadence of events. Each Scrum event reinforces alignment, feedback, and momentum across the sprint cycle.",
        ],
        bullets: [
          "Sprint Planning: The moment we transition from what is possible to a committed Sprint Goal.",
          "Daily Scrum: A 15-minute tactical huddle to align on the goal and surface blockers immediately.",
          "Sprint Review: A collaborative session with stakeholders to validate the value of what we’ve built.",
          "Sprint Retrospective: The engine of continuous improvement, where the team inspects its own processes and interpersonal dynamics to become more efficient in the next cycle.",
        ],
      },
      {
        title: "6. Data-Driven Transparency: Burndown and Velocity",
        body: [
          "To manage expectations effectively, I rely on two primary navigational instruments. The Burndown Chart provides a real-time map of remaining effort, acting as an early warning signal if the team is overcommitted.",
          "Meanwhile, Velocity tracks our historical throughput, allowing us to move away from best-guess deadlines and toward a predictable roadmap based on proven performance.",
        ],
      },
      {
        title: "7. Conclusion: Value-Driven Delivery",
        body: [
          "Ultimately, the goal of all these ceremonies and metrics is value-driven delivery. By maintaining a value roadmap, we ensure that daily execution is always linked to a long-term strategic vision.",
          "It is a shift from finishing tasks to solving real problems, ensuring that we are always building the right thing, building it right, and running it right.",
        ],
      },
    ],
  },
  {
    slug: "what-i-learned-from-google-agile-project-management",
    title:
      "What I Learned from Google Agile Project Management — and Why Agile Is More Than Just Moving Fast",
    summary:
      "A reflection on how Agile is not only about speed, but also about sustainability, collaboration, clarity, and continuous improvement.",
    category: "Agile Reflection",
    readTime: "7 min read",
    publishedLabel: "Article 02",
    sections: [
      {
        title:
          "What I Learned from Google Agile Project Management — and Why Agile Is More Than Just Moving Fast",
        body: [
          "After finishing the Google Agile Project Management course, I found myself reflecting on how Agile is often understood in real working environments.",
          "Before taking the course, I mostly saw Agile as a way to move quickly, adapt to change, and keep delivery going. In many teams, that is often what stands out first: fast execution, visible progress, and continuous movement. But through this course, I started to understand Agile in a broader and more meaningful way.",
          "Agile is not just about speed. It is also about sustainability, collaboration, clarity, and continuous improvement.",
        ],
      },
      {
        title: "When Fast Delivery Starts to Feel Unsustainable",
        body: [
          "In one project environment I experienced, the team handled a high volume of work within a fast delivery cycle. On the surface, that looked productive: many tickets were completed, progress looked visible, and delivery kept moving.",
          "But over time, I realized that speed alone is not always a sign of a healthy process. A fast pace can also create challenges around focus, clarity, quality, and sustainability.",
          "That became one of my biggest takeaways from studying Agile more seriously: Agile should not be used only to measure how much work gets done, but also to help teams work in a way that is sustainable, collaborative, and adaptable.",
        ],
      },
      {
        title: "Agile Is Not Only About Delivery Metrics",
        body: [
          "One thing I appreciated from the course was its emphasis on Agile values and principles, not just delivery metrics.",
          "Measures like completed tickets, deadlines, and velocity can be useful, but they do not tell the whole story. Agile also encourages teams to think about sustainable pace, collaboration, continuous improvement, customer value, and team empowerment.",
          "This is especially important in environments shaped by change and uncertainty. That is where the idea of VUCA becomes relevant: volatility, uncertainty, complexity, and ambiguity.",
          "In a VUCA environment, teams cannot rely only on rigid plans. Requirements may evolve, priorities may shift, and stakeholder expectations may change as new information appears. In that kind of situation, Agile works best not only as a framework or process, but as a mindset.",
        ],
      },
      {
        title: "What Agile Practices Can Improve",
        body: [
          "Looking back, I can see how Agile practices such as Sprint Planning, Sprint Review, and Sprint Retrospective can help teams create more clarity, stronger alignment, and healthier ways of working.",
          "Sprint Planning helps teams focus on what is realistic. Sprint Review helps connect delivery to customer value. Retrospectives create space to reflect, improve, and maintain a more sustainable pace.",
          "Together, these practices are not just routines. They are tools that help teams adapt while still protecting quality, collaboration, and team well-being.",
        ],
      },
      {
        title: "Agile Should Support People, Not Exhaust Them",
        body: [
          "One of the most important lessons I took from the course is that Agile is meant to help teams work better together, not simply work more.",
          "A healthy Agile environment should support clearer communication, realistic planning, shared ownership, continuous feedback, and a pace that people can sustain over time. When those things are present, teams are more likely to stay motivated, collaborate effectively, and respond to change without losing direction.",
          "This also affects confidence within the team. When people work in an environment with more clarity, trust, and opportunities to improve, they are more likely to feel engaged and capable in the work they do.",
        ],
      },
      {
        title: "Responding to Change Without Losing Stability",
        body: [
          "Another lesson that stood out to me is that Agile does not mean accepting chaos. It means building a way of working that can respond to change in a structured and collaborative way.",
          "Stakeholder needs will evolve. Requirements may change. Priorities may shift. Those things are normal in product and project environments.",
          "What matters is how the team responds. Agile practices help teams make those changes more manageable by creating opportunities to discuss priorities, review progress, gather feedback, and adjust in a transparent way.",
          "Instead of turning change into confusion, Agile helps turn change into part of the process.",
        ],
      },
      {
        title: "My Biggest Takeaway",
        body: [
          "After finishing the Google Agile Project Management course, my biggest takeaway is this: Agile is not just about fast delivery. It is about delivering value in a way that is sustainable, adaptive, and healthy for the team.",
          "A team can move quickly and still have room to improve. A team can close many tickets and still benefit from more reflection, alignment, and focus on long-term effectiveness. For me, this course helped reframe Agile from being only a delivery approach into something more complete: a mindset for building better teamwork, better processes, and better outcomes.",
          "In the end, that may be the lesson that stayed with me the most: being Agile is not about doing more work faster, but about doing meaningful work in a better way.",
        ],
      },
    ],
  },
];
