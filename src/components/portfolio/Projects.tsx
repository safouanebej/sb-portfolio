import { TerminalPanel, SectionHeader } from "./TerminalPanel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const projects = [
  {
    title: "SmartSpacer — Monitoring Web App for Bluetooth Implant Devices",
    type: "Interdisciplinary Project (IDP) · Full-Stack",
    institution: "Technical University of Munich",
    dates: "Jul 2026 — Present",
    tech: ["Python", "FastAPI", "Bluetooth LE", "WebSockets", "React", "TypeScript", "GitLab CI"],
    description:
      "Web application I built on my own to control and monitor Bluetooth implant devices in lab experiments: live sensor data, camera images, and per-experiment data storage.",
    achievements: [
      "Added automatic reconnection across several Bluetooth adapters for long-running experiments.",
      "Built outage tracking with email alerts and a network page with statistics per experiment.",
      "Turned researchers' feedback into regular releases and wrote guides for non-technical users.",
    ],
  },
  {
    title: "Incubator-Based Monitoring System for Automated CFU Estimation",
    type: "Bachelor Thesis · AI + Embedded System",
    institution: "Technical University of Munich",
    dates: "2025 — 2026",
    tech: ["Python", "FastAPI", "React", "YOLOv8", "OpenCV", "Raspberry Pi", "Nginx"],
    description:
      "Redesigned an embedded monitoring system for automated bacterial colony estimation. Improved hardware stability and restructured the software architecture for reliability.",
    achievements: [
      "Collected the training dataset with the system itself, trained the YOLOv8 model, and semi-automated the flow from data capture through training to deployment.",
      "Implemented and deployed a YOLOv8-based detection pipeline under embedded system constraints.",
      "Integrated backend services, computer vision workflows, camera processing, and web interface.",
      "Built a practical AI system combining software engineering, ML, and embedded deployment.",
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
    title: "Academic Prompt Engineering and Responsible AI",
    type: "Academic Workshop",
    institution: "Technical University of Munich",
    dates: "Winter Semester 2025/26",
    tech: ["LLMs", "Prompt Engineering", "Evaluation", "HCI"],
    description:
      "Participated in an academic workshop on prompt engineering, responsible use of large language models, and the legal, ethical, and societal implications of generative AI systems. The course combined hands-on prompting methods with critical analysis of LLM reliability, hallucinations, fairness, transparency, robustness, and responsible deployment.",
    achievements: [
      "Applied prompt engineering techniques for text generation with large language models.",
      "Evaluated prompt effectiveness, accuracy, and hallucination-related risks.",
      "Analyzed responsible AI topics including bias mitigation, transparency, fairness, copyright, and ethical use.",
      "Explored human-computer interaction with LLMs and their use in academic and professional workflows.",
    ],
    tags: ["LLMs", "Prompt Engineering", "Responsible AI", "AI Ethics", "HCI", "Evaluation", "Fairness", "Transparency"],
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
  const leftColumnProjects = projects.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = projects.filter((_, i) => i % 2 === 1);

  const renderProjectCard = (p: (typeof projects)[number], i: number) => (
    <TerminalPanel
      key={i}
      path={`~/projects/${String(i + 1).padStart(2, "0")}`}
      title={`${p.title.toLowerCase().split(" ").slice(0, 3).join("_").replace(/[^a-z_]/g, "")}.md`}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`project-${i}`} className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline">
            <div className="w-full pr-3">
              <h3 className="text-left text-lg font-semibold leading-snug">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(p.tech ?? p.tags ?? []).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-3">
            <div className="font-mono text-xs text-amber mb-1">{p.type}</div>
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TerminalPanel>
  );

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          command="ls -la projects/"
          title="Projects"
          description="Selected work across software engineering, applied AI, backend systems, automation, networking, and academic projects."
        />

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            {leftColumnProjects.map((p, localIndex) => {
              const originalIndex = localIndex * 2;
              return renderProjectCard(p, originalIndex);
            })}
          </div>
          <div className="space-y-4">
            {rightColumnProjects.map((p, localIndex) => {
              const originalIndex = localIndex * 2 + 1;
              return renderProjectCard(p, originalIndex);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
