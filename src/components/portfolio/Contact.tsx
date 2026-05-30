import { FormEvent, useState } from "react";
import { TerminalPanel, SectionHeader } from "./TerminalPanel";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} <${data.get("email")}>`);
    window.location.href = `mailto:bejaoui.safouane@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="contact --init" title="Contact" />

        <div className="grid lg:grid-cols-5 gap-5">
          <TerminalPanel path="~/contact" title="send_message.sh" className="lg:col-span-5">
            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="name" name="name" required placeholder="your_name" />
              <Field label="email" name="email" type="email" required placeholder="you@domain.com" />
              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-1.5">
                  <span className="text-terminal">$</span> message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="// type your message..."
                  className="w-full bg-input/60 border border-border rounded px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-terminal focus:ring-1 focus:ring-terminal/40 resize-none"
                />
              </div>
              <button type="submit" className="btn-terminal btn-terminal-primary">
                <span>▸</span> execute send_message
              </button>
              {sent && (
                <div className="font-mono text-sm text-terminal pt-2">
                  <span className="text-muted-foreground">›</span> opening mail client...
                </div>
              )}
            </form>

            <div className="mt-6 pt-5 border-t border-border font-mono text-sm text-terminal">
              <span className="text-muted-foreground">›</span> transmission ready. Let's build something reliable.
              <span className="cursor-bar blink" />
            </div>
          </TerminalPanel>

          <div className="lg:col-span-5 space-y-4">
            <TerminalPanel path="~/contact" title="channels">
              <dl className="font-mono text-sm space-y-3.5">
                <Channel k="email" v="bejaoui.safouane@gmail.com" href="mailto:bejaoui.safouane@gmail.com" />
                <Channel k="linkedin" v="/in/safouane-bejaoui" href="https://www.linkedin.com/in/safouane-bejaoui-568a83231" />
                <Channel k="github" v="/safouane-bejaoui" href="https://github.com/safouanebej" />
              </dl>
            </TerminalPanel>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block font-mono text-xs text-muted-foreground mb-1.5">
        <span className="text-terminal">$</span> {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-input/60 border border-border rounded px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-terminal focus:ring-1 focus:ring-terminal/40"
      />
    </div>
  );
}

function Channel({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-muted-foreground text-xs">{k}</dt>
      <dd>
        <a href={href} target="_blank" rel="noreferrer" className="text-terminal hover:text-amber break-all">
          {v}
        </a>
      </dd>
    </div>
  );
}
