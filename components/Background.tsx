"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const o1 = useTransform(scrollYProgress, [0, 1], [0.85, 0.55]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* soft vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.65) 78%)"
      }} />

      {/* parallax blobs */}
      <motion.div style={{ y: y1, opacity: o1 }} className="absolute -left-56 top-32 h-[520px] w-[520px] rounded-full blur-[90px]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(116,233,210,0.35), rgba(116,233,210,0) 60%)" }} />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute -right-64 bottom-10 h-[620px] w-[620px] rounded-full blur-[100px]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle at 60% 40%, rgba(160,140,255,0.32), rgba(160,140,255,0) 62%)" }} />
      </motion.div>
    </div>
  );
}
