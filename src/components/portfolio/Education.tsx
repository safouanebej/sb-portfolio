import { TerminalPanel, SectionHeader } from "./TerminalPanel";

const education = [
  {
    school: "Technical University of Munich",
    degree: "M.Sc. Computer Science",
    location: "Munich, Germany",
    dates: "Oct 2026 — Present",
  },
  {
    school: "Technical University of Munich",
    degree: "B.Sc. Computer Science",
    location: "Munich, Germany",
    dates: "Oct 2021 — Sep 2026",
  },
  {
    school: "DID Berlin",
    degree: "German Language Course — C1, DSH 3",
    location: "Berlin, Germany",
    dates: "2020 — 2021",
  },
  {
    school: "Lycée Sadiki Tunis",
    degree: "Abitur in Science · 17.80/20 (DE equiv. 1.6)",
    location: "Tunis, Tunisia",
    dates: "June 2020",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "German", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="cat education.yml" title="Education & Languages" />

        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 space-y-4">
            {education.map((e, i) => (
              <TerminalPanel key={i} path={`~/edu/${i + 1}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.school}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.dates}</span>
                </div>
                <div className="font-mono text-sm text-terminal mt-1">{e.degree}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">
                  <span className="text-terminal">▸</span> {e.location}
                </div>
              </TerminalPanel>
            ))}
          </div>

          <div className="lg:col-span-2">
            <TerminalPanel path="~/languages" title="locale.cfg">
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between border-b border-border/50 pb-2.5 last:border-0">
                    <span className="font-mono text-sm">{l.name}</span>
                    <span className="font-mono text-xs text-terminal">{l.level}</span>
                  </li>
                ))}
              </ul>
            </TerminalPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
