import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalPanelProps {
  title?: string;
  path?: string;
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function TerminalPanel({ title, path, children, className, hover = true }: TerminalPanelProps) {
  return (
    <div className={cn("terminal-panel", hover && "terminal-panel-hover", className)}>
      {(title || path) && (
        <div className="terminal-chrome">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="ml-3 truncate">
            {path && <span className="text-terminal">{path}</span>}
            {title && path && <span className="text-muted-foreground"> — </span>}
            {title && <span>{title}</span>}
          </span>
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function SectionHeader({ command, title, description }: { command: string; title: string; description?: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="font-mono text-sm text-terminal mb-2">
        <span className="text-muted-foreground">$</span> {command}
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight glow-text">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
