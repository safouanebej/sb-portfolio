import { useEffect, useState } from "react";
import { TerminalPanel } from "./TerminalPanel";

const bootLines = [
  { prefix: ">", text: "booting portfolio..." },
  { prefix: ">", text: "loading AI systems..." },
  { prefix: ">", text: "initializing software engineering profile..." },
  { prefix: ">", text: "status: available for AI Engineering / Software Engineering opportunities", highlight: true },
];

export function Hero() {
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState("");
  const tagline = "Building production-oriented AI systems, backend services, RAG pipelines, autonomous agents, and reliable software tools.";

  useEffect(() => {
    if (shown >= bootLines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 450);
    return () => clearTimeout(t);
  }, [shown]);

  useEffect(() => {
    if (shown < bootLines.length) return;
    if (typed.length >= tagline.length) return;
    const t = setTimeout(() => setTyped(tagline.slice(0, typed.length + 1)), 18);
    return () => clearTimeout(t);
  }, [typed, shown]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <TerminalPanel path="~/portfolio" title="system.boot" hover={false} className="scanline-soft">
              <div className="font-mono text-sm space-y-1.5 mb-6 min-h-[120px]">
                {bootLines.slice(0, shown).map((l, i) => (
                  <div key={i} className="reveal">
                    <span className="text-muted-foreground mr-2">{l.prefix}</span>
                    <span className={l.highlight ? "text-terminal" : "text-foreground/90"}>{l.text}</span>
                  </div>
                ))}
                {shown < bootLines.length && <span className="cursor-bar blink" />}
              </div>

              <div className="space-y-3">
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="text-terminal">$</span> whoami
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight glow-text">
                  Safouane Bejaoui
                </h1>
                <p className="font-mono text-sm sm:text-base text-amber">
                  Junior Software Engineer <span className="text-muted-foreground">|</span> Applied AI Engineer <span className="text-muted-foreground">|</span> CS @ TUM
                </p>
                <p className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                  <span className="text-terminal">▸</span> Munich, Germany
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-sans text-base sm:text-lg text-foreground/85 min-h-[4.5rem]">
                  {typed}
                  {shown >= bootLines.length && typed.length < tagline.length && <span className="cursor-bar blink" />}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="btn-terminal btn-terminal-primary">
                  <span>▸</span> view_projects
                </a>
                <a href="#contact" className="btn-terminal">
                  <span>@</span> contact_me
                </a>
              </div>
            </TerminalPanel>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <TerminalPanel path="~/contact" title="meta.info">
              <dl className="font-mono text-sm space-y-3">
                <div>
                  <dt className="text-muted-foreground text-xs">email</dt>
                  <dd className="text-terminal break-all">
                    <a href="mailto:bejaoui.safouane@gmail.com">bejaoui.safouane@gmail.com</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs">linkedin</dt>
                  <dd>
                    <a href="https://www.linkedin.com/in/safouane-bejaoui-568a83231" target="_blank" rel="noreferrer" className="text-accent hover:text-terminal">
                      /in/safouane-bejaoui
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs">github</dt>
                  <dd>
                    <a href="https://github.com/safouanebej" target="_blank" rel="noreferrer" className="text-accent hover:text-terminal">
                      /safouane-bejaoui
                    </a>
                  </dd>
                </div>
              </dl>
            </TerminalPanel>

            <TerminalPanel path="~/status" title="now">
              <div className="font-mono text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="dot dot-g animate-pulse" />
                  <span className="text-foreground/90">available_for_hire</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="text-terminal">▸</span> AI / Software Engineering
                </div>
                <div className="text-muted-foreground">
                  <span className="text-terminal">▸</span> Working Student @ Technica Engineering
                </div>
                <div className="text-muted-foreground">
                  <span className="text-terminal">▸</span> B.Sc. CS @ TUM — graduating 2026
                </div>
              </div>
            </TerminalPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
