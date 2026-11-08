import { TerminalPanel, SectionHeader } from "./TerminalPanel";

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="cat about.md" title="About" />
        <div className="grid lg:grid-cols-3 gap-5">
          <TerminalPanel path="~/about" title="summary.txt" className="lg:col-span-2">
            <p className="text-foreground/85 leading-relaxed">
              Computer Science student at the <span className="text-terminal font-mono">Technical University of Munich</span> with hands-on experience in software engineering, backend development, test automation, and applied AI systems. Working across the full development process, from designing reliable software components and APIs to integrating tools, automating workflows, and deploying practical applications.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Experience includes internal software tools, backend services, QA and test automation, AI-supported development workflows, RAG-based knowledge retrieval, agentic systems, and technical integrations with platforms such as Jira, Confluence, and GitLab. Worked with Python, Java, JavaScript, TypeScript, FastAPI, databases, Docker, CI/CD workflows, and modern AI frameworks.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Interest in building reliable, maintainable systems that solve practical problems across software engineering, automation, and applied AI.
            </p>
          </TerminalPanel>

          <TerminalPanel path="~/about" title="stats.json">
            <ul className="font-mono text-sm space-y-3.5">
              {[
                ["focus", "Software Engineering · Applied AI"],
                ["stack", "Python · Java · TypeScript"],
                ["backend", "FastAPI · APIs · Databases"],
                ["ai", "RAG · Agents · LLMs"],
                ["infra", "Docker · CI/CD"],
                ["edu", "TUM M.Sc. CS"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-3 border-b border-border/50 pb-2 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground text-right">{v}</span>
                </li>
              ))}
            </ul>
          </TerminalPanel>
        </div>
      </div>
    </section>
  );
}
