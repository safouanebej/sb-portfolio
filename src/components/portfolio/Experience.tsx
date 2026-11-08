import { TerminalPanel, SectionHeader } from "./TerminalPanel";

const experiences = [
  {
    company: "Technica Engineering GmbH",
    location: "Munich, Germany",
    role: "Working Student — Software Developer",
    dates: "Jul 2025 — Present",
    current: true,
    bullets: [
      "Developed internal software tools and AI-supported applications to improve coding workflows and operational processes.",
      "Implemented agent-based systems with LangFlow, enabling automation across Jira, Confluence, and GitLab.",
      "Built and connected MCP servers to support structured tool access and multi-step agent execution.",
      "Designed and implemented RAG-based pipelines for internal knowledge retrieval and task automation.",
      "Developed a coding agent with iterative tool-calling and planning logic using a planner-executor workflow.",
      "Deployed, integrated, and maintained internal applications supporting production usage.",
    ],
  },
  {
    company: "CarthAgents",
    location: "Startup",
    role: "AI Engineer (Freelance)",
    dates: "Oct 2026 — Present",
    current: true,
    bullets: [
      "Work on the company's AI assistant for auditors, building AI applications with agent workflows (LangGraph), MCP servers, and tools.",
      "Develop the product's Python/FastAPI backend, PostgreSQL data layer, and React/TypeScript interface.",
    ],
  },
  {
    company: "ImmoHero24",
    location: "Munich, Germany",
    role: "Product Owner & Product Manager",
    dates: "Dec 2025 — Sep 2026",
    current: false,
    bullets: [
      "Led product development in a startup environment, coordinating system and website implementation.",
      "Designed and automated internal workflows using n8n, reducing manual workload for business and operations teams.",
      "Defined product requirements and prioritized AI-driven improvements for operational efficiency.",
    ],
  },
  {
    company: "Exaring AG",
    location: "Munich, Germany",
    role: "Working Student — QA Tester",
    dates: "Aug 2024 — Jul 2025",
    bullets: [
      "Executed structured manual test cases for an IPTV streaming platform across multiple device types and configurations.",
      "Tracked, documented, and reported defects in Jira.",
      "Maintained stable and structured test environments.",
    ],
  },
  {
    company: "MicroNova AG",
    location: "Munich, Germany",
    role: "Working Student — Software Developer, Test Automation",
    dates: "Mar 2024 — Aug 2024",
    bullets: [
      "Contributed to development and extension of features in the EXAM tool.",
      "Developed and maintained automated test cases and test suites at GUI and module level.",
      "Supported quality assurance, debugging, and feature validation through structured testing workflows.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="git log --oneline experience/" title="Experience" description="Command history of professional work — most recent first." />

        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-terminal/50 via-border to-transparent hidden sm:block" />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-12">
                <div className="hidden sm:flex absolute left-0 top-5 w-8 h-8 rounded-full border border-border bg-card items-center justify-center font-mono text-xs text-terminal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <TerminalPanel path={`~/exp/${i + 1}`} title={`${exp.company.toLowerCase().replace(/[^a-z]/g, "_")}.log`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <div className="font-mono text-sm text-terminal mt-0.5">
                        @ {exp.company}
                        <span className="text-muted-foreground"> · {exp.location}</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs flex items-center gap-2 shrink-0">
                      {exp.current && <span className="dot dot-g animate-pulse" />}
                      <span className="text-muted-foreground">{exp.dates}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-foreground/85">
                        <span className="font-mono text-terminal shrink-0 mt-0.5">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </TerminalPanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
