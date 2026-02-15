import { TimelineItem } from "@/components/ui/timeline-item";

const workHistory = [
  {
    title: "Lead Front-end Engineer",
    company: "Propbar",
    flag: "🇬🇧",
    location: "United Kingdom",
    type: "Full-Time",
    dateRange: "Mar 2023 - Present",
    bullets: [
      "Led the front-end work from the project inception.",
      "Maintained a browser extension, widget and web application as a monorepo.",
      "Architected a highly complex real-estate map service.",
      "Implemented a sophisticated data grid of property comparables.",
    ],
  },
  {
    title: "Senior Front-end Engineer",
    company: "LolaDB",
    flag: "🇺🇸",
    location: "United States",
    type: "Contract",
    dateRange: "Jun 2022 - Feb 2023",
    bullets: [
      "Was solving complex problems using the latest Web Standards.",
      "Architected the product's front-end structure.",
      "Accomplished the development of sophisticated UI components.",
      "Developed the open-source component library.",
      "Crafted responsive marketing landing pages.",
    ],
  },
  {
    title: "Senior Front-end Engineer",
    company: "Casago",
    flag: "🇺🇸",
    location: "United States",
    type: "Full-Time",
    dateRange: "Oct 2021 - Apr 2022",
    bullets: [
      "Joined the new company after Nokori's acquisition.",
      "Helped to adapt and embed the new assets into the franchise ecosystem.",
      "Developed the ground for the new property analytics project.",
    ],
  },
  {
    title: "Middle Front-end Engineer",
    company: "Nokori",
    flag: "🇺🇸",
    location: "United States",
    type: "Full-time",
    dateRange: "Jul 2020 - Oct 2021",
    bullets: [
      "Acted as a primary and sole front-end developer of the team.",
      "Was responsible for the development of the single-page application.",
      "Worked on responsive static marketing pages.",
      "Managed the migration from Vue 2 codebase to Vue 3 and Composition API.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Freelance Platforms",
    flag: "🌐",
    location: "Worldwide",
    type: "",
    dateRange: "Jan 2015 - Jul 2020",
    bullets: [
      "Kick-started my developing career as a PSD-to-HTML developer.",
      "Helped dozens of clients around the world to build and deploy their websites.",
      "Worked hard to meet client deadlines.",
      "Matured as a self-taught front-end engineer.",
    ],
  },
];

export function WorkHistorySection() {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-white">Work History</h2>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Below you will find a summary of my past employment experience.
        Additionally, if you require, you can{" "}
        <a
          href="#"
          className="font-bold text-white underline underline-offset-4 transition-colors hover:text-amber-500"
        >
          download my resume
        </a>{" "}
        📄.
      </p>

      <div className="mt-10 space-y-10">
        {workHistory.map((entry, i) => (
          <TimelineItem key={i} {...entry} />
        ))}
      </div>
    </section>
  );
}
