"use client";

import { useEffect, useState } from "react";
import { Award, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
}

interface LeetCodeCardProps {
  dict: {
    title: string;
    desc: string;
  };
  username: string;
}

export default function LeetCodeCard({ dict, username }: LeetCodeCardProps) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`/api/leetcode?username=${username}`);
        const data = await res.json();
        if (data.status === "success") {
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const progress = stats ? (stats.totalSolved / (stats.totalQuestions || 1)) * circumference : 0;
  const strokeDashoffset = circumference - progress;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="md:col-span-3 group p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/90 shadow-xl shadow-sky-900/5 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-600">
          <Award className="w-4 h-4 text-amber-500" />
          LeetCode Live Stats
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {dict.title}
        </h3>
        
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
          {dict.desc}
        </p>

        {loading ? (
          <div className="flex items-center justify-center md:justify-start gap-2 pt-2 text-slate-400">
            <Loader2 className="w-5 h-5 animate-spin" /> Загрузка статистики...
          </div>
        ) : (
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold">
              Easy: {stats?.easySolved}/{stats?.totalEasy}
            </span>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold">
              Med.: {stats?.mediumSolved}/{stats?.totalMedium}
            </span>
            <span className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold">
              Hard: {stats?.hardSolved}/{stats?.totalHard}
            </span>
          </div>
        )}
      </div>
      <div className="relative w-full max-w-sm h-44 bg-white/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center shadow-inner overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-2 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-sky-600" />
            <span className="text-xs font-medium">Получаем данные...</span>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  className="stroke-slate-100"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  className="stroke-amber-400 transition-all duration-1000 ease-out"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-extrabold text-slate-900 leading-none">
                  {stats?.totalSolved}
                  <span className="text-[10px] font-normal text-slate-400 block sm:inline">/{stats?.totalQuestions}</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-600 mt-1">✓ Solved</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-center shadow-2xs">
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Easy</div>
                <div className="text-xs font-extrabold text-slate-800">{stats?.easySolved}/{stats?.totalEasy}</div>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-center shadow-2xs">
                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">Med.</div>
                <div className="text-xs font-extrabold text-slate-800">{stats?.mediumSolved}/{stats?.totalMedium}</div>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-center shadow-2xs">
                <div className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Hard</div>
                <div className="text-xs font-extrabold text-slate-800">{stats?.hardSolved}/{stats?.totalHard}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}