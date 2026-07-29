"use client";

import { Code2, Server, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import LeetCodeCard from "./LeetCodeCard";

interface SkillsProps {
  dict: {
    sectionTitle: string;
    frontend: { title: string; desc: string };
    backend: { title: string; desc: string };
    devops: { title: string; desc: string };
    leetcode?: { title: string; desc: string };
  };
}

export default function Skills({ dict }: SkillsProps) {
  const leetcodeDict = dict?.leetcode || {
    title: "Problem Solving & Algorithms",
    desc: "Training algorithms and data structures on LeetCode.",
  };

  const cards = [
    {
      icon: Server,
      title: dict?.backend?.title || "Backend Engineering",
      desc: dict?.backend?.desc || "",
      tags: ["Python", "FastAPI", "Node.js", "NestJS", "PostgreSQL", "Docker"],
    },
    {
      icon: Code2,
      title: dict?.frontend?.title || "Frontend Development",
      desc: dict?.frontend?.desc || "",
      tags: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: Cpu,
      title: dict?.devops?.title || "Architecture & DevOps",
      desc: dict?.devops?.desc || "",
      tags: ["Git", "REST API", "Docker", "Architecture", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="relative z-10 py-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {dict?.sectionTitle || "Skills & Tech Stack"}
        </h2>
        <div className="w-12 h-1 bg-sky-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-xl shadow-sky-900/5 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/80 border border-slate-200/80 rounded-full text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}

        <LeetCodeCard
          dict={leetcodeDict}
          username="azamat2007pro"
        />
      </div>
    </section>
  );
}