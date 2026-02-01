import { Code, Database, Server, MapPin, GraduationCap, Cpu, Globe } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background border-t border-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto" />
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Main Bio (Span 2) */}
          <ScrollReveal className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-4xl">👋</span> Who I Am
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm an <strong className="text-blue-400">Electronics and Communication Engineering graduate (2025)</strong> from S.D.M College of Engineering, Dharwad.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey is driven by a passion for <strong className="text-white">building scalable backend systems</strong>. I specialize in designing robust APIs, optimizing database schemas, and architecting secure server-side applications that solve real-world problems.
            </p>
          </ScrollReveal>

          {/* Card 2: Location & Status (Span 1) */}
          <ScrollReveal className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
            <div className="bg-blue-500/20 p-4 rounded-full mb-4 text-blue-400">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Based In</h4>
            <p className="text-gray-300 text-lg">Bangalore, India</p>
            <div className="mt-6 flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Open to opportunities</span>
            </div>
          </ScrollReveal>

          {/* Card 3: Education (Span 1) */}
          <ScrollReveal className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-gray-800/30">
              <GraduationCap className="w-32 h-32 transform rotate-12" />
            </div>
            <GraduationCap className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-1">Engineering Graduate</h4>
            <p className="text-gray-400 text-sm mb-4">Batch of 2025</p>
            <p className="text-gray-300 font-medium">S.D.M College of Engineering & Technology</p>
            <p className="text-sm text-gray-500 mt-2">Dharwad, Karnataka</p>
          </ScrollReveal>

          {/* Card 4: Technical Focus (Span 2) */}
          <ScrollReveal className="md:col-span-2 glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-400" />
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-white">Backend Systems</h4>
                </div>
                <p className="text-sm text-gray-400">Microservices, RESTful APIs, Node.js & Spring Boot Architectures.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <h4 className="font-semibold text-white">Database Design</h4>
                </div>
                <p className="text-sm text-gray-400">Schema Normalization, SQL Optimization, MongoDB & MySQL.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-white">Clean Code</h4>
                </div>
                <p className="text-sm text-gray-400">MVC Pattern, RBAC Implementation, Maintainable Codebase.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Web Technologies</h4>
                </div>
                <p className="text-sm text-gray-400">React.js Integration, Authentication (JWT), Cloud Deployment.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
