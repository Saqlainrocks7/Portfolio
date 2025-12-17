"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section className="min-h-[100svh] grid place-items-center">
      <div className="container-max pt-28 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.65, 0.21, 1] }}
            className="inline-flex justify-center"
          >
            <span className="chip">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--teal))" }} />
              const developer = <span style={{ color: "rgb(var(--violet))" }}>"available"</span>;
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.65, 0.21, 1], delay: 0.1 }}
            className="mt-8 text-6xl sm:text-7xl font-semibold tracking-tight"
          >
            Hi, I'm <span className="gradient-name">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            <div className="text-lg sm:text-xl font-medium text-[rgba(220,230,245,0.90)]">
              {profile.role}
            </div>
            <div className="mt-2 subtle">
              {profile.tagline}
            </div>
            <div className="mt-2 text-sm">
              <span style={{ color: "rgb(var(--teal))" }}>{profile.degreeLine}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Get In Touch</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a className="btn !px-4 !py-3" aria-label="GitHub" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a className="btn !px-4 !py-3" aria-label="LinkedIn" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a className="btn !px-4 !py-3" aria-label="Email" href={`mailto:${profile.email}`}><Mail size={18} /></a>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <a href="#experience" className="subtle hover:text-[rgb(var(--text))] transition" aria-label="Scroll down">
              <ChevronDown className="animate-floaty" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
