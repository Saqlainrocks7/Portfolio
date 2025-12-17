"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { skillGroups, alsoExperienced } from "@/data/content";
import { Code2, Wrench, Database, Cloud } from "lucide-react";

function Icon({ name }: { name: "code" | "wrench" | "db" | "cloud" }) {
  if (name === "code") return <Code2 size={18} style={{ color: "rgb(var(--teal))" }} />;
  if (name === "wrench") return <Wrench size={18} style={{ color: "rgb(var(--teal))" }} />;
  if (name === "db") return <Database size={18} style={{ color: "rgb(var(--teal))" }} />;
  return <Cloud size={18} style={{ color: "rgb(var(--teal))" }} />;
}

export function SkillBars() {
  return (
    <>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <SkillCard key={g.title} g={g} />
        ))}
      </div>

      <div className="mt-10 text-center subtle text-sm">Also experienced with:</div>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {alsoExperienced.map((t) => (
          <span key={t} className="chip !py-2 !px-4">{t}</span>
        ))}
      </div>
    </>
  );
}

function SkillCard({ g }: { g: (typeof skillGroups)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div ref={ref} className="card p-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl border border-[rgb(var(--stroke))] bg-[rgba(255,255,255,0.02)] grid place-items-center">
          <Icon name={g.icon} />
        </div>
        <div className="text-lg font-semibold">{g.title}</div>
      </div>

      <div className="mt-6 grid gap-5">
        {g.items.map((it) => (
          <div key={it.name}>
            <div className="flex items-center justify-between text-sm">
              <div>{it.name}</div>
              <div className="subtle">{it.pct}%</div>
            </div>

            <div className="mt-2 h-2.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={inView ? { width: `${it.pct}%` } : undefined}
                transition={{ duration: 0.9, ease: [0.21, 0.65, 0.21, 1] }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(116,233,210,0.9), rgba(160,140,255,0.9))" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
