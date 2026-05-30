import { TerminalPanel, SectionHeader } from "./TerminalPanel";

const groups = [
  {
    name: "ai_ml",
    label: "Artificial Intelligence & ML",
    items: ["Generative AI", "Agentic AI", "LLMs", "RAG", "RAG Pipelines", "LangChain", "LangFlow", "Prompt Engineering", "Fine-tuning", "Autonomous Agents", "TensorFlow", "PyTorch", "Hugging Face", "Computer Vision", "OpenCV", "YOLOv8", "CNNs"],
  },
  {
    name: "languages",
    label: "Programming Languages",
    items: [{ name: "Python", level: "advanced" }, "Java", "JavaScript", "TypeScript"],
  },
  {
    name: "cloud_ops",
    label: "Cloud · MLOps · LLMOps",
    items: ["MLOps", "LLMOps", "CI/CD", "Cloud Deployment", "Docker", "Kubernetes", "Production Systems", "Monitoring", "Observability", "GitLab", "Jenkins"],
  },
  {
    name: "software_dev",
    label: "Software Development",
    items: ["OOP", "Software Integration", "API Development", "Git", "SW Engineering Principles"],
  },
  {
    name: "backend",
    label: "Backend & APIs",
    items: ["FastAPI", "Flask", "Backend Services", "RESTful APIs"],
  },
  {
    name: "databases",
    label: "Databases",
    items: ["PostgreSQL", "SQLite", "MongoDB", "Milvus", "Vector Databases", "Database Design", "Data Modeling"],
  },
  {
    name: "qa",
    label: "Testing & QA",
    items: ["Test Automation", "SW Quality Assurance", "Debugging", "Performance Optimization", "Jira"],
  },
  {
    name: "networking",
    label: "Networking",
    items: ["TCP/IP", "HTTP/HTTPS", "DNS", "IPv4/IPv6", "ICMP", "OSPF", "Routing Fundamentals"],
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
