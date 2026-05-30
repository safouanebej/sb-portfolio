import { TerminalPanel, SectionHeader } from "./TerminalPanel";

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="cat about.md" title="About" />
        <div className="grid lg:grid-cols-3 gap-5">
          <TerminalPanel path="~/about" title="summary.txt" className="lg:col-span-2">
            <p className="text-foreground/85 leading-relaxed">
              Safouane Bejaoui is a Computer Science student at the{" "}
              <span className="text-terminal font-mono">Technical University of Munich</span> with hands-on
              experience in software engineering, backend development, and modern AI systems. He builds and deploys
              AI-powered applications using <span className="font-mono text-amber">FastAPI</span>,{" "}
              <span className="font-mono text-amber">LangChain</span>,{" "}
              <span className="font-mono text-amber">LangFlow</span>, RAG pipelines, vector databases, and autonomous
              agent workflows.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              His work includes production-oriented internal tools and AI automation systems — multi-step agents, MCP
              integrations, and knowledge retrieval systems. He has a strong foundation in MLOps and LLMOps concepts,
              CI/CD, testing, scalable software architecture, Python, Java, SQL/NoSQL databases, Docker, and
              cloud-ready deployments.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              He is comfortable collaborating across technical and business teams to deliver reliable and impactful
              AI solutions in agile environments.
            </p>
          </TerminalPanel>

          <TerminalPanel path="~/about" title="stats.json">
            <ul className="font-mono text-sm space-y-3.5">
              {[
                ["focus", "AI Engineering"],
                ["stack", "Python · FastAPI"],
                ["ai", "RAG · Agents · LLMs"],
                ["infra", "Docker · CI/CD"],
                ["edu", "TUM B.Sc. CS"],
                ["langs", "AR · FR · DE · EN"],
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
