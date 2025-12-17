import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/content";

export function EducationCards() {
  return (
    <div className="mt-14 grid gap-6">
      {education.map((e) => (
        <div key={e.degree} className="card p-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0">
            <div className="h-12 w-12 rounded-xl border border-[rgb(var(--stroke))] bg-[rgba(255,255,255,0.02)] grid place-items-center">
              <GraduationCap style={{ color: "rgb(var(--teal))" }} />
            </div>
            <div className="min-w-0">
              <div className="text-lg font-semibold truncate">{e.degree}</div>
              <div className="mt-1 text-sm" style={{ color: "rgb(var(--teal))" }}>{e.school}</div>
              <div className="mt-2 subtle text-sm flex items-center gap-2"><MapPin size={14} /> {e.location}</div>
            </div>
          </div>

          <div className="text-right">
            {e.badge ? (
              <div className="inline-flex">
                <span className="chip !bg-[rgba(116,233,210,0.12)] !text-[rgb(var(--teal))] !border-[rgba(116,233,210,0.25)] !py-1.5 !px-3">
                  {e.badge}
                </span>
              </div>
            ) : null}
            <div className="mt-3 subtle text-sm font-mono">{e.dates}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
