import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/content";
import { cn } from "@/components/utils";

function accentStyles(accent: "green" | "purple" | "yellow") {
  if (accent === "green") return { ring: "rgba(116,233,210,0.22)", text: "rgb(var(--teal))" };
  if (accent === "purple") return { ring: "rgba(160,140,255,0.22)", text: "rgb(var(--indigo))" };
  return { ring: "rgba(255,219,110,0.18)", text: "rgba(255,219,110,0.95)" };
}

export function ProjectCards() {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-3">
      {projects.map((p) => {
        const a = accentStyles(p.accent);
        return (
          <div key={p.name} className="card p-8">
            <div className="flex items-start justify-between gap-2">
              <div className="h-11 w-11 rounded-xl border border-[rgb(var(--stroke))] bg-[rgba(255,255,255,0.02)] flex items-center justify-center"
                style={{ boxShadow: `0 0 0 6px ${a.ring}` }}
              >
                <div className="h-4 w-4 rounded-sm border-2" style={{ borderColor: a.text }} />
              </div>
              <div className="flex gap-2">
                <a className="navlink" aria-label="GitHub" href={p.links.github ?? "#"} target="_blank" rel="noreferrer"><Github size={18} /></a>
                <a className="navlink" aria-label="Open" href={p.links.live ?? "#"} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold" style={{ color: a.text }}>{p.name}</div>
              <p className="mt-3 subtle text-sm leading-relaxed">{p.blurb}</p>

              <ul className="mt-5 grid gap-2 subtle text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span style={{ color: a.text }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-4 flex items-center justify-between gap-4">
                <div className="text-xs font-mono text-[rgba(190,200,220,0.7)]">{p.stackLine}</div>
                {/*<div className="text-xs font-mono" style={{ color: "rgb(var(--teal))" }}>
                  +{p.extraCount}
                </div>*/}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
