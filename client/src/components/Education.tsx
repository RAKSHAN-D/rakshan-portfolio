import { GraduationCap, School, BookOpen, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      major: "Electronics and Communication",
      institution: "S.D.M College of Engineering & Technology",
      location: "Dharwad",
      period: "2021 - 2025",
      score: "8.07 CGPA",
      icon: GraduationCap,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      id: 2,
      degree: "Pre-University (PUC)",
      major: "Science (PCMB)",
      institution: "SMPU Science College",
      location: "Dharwad",
      period: "2019 - 2021",
      score: "88.66%",
      icon: School,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      id: 3,
      degree: "Secondary Education (SSLC)",
      major: "High School",
      institution: "St. Joseph's High School",
      location: "Dharwad",
      period: "2006 - 2019",
      score: "94.24%",
      icon: BookOpen,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-background border-t border-gray-800">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Academic Journey</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto" />
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {/* Continuous Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 opacity-30 transform -translate-x-1/2 hidden md:block" />

          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-800 md:hidden" />

          {education.map((edu, index) => (
            <ScrollReveal
              key={edu.id}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Timeline Dot (Center) */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className={`w-4 h-4 rounded-full ${edu.bg.replace('/10', '')} ring-4 ring-background border-2 ${edu.border.replace('/20', '')}`} />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0">
                <motion.div
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${edu.bg} ${edu.border} border`}>
                      <edu.icon className={`w-6 h-6 ${edu.color}`} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Award className="w-3 h-3 text-yellow-500" />
                      <span className="text-sm font-bold text-white">{edu.score}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{edu.major}</p>

                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between text-sm gap-2">
                    <span className="text-gray-300 font-medium flex items-center gap-2">
                      <School className="w-3 h-3" /> {edu.institution}
                    </span>
                    <span className="text-gray-500 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Empty Space for alternate side */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />

            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
