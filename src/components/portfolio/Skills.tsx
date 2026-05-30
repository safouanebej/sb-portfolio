import { TerminalPanel, SectionHeader } from "./TerminalPanel";

const groups = [
  {
    name: "languages",
    label: "Programming Languages",
    items: [{ name: "Python", level: "advanced" }, "Java", "TypeScript", "JavaScript"],
  },
  {
    name: "software_dev",
    label: "Software Development",
    items: ["OOP", "Software Architecture", "API Development", "Git", "Debugging", "Testing", "Code Review", "Agile Development"],
  },
  {
    name: "backend",
    label: "Backend & APIs",
    items: ["FastAPI", "RESTful APIs", "Backend Services", "API Design", "Authentication"],
  },
  {
    name: "databases",
    label: "Databases",
    items: ["PostgreSQL", "SQLite", "MongoDB", "Database Design", "Data Modeling", "Vector Databases"],
  },
  {
    name: "qa",
    label: "Testing & QA",
    items: ["Test Automation", "SW Quality Assurance", "Debugging", "Performance Optimization", "Test Coverage"],
  },
  {
    name: "cloud_ops",
    label: "Cloud · DevOps · MLOps",
    items: ["Cloud Deployment", "CI/CD", "Docker", "Kubernetes", "MLOps", "Monitoring", "Observability", "GitLab", "Jenkins"],
  },
  {
    name: "ai_ml",
    label: "Artificial Intelligence & ML",
    items: ["LLMs", "RAG", "Prompt Engineering", "Agentic AI", "PyTorch", "TensorFlow", "Hugging Face", "Computer Vision"],
  },
  {
    name: "networking",
    label: "Networking",
    items: ["TCP/IP", "HTTP/HTTPS", "DNS", "IPv4/IPv6", "OSPF", "Routing Fundamentals"],
  },
  {
    name: "frontend",
    label: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="grep -r skills/" title="Skills" description="Toolchain and domains I work in regularly." />

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g) => (
            <TerminalPanel key={g.name} path={`~/skills/${g.name}`}>
              <div className="font-mono text-xs text-muted-foreground mb-3">
                <span className="text-terminal">▸</span> {g.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => {
                  const isObj = typeof it === "object";
                  const name = isObj ? it.name : it;
                  const level = isObj ? it.level : null;
                  return (
                    <span key={name} className="tag">
                      {name}
                      {level && <span className="ml-1.5 text-terminal">· {level}</span>}
                    </span>
                  );
                })}
              </div>
            </TerminalPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
