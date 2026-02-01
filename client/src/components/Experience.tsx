import { useState } from "react";
import { Building2, Calendar, Award, CheckCircle2, Maximize2, X } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Java Development Intern",
      company: "Kodnest",
      type: "Internship & Professional Training",
      period: "2024", // Assuming year based on context, can be adjusted
      location: "Bangalore",
      image: "/images/kodnest.png",
      certificate: "/images/Full-Stack Java Development Intern - visual selection.png",
      highlights: [
        "Built multiple backend-driven applications following industry architecture standards.",
        "Mastered query optimization, backend logic design, and API-style architecture.",
        "Implemented secure Authentication & Authorization workflows.",
        "Collaborated in agile team environments to deliver project milestones."
      ],
      impact:
        "Solidified my understanding of professional software development, exposing me to real-world challenges, industry best practices, and the importance of writing scalable, maintainable code."
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background border-t border-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto" />
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <ScrollReveal key={exp.id}>
              <div className="glass-card rounded-3xl overflow-hidden border border-white/10 relative group">
                {/* Decorative Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

                  {/* Left Column: Role & Company Info (Span 4) */}
                  <div className="lg:col-span-4 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-2">
                      <Building2 className="w-8 h-8 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                      <p className="text-lg text-blue-400 font-medium mb-1">{exp.role}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wide">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto space-y-3 text-sm text-gray-400">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>Duration: May 2025 - Dec 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span>Role: Developer Intern</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Achievements & Impact (Span 8) */}
                  <div className="lg:col-span-8 space-y-8">

                    {/* Highlights Grid */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-l-2 border-blue-500 pl-3">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.highlights.map((item, i) => (
                          <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                            <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact & Certificate Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest border-l-2 border-purple-500 pl-3">Impact</h4>
                        <p className="text-gray-300 italic text-sm leading-loose bg-black/20 p-4 rounded-xl border border-white/5">
                          "{exp.impact}"
                        </p>
                      </div>

                      {/* Interactive Certificate Preview */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest border-l-2 border-orange-500 pl-3">Completion Certificate</h4>
                        <motion.div
                          className="relative h-32 rounded-xl overflow-hidden cursor-pointer group/cert border border-white/10"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedCertificate(exp.certificate)}
                        >
                          <img
                            src={exp.certificate}
                            alt="Certificate"
                            className="w-full h-full object-cover opacity-60 group-hover/cert:opacity-100 transition-opacity duration-500"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                            <span className="flex items-center gap-2 px-4 py-2 bg-black/80 rounded-full text-white text-xs font-bold border border-white/20">
                              <Maximize2 className="w-3 h-3" /> View Full Credential
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedCertificate}
                  alt="Full Certificate"
                  className="rounded-lg shadow-2xl max-w-full max-h-[85vh] object-contain border border-white/10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
