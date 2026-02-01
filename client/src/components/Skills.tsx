import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

// ─── PROJECT BADGE CONFIG ───────────────────────────────────────────
const PROJECT_STYLES: Record<string, { bg: string, border: string, text: string, dot: string }> = {
  NammaPG: { bg: "#00d4ff15", border: "#00d4ff35", text: "#00d4ff", dot: "#00d4ff" },
  CMS: { bg: "#a78bfa15", border: "#a78bfa35", text: "#a78bfa", dot: "#a78bfa" },
  Vaultera: { bg: "#34d39915", border: "#34d39935", text: "#34d399", dot: "#34d399" },
  Kodnest: { bg: "#fb923c15", border: "#fb923c35", text: "#fb923c", dot: "#fb923c" },
  Academic: { bg: "#64748b15", border: "#64748b35", text: "#64748b", dot: "#64748b" },
  AI: { bg: "#818cf815", border: "#818cf835", text: "#818cf8", dot: "#818cf8" },
};

// ─── SKILL DATA ──────────────────────────────────────────────────
const skillsData = [
  {
    category: "Programming Languages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "#00d4ff",
    skills: [
      { name: "Java", projects: ["Kodnest", "NammaPG"] },
      { name: "JavaScript", projects: ["Vaultera", "CMS"] },
      { name: "C", projects: ["Academic"] },
    ],
  },
  {
    category: "Backend & Web",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "#a78bfa",
    skills: [
      { name: "Spring Boot", projects: ["NammaPG"] },
      { name: "Node.js / Express", projects: ["CMS", "Vaultera"] },
      { name: "RESTful APIs", projects: ["NammaPG", "CMS", "Kodnest"] },
      { name: "Auth & RBAC", projects: ["NammaPG", "CMS", "Vaultera"] },
    ],
  },
  {
    category: "Databases & ORM",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    color: "#34d399",
    skills: [
      { name: "MySQL", projects: ["NammaPG", "Vaultera"] },
      { name: "PostgreSQL", projects: ["CMS"] },
      { name: "Hibernate (JPA)", projects: ["NammaPG"] },
      { name: "Prisma", projects: ["CMS"] },
    ],
  },
  {
    category: "System Concepts",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    color: "#fb923c",
    skills: [
      { name: "DSA", projects: ["Academic"] },
      { name: "OOP", projects: ["Academic", "Kodnest"] },
      { name: "System Design", projects: ["NammaPG", "CMS"] },
      { name: "API Design", projects: ["NammaPG", "CMS", "Kodnest"] },
    ],
  },
  {
    category: "Tools & Practices",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    color: "#f472b6",
    skills: [
      { name: "Git & GitHub", projects: ["NammaPG", "CMS", "Vaultera", "Kodnest"] },
      { name: "Docker", projects: ["CMS"] },
      { name: "Postman", projects: ["NammaPG", "CMS", "Kodnest"] },
    ],
  },
  {
    category: "AI-Assisted Engineering",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
      </svg>
    ),
    color: "#818cf8",
    skills: [
      { name: "Claude", projects: ["Logic & Architecture"] },
      { name: "Perplexity", projects: ["Technical Research"] },
      { name: "Grok", projects: ["Ecosystem Analysis"] },
      { name: "Napkin.ai", projects: ["Visual Explanations"] },
      { name: "NotebookLM", projects: ["Insights & Docs"] },
    ],
  },
];

const legendItems = [
  { key: "NammaPG", label: "NammaPG" },
  { key: "CMS", label: "CMS" },
  { key: "Vaultera", label: "Vaultera" },
  { key: "Kodnest", label: "Kodnest (Internship)" },
  { key: "Academic", label: "Academic" },
];

