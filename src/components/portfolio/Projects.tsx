import { TerminalPanel, SectionHeader } from "./TerminalPanel";

const projects = [
  {
    title: "Incubator-Based Monitoring System for Automated CFU Estimation",
    type: "Bachelor Thesis · AI + Embedded System",
    institution: "Technical University of Munich",
    dates: "2025 — 2026",
    tech: ["Python", "FastAPI", "React", "YOLOv8", "OpenCV", "Raspberry Pi", "Nginx"],
    description:
      "Redesigned an embedded monitoring system for automated bacterial colony estimation. Improved hardware stability and restructured the software architecture for reliability.",
    achievements: [
      "Implemented and deployed a YOLOv8-based detection pipeline under embedded system constraints.",
      "Integrated backend services, computer vision workflows, camera processing, and web interface.",
      "Built a practical AI system combining software engineering, ML, and embedded deployment.",
    ],
  },
  {
    title: "Deep Learning Praktikum",
    type: "Academic AI Project",
    institution: "Technical University of Munich",
    dates: "2025",
    tech: ["PyTorch", "TensorFlow", "NumPy"],
    description:
      "Practical deep learning work focused on neural networks, computational graphs, backpropagation, optimization, CNNs, segmentation, attention-based models, and detection architectures.",
    achievements: [
      "Implemented and trained neural networks on practical tasks.",
      "Applied stochastic gradient descent and modern training strategies.",
      "Worked with computer vision and deep learning model evaluation.",
    ],
  },
  {
    title: "AI Agent Automation Systems",
    type: "Professional AI Engineering Work",
    institution: "Technica Engineering GmbH",
    dates: "Ongoing",
    tech: ["LangFlow", "LangChain", "MCP", "RAG", "FastAPI", "Jira", "Confluence", "GitLab"],
    description:
      "Built internal AI-powered automation systems for knowledge retrieval, task automation, and development workflow support.",
    achievements: [
      "Designed RAG pipelines for internal knowledge retrieval.",
      "Built agentic workflows with structured tool access via MCP.",
      "Integrated AI systems with developer platforms and business workflows.",
    ],
  },
  {
    title: "iLabX Internship — How the Internet Works",
    type: "Networking / Systems Project",
    institution: "Technical University of Munich",
    dates: "2024",
    tech: ["Wireshark", "OSPF", "RIP", "TCP/IP", "IPv6", "TLS"],
    description:
      "Practical networking labs covering signals, transmission media, addressing, network topologies, IPv4/IPv6, subnetting, ICMP, SLAAC, routing, multicast, TCP/UDP, DNS, HTTP, TLS/HTTPS, NAT64/DNS64, and firewall rules.",
    achievements: [
      "Worked with routing protocols including OSPF, RIP, Dijkstra, and Bellman-Ford.",
      "Performed deep-packet inspection and troubleshooting using Wireshark.",
      "Built strong foundations in network protocols and system-level debugging.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          command="ls -la projects/"
          title="Projects"
          description="Selected work across AI engineering, embedded systems, and academic research."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <TerminalPanel
              key={i}
              path={`~/projects/${String(i + 1).padStart(2, "0")}`}
              title={`${p.title.toLowerCase().split(" ").slice(0, 3).join("_").replace(/[^a-z_]/g, "")}.md`}
            >
              <div className="flex flex-col h-full">
                <div className="font-mono text-xs text-amber mb-1">{p.type}</div>
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <div className="font-mono text-xs text-muted-foreground mt-1.5">
                  <span className="text-terminal">@</span> {p.institution}
                  <span className="mx-1.5">·</span>
                  {p.dates}
                </div>

                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{p.description}</p>

                <div className="mt-4">
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    <span className="text-terminal">▸</span> achievements
                  </div>
                  <ul className="space-y-1.5">
                    {p.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground/80">
                        <span className="font-mono text-terminal shrink-0">·</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </TerminalPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
