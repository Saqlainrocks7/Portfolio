"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/content";
import { cn } from "@/components/utils";

function AccentBar({ accent }: { accent: "teal" | "indigo" }) {
  const col = accent === "teal" ? "rgba(116,233,210,0.95)" : "rgba(160,140,255,0.95)";
  const col2 = accent === "teal" ? "rgba(116,233,210,0.15)" : "rgba(160,140,255,0.15)";
  return (
    <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: `linear-gradient(${col}, ${col2})` }} />
  );
}

export function ExperienceTimeline() {
  return (
    <div className="relative mt-14">
      {/* center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[rgba(255,255,255,0.08)]" />

      <div className="grid gap-10">
        {experience.map((e, idx) => (
          <TimelineItem key={e.title} e={e} side={idx % 2 === 0 ? "right" : "left"} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  e,
  side
}: {
  e: (typeof experience)[number];
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px", once: true });

  const fromX = side === "left" ? -50 : 50;

  return (
    <div ref={ref} className="relative">
      {/* dot */}
      <div
        className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full"
        style={{ background: "rgb(var(--teal))", boxShadow: "0 0 0 8px rgba(116,233,210,0.08)" }}
      />

      <motion.div
        initial={{ opacity: 0, x: fromX, y: 14, filter: "blur(6px)" }}
        animate={inView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : undefined}
        transition={{ duration: 0.7, ease: [0.21, 0.65, 0.21, 1] }}
        className={cn(
          "card p-8 max-w-xl",
          side === "left" ? "ml-0 mr-auto" : "ml-auto mr-0"
        )}
      >
        <AccentBar accent={e.accent} />
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xl font-semibold">{e.title}</div>
            <div className="mt-1 text-sm" style={{ color: "rgb(var(--teal))" }}>{e.org}</div>
            <div className="mt-2 subtle text-sm flex items-center gap-2">
              <MapPin size={14} /> {e.location}
            </div>
          </div>
          <div className="subtle text-xs flex items-center gap-2 whitespace-nowrap">
            <Calendar size={14} /> {e.start} — {e.end}
          </div>
        </div>

        <ul className="mt-5 grid gap-3 subtle text-sm leading-relaxed">
          {e.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span style={{ color: "rgb(var(--teal))" }}>→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {e.tags.map((t) => (
            <span key={t} className="chip !px-3 !py-1.5 !text-[11px]">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
