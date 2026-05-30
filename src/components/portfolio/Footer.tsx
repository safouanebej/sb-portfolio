export function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="terminal-panel px-5 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-terminal">$</span> echo "© {new Date().getFullYear()} Safouane Bejaoui"
          </div>
          <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
            <span className="dot dot-g animate-pulse" />
            <span>session_active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
