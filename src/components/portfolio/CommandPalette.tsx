import { useEffect, useRef, useState } from "react";

const commands: { cmd: string; desc: string; action: () => void }[] = [
  { cmd: "home", desc: "go to top", action: () => scrollTo("home") },
  { cmd: "about", desc: "about me", action: () => scrollTo("about") },
  { cmd: "experience", desc: "work history", action: () => scrollTo("experience") },
  { cmd: "projects", desc: "selected projects", action: () => scrollTo("projects") },
  { cmd: "skills", desc: "tech stack", action: () => scrollTo("skills") },
  { cmd: "education", desc: "education & languages", action: () => scrollTo("education") },
  { cmd: "contact", desc: "get in touch", action: () => scrollTo("contact") },
  { cmd: "email", desc: "open mail client", action: () => (window.location.href = "mailto:bejaoui.safouane@gmail.com") },
  { cmd: "linkedin", desc: "open linkedin", action: () => window.open("https://linkedin.com/in/safouane-bejaoui", "_blank") },
  { cmd: "github", desc: "open github", action: () => window.open("https://github.com", "_blank") },
  { cmd: "help", desc: "show all commands", action: () => {} },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? onClose() : window.dispatchEvent(new CustomEvent("openCommand"));
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = commands.filter((c) => c.cmd.includes(q.toLowerCase()) || c.desc.includes(q.toLowerCase()));

  const exec = (i: number) => {
    const c = filtered[i];
    if (!c) return;
    c.action();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-background/70 backdrop-blur-sm" onClick={onClose}>
      <div className="terminal-panel w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-chrome">
          <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
          <span className="ml-3">~/command</span>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 font-mono text-sm px-2 py-1.5 border-b border-border">
            <span className="text-terminal">$</span>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => { setQ(e.target.value); setIdx(0); }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
                if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
                if (e.key === "Enter") { e.preventDefault(); exec(idx); }
              }}
              placeholder="type a command... (help, projects, skills, contact)"
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/60"
            />
            <span className="cursor-bar blink" />
          </div>
          <ul className="mt-2 max-h-72 overflow-y-auto">
            {filtered.length === 0 && (
              <li className="font-mono text-sm text-muted-foreground p-3">
                <span className="text-destructive">›</span> command not found. type "help"
              </li>
            )}
            {filtered.map((c, i) => (
              <li
                key={c.cmd}
                onMouseEnter={() => setIdx(i)}
                onClick={() => exec(i)}
                className={`font-mono text-sm px-3 py-2 rounded cursor-pointer flex items-center justify-between ${
                  i === idx ? "bg-[oklch(0.82_0.18_165_/_0.1)] text-terminal" : "text-foreground/80"
                }`}
              >
                <span><span className="text-muted-foreground mr-2">▸</span>{c.cmd}</span>
                <span className="text-xs text-muted-foreground">{c.desc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 px-2 pt-2 border-t border-border font-mono text-[10px] text-muted-foreground flex justify-between">
            <span>↑↓ navigate</span><span>↵ execute</span><span>esc close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
