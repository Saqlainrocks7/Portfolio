import { researchAreas, publications } from "@/data/content";

export function ResearchAreas() {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-3">
      {researchAreas.map((r) => (
        <div key={r.title} className="card p-8">
          <div className="text-lg font-semibold">{r.title}</div>
          <p className="mt-3 subtle text-sm leading-relaxed">{r.desc}</p>
          <div className="mt-6 flex gap-2">
            <span className="chip !px-3 !py-1.5">focus</span>
            <span className="chip !px-3 !py-1.5">methods</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Publications() {
  return (
    <div className="mt-14 grid gap-5">
      {publications.map((p) => (
        <div key={p.title} className="card p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="min-w-0">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="mt-2 subtle text-sm">{p.authors}</div>
              <div className="mt-2 subtle text-sm leading-relaxed">{p.note}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="chip !px-3 !py-1.5">{p.venue}</div>
              <div className="mt-3 subtle font-mono text-sm">{p.year}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