// ─── FLOATING PARTICLES ─────────────────────────────────────────────
function Particles() {
  const dots = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {dots.map((i) => {
        const size = 1.5 + (i % 3);
        const left = (i * 5.1) % 100;
        const delay = (i % 5) * 1.2;
        const dur = 7 + (i % 4) * 2.5;
        return (
          <div key={i} className="absolute rounded-full opacity-20" style={{
            left: `${left}%`,
            bottom: -10,
            width: size, height: size,
            background: `hsl(${(i * 41) % 360}, 55%, 58%)`,
            animation: `drift ${dur}s linear ${delay}s infinite`,
          }} />
        );
      })}
      <style>{`
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0);   opacity: 0; }
          8%   { opacity: 0.18; }
          50%  { transform: translateY(-55vh) translateX(24px); }
          92%  { opacity: 0.18; }
          100% { transform: translateY(-115vh) translateX(-18px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ─── PROJECT BADGE ──────────────────────────────────────────────────
function ProjectBadge({ label }: { label: string }) {
  const s = PROJECT_STYLES[label] || PROJECT_STYLES.AI;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border" style={{
      background: s.bg, borderColor: s.border,
    }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: s.text, fontFamily: "'JetBrains Mono', monospace" }}>
        {label === "Kodnest" ? "Kodnest" : label}
      </span>
    </span>
  );
}

// ─── SKILL ROW ──────────────────────────────────────────────────────
function SkillRow({ name, projects, color, rowIndex }: { name: string, projects: string[], color: string, rowIndex: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: rowIndex * 0.05 }}
      viewport={{ once: true }}
      className="flex items-center justify-between gap-4 py-2 px-3 rounded-lg transition-colors duration-200 cursor-default"
      style={{ background: hovered ? "#1e293b" : "transparent" }}
    >
      <div className="flex items-center gap-3 min-w-[120px]">
        <div className="w-1.5 h-1.5 rounded-full transition-all duration-300" style={{
          background: hovered ? color : "#334155",
          boxShadow: hovered ? `0 0 8px ${color}` : "none",
        }} />
        <span className="text-sm font-semibold tracking-wide transition-colors duration-300" style={{
          color: hovered ? "#f1f5f9" : "#94a3b8",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {name}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 justify-end">
        {projects.length > 0 ? (
          projects.map((p) => <ProjectBadge key={p} label={p} />)
        ) : (
          <span className="text-[10px] font-bold text-slate-600 border border-slate-700/50 border-dashed rounded-full px-2 py-0.5 uppercase tracking-widest">
            Core
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── CATEGORY CARD ──────────────────────────────────────────────────
function CategoryCard({ data, cardIndex }: { data: any, cardIndex: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: cardIndex * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden"
      style={{
        background: hovered ? "#1a2638" : "#121c2c",
        borderColor: hovered ? `${data.color}44` : "#1e293b",
      }}
    >
      {/* Background radial glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-40 blur-3xl pointer-events-none transition-opacity duration-500" style={{
        background: `radial-gradient(circle, ${data.color} 0%, transparent 70%)`,
        opacity: hovered ? 0.6 : 0.2,
      }} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-500" style={{
          background: `${data.color}11`,
          borderColor: `${data.color}33`,
          color: data.color,
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)"
        }}>
          {data.icon}
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: data.color, fontFamily: "'JetBrains Mono', monospace" }}>
            {data.category}
          </h3>
          <motion.div
            className="h-0.5 rounded-full"
            animate={{ width: hovered ? 40 : 20 }}
            style={{ background: `linear-gradient(90deg, ${data.color}, transparent)` }}
          />
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-1">
        {data.skills.map((skill: any, i: number) => (
          <SkillRow
            key={skill.name}
            name={skill.name}
            projects={skill.projects}
            color={data.color}
            rowIndex={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── MAIN SECTION ───────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-background py-24 px-4 border-t border-slate-800/50 overflow-hidden">
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[0.3em] font-mono mb-4 block">
            {"<technical_arsenal />"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 tracking-tight">
            Proving My Expertise
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12">
            Every technical skill listed here has been applied in production-grade projects,
            academic deep-dives, or professional training environments.
          </p>

          {/* Legend Grid */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-2 self-center">Used In:</span>
            {legendItems.map((item) => (
              <ProjectBadge key={item.key} label={item.key} />
            ))}
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, i) => (
            <CategoryCard key={cat.category} data={cat} cardIndex={i} />
          ))}
        </div>
      </div>

      {/* Global Style Inject */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
}
