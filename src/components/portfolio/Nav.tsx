import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "~/home" },
  { id: "about", label: "~/about" },
  { id: "experience", label: "~/experience" },
  { id: "projects", label: "~/projects" },
  { id: "skills", label: "~/skills" },
  { id: "education", label: "~/education" },
  { id: "contact", label: "~/contact" },
];

export function Nav({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-3">
        <div className="terminal-panel flex items-center justify-between px-3 py-2">
          <a href="#home" className="font-mono text-sm flex items-center gap-2">
            <span className="dot dot-g" />
            <span className="text-terminal">safouane@portfolio</span>
            <span className="text-muted-foreground hidden sm:inline">:~$</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "font-mono text-xs px-2.5 py-1.5 rounded transition-colors",
                  active === l.id
                    ? "text-terminal bg-[oklch(0.82_0.18_165_/_0.1)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onOpenCommand} className="btn-terminal text-xs py-1.5 px-2.5 hidden sm:inline-flex">
              <span className="text-terminal">⌘</span> command
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden btn-terminal text-xs py-1.5 px-2.5"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "≡"}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden terminal-panel mt-2 p-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block font-mono text-sm px-3 py-2 rounded",
                  active === l.id ? "text-terminal" : "text-muted-foreground"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
